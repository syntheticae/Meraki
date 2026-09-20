import { UserProgress, QuizAttemptRecord, WritingSubmission, VaultItem } from '@/types/user';

const STORAGE_KEY = 'meraki_english_user_progress_v2';
// v1 key for migration
const LEGACY_KEY_V1 = 'meraki_english_user_progress_v1';
const LEGACY_TOPICS_KEY = 'meraki_completed_topics';

const DEFAULT_USER_PROGRESS: UserProgress = {
  userId: 'local_learner_01',
  displayName: '',
  level: 'Basic to Intermediate',
  completedLessons: [],
  completedTopics: [],
  lastViewedTopicId: undefined,
  bookmarkedLessons: [],
  quizAttempts: {},
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: '',
    historyDates: [],
  },
  writingSubmissions: [],
  vaultItems: [],
  mockExamResults: [],
  stats: {
    totalMinutesStudied: 0,
    totalExercisesCompleted: 0,
    vocabularyMasteredCount: 0,
  },
  dailyGoalMinutes: 20,
  preferredDialect: 'en-US',
  hasCompletedOnboarding: false,
};

/**
 * Storage Service — Single Source of Truth for all user progress.
 *
 * Handles migration from v1 storage key and legacy `meraki_completed_topics`.
 * When migrating to Supabase, replace localStorage calls with
 * `supabase.from('user_progress').upsert(...)`.
 */
class LocalProgressRepository {
  private getLocalData(): UserProgress {
    if (typeof window === 'undefined') return DEFAULT_USER_PROGRESS;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_USER_PROGRESS, ...JSON.parse(stored) };
      }

      // — Migration from v1 storage —
      const v1 = localStorage.getItem(LEGACY_KEY_V1);
      const legacyTopics = localStorage.getItem(LEGACY_TOPICS_KEY);
      if (v1) {
        const parsed = JSON.parse(v1) as Partial<UserProgress>;
        const migrated: UserProgress = {
          ...DEFAULT_USER_PROGRESS,
          ...parsed,
          completedTopics: legacyTopics ? JSON.parse(legacyTopics) : (parsed.completedTopics ?? []),
          vaultItems: parsed.vaultItems ?? [],
          hasCompletedOnboarding: parsed.hasCompletedOnboarding ?? (!!parsed.displayName && parsed.displayName !== ''),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        // Clean up legacy keys
        localStorage.removeItem(LEGACY_KEY_V1);
        localStorage.removeItem(LEGACY_TOPICS_KEY);
        return migrated;
      }

      // — Fresh start —
      const fresh = { ...DEFAULT_USER_PROGRESS };
      // Absorb any existing legacy topics key even without v1
      if (legacyTopics) {
        fresh.completedTopics = JSON.parse(legacyTopics);
        localStorage.removeItem(LEGACY_TOPICS_KEY);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    } catch (e) {
      console.warn('[Storage] Could not read user progress', e);
      return DEFAULT_USER_PROGRESS;
    }
  }

  private saveLocalData(data: UserProgress): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('[Storage] Could not save user progress', e);
    }
  }

  // ─── Read ───────────────────────────────────────────────────────────────────

  async getProgress(): Promise<UserProgress> {
    return Promise.resolve(this.getLocalData());
  }

  async isLessonCompleted(lessonId: string): Promise<boolean> {
    return Promise.resolve(this.getLocalData().completedLessons.includes(lessonId));
  }

  async isTopicCompleted(topicId: string): Promise<boolean> {
    return Promise.resolve(this.getLocalData().completedTopics.includes(topicId));
  }

  // ─── Lessons (Tracks / Learn) ───────────────────────────────────────────────

  async markLessonComplete(lessonId: string): Promise<UserProgress> {
    const data = this.getLocalData();
    if (!data.completedLessons.includes(lessonId)) {
      data.completedLessons.push(lessonId);
      data.stats.totalExercisesCompleted += 1;
      this.updateStreakInternal(data);
      this.saveLocalData(data);
    }
    return Promise.resolve(data);
  }

  // ─── Topics (40-Modul Core Curriculum) ────────────────────────────────────

  async markTopicComplete(topicId: string): Promise<UserProgress> {
    const data = this.getLocalData();
    if (!data.completedTopics.includes(topicId)) {
      data.completedTopics.push(topicId);
      data.stats.totalExercisesCompleted += 1;
      this.updateStreakInternal(data);
      this.saveLocalData(data);
    }
    return Promise.resolve(data);
  }

  async unmarkTopicComplete(topicId: string): Promise<UserProgress> {
    const data = this.getLocalData();
    data.completedTopics = data.completedTopics.filter((id) => id !== topicId);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  async updateLastViewedTopic(topicId: string): Promise<void> {
    const data = this.getLocalData();
    data.lastViewedTopicId = topicId;
    this.saveLocalData(data);
  }

  // ─── Vault (Unified Mistake Bank) ─────────────────────────────────────────

  async addToVault(items: Omit<VaultItem, 'id' | 'addedAt' | 'reviewCount'>[]): Promise<UserProgress> {
    const data = this.getLocalData();
    const now = new Date().toISOString();
    for (const item of items) {
      // Avoid duplicates by question text
      const exists = data.vaultItems.some((v) => v.question === item.question && v.correctAnswer === item.correctAnswer);
      if (!exists) {
        data.vaultItems.unshift({
          ...item,
          id: 'vault_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
          addedAt: now,
          reviewCount: 0,
        });
      }
    }
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  async removeFromVault(vaultItemId: string): Promise<UserProgress> {
    const data = this.getLocalData();
    data.vaultItems = data.vaultItems.filter((v) => v.id !== vaultItemId);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  async markVaultItemReviewed(vaultItemId: string): Promise<UserProgress> {
    const data = this.getLocalData();
    const item = data.vaultItems.find((v) => v.id === vaultItemId);
    if (item) {
      item.reviewCount += 1;
      // Simple SRS: next review in 1 → 3 → 7 → 14 → 30 days
      const intervals = [1, 3, 7, 14, 30];
      const daysUntilNext = intervals[Math.min(item.reviewCount, intervals.length - 1)];
      const next = new Date();
      next.setDate(next.getDate() + daysUntilNext);
      item.nextReviewAt = next.toISOString();
    }
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Onboarding ────────────────────────────────────────────────────────────

  async completeOnboarding(opts: {
    displayName: string;
    level: string;
    dailyGoalMinutes: number;
    preferredDialect: 'en-US' | 'en-GB';
  }): Promise<UserProgress> {
    const data = this.getLocalData();
    data.displayName = opts.displayName;
    data.level = opts.level;
    data.dailyGoalMinutes = opts.dailyGoalMinutes;
    data.preferredDialect = opts.preferredDialect;
    data.hasCompletedOnboarding = true;
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Bookmarks ─────────────────────────────────────────────────────────────

  async toggleBookmark(lessonId: string): Promise<boolean> {
    const data = this.getLocalData();
    const index = data.bookmarkedLessons.indexOf(lessonId);
    let isBookmarked: boolean;
    if (index > -1) {
      data.bookmarkedLessons.splice(index, 1);
      isBookmarked = false;
    } else {
      data.bookmarkedLessons.push(lessonId);
      isBookmarked = true;
    }
    this.saveLocalData(data);
    return Promise.resolve(isBookmarked);
  }

  // ─── Quiz ──────────────────────────────────────────────────────────────────

  async saveQuizResult(record: QuizAttemptRecord): Promise<UserProgress> {
    const data = this.getLocalData();
    data.quizAttempts[record.lessonId] = record;
    if (!data.completedLessons.includes(record.lessonId) && record.percentage >= 60) {
      data.completedLessons.push(record.lessonId);
    }
    data.stats.totalExercisesCompleted += 1;
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Writing ────────────────────────────────────────────────────────────────

  async saveWritingSubmission(submission: WritingSubmission): Promise<UserProgress> {
    const data = this.getLocalData();
    data.writingSubmissions.unshift(submission);
    data.stats.totalExercisesCompleted += 1;
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Mock Exams ─────────────────────────────────────────────────────────────

  async saveMockExamResult(result: {
    examId: string;
    examTitle: string;
    examType: 'ielts' | 'toefl';
    bandOrScore: string;
    sectionBreakdown: Record<string, number>;
  }): Promise<UserProgress> {
    const data = this.getLocalData();
    data.mockExamResults.unshift({
      id: 'mock_' + Date.now(),
      completedAt: new Date().toISOString(),
      ...result,
    });
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Study Time ─────────────────────────────────────────────────────────────

  async addStudyTime(minutes: number): Promise<UserProgress> {
    const data = this.getLocalData();
    data.stats.totalMinutesStudied += minutes;
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  // ─── Data Portability ───────────────────────────────────────────────────────

  async exportProgressJSON(): Promise<string> {
    return Promise.resolve(JSON.stringify(this.getLocalData(), null, 2));
  }

  async importProgressJSON(jsonString: string): Promise<boolean> {
    try {
      const parsed = JSON.parse(jsonString) as UserProgress;
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed.completedLessons)) {
        // Ensure new fields exist on imported data
        const merged: UserProgress = { ...DEFAULT_USER_PROGRESS, ...parsed };
        this.saveLocalData(merged);
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    } catch {
      return Promise.resolve(false);
    }
  }

  // ─── Internal ───────────────────────────────────────────────────────────────

  private updateStreakInternal(data: UserProgress): void {
    const today = new Date().toISOString().split('T')[0];
    if (!data.streak.historyDates.includes(today)) {
      data.streak.historyDates.push(today);
    }

    const lastDate = data.streak.lastStudyDate;
    if (lastDate === today) return; // Already studied today

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastDate === yesterday) {
      data.streak.currentStreak += 1;
    } else {
      data.streak.currentStreak = 1;
    }

    if (data.streak.currentStreak > data.streak.longestStreak) {
      data.streak.longestStreak = data.streak.currentStreak;
    }

    data.streak.lastStudyDate = today;
  }
}

export const progressRepository = new LocalProgressRepository();
