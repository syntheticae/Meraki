import { UserProgress, QuizAttemptRecord, WritingSubmission } from '@/types/user';

const STORAGE_KEY = 'meraki_english_user_progress_v1';

const DEFAULT_USER_PROGRESS: UserProgress = {
  userId: 'local_learner_01',
  displayName: 'Independent Scholar',
  level: 'Basic to Intermediate',
  completedLessons: ['basic-01'], // 1st lesson completed as demo or start
  bookmarkedLessons: [],
  quizAttempts: {
    'basic-01': {
      lessonId: 'basic-01',
      score: 100,
      maxScore: 100,
      percentage: 100,
      completedAt: new Date().toISOString(),
    },
  },
  streak: {
    currentStreak: 3,
    longestStreak: 7,
    lastStudyDate: new Date().toISOString().split('T')[0],
    historyDates: [
      new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0],
      new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0],
      new Date().toISOString().split('T')[0],
    ],
  },
  writingSubmissions: [],
  mockExamResults: [],
  stats: {
    totalMinutesStudied: 145,
    totalExercisesCompleted: 18,
    vocabularyMasteredCount: 42,
  },
  dailyGoalMinutes: 20,
  preferredDialect: 'en-US',
};

/**
 * Storage Service
 * Abstracted async interface matching Supabase table queries.
 * When migrating to Supabase:
 * Replace localStorage calls with `supabase.from('user_progress').upsert(...)`
 */
class LocalProgressRepository {
  private getLocalData(): UserProgress {
    if (typeof window === 'undefined') {
      return DEFAULT_USER_PROGRESS;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_USER_PROGRESS));
        return DEFAULT_USER_PROGRESS;
      }
      return { ...DEFAULT_USER_PROGRESS, ...JSON.parse(stored) };
    } catch (e) {
      console.warn('Could not read user progress from localStorage', e);
      return DEFAULT_USER_PROGRESS;
    }
  }

  private saveLocalData(data: UserProgress): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save user progress to localStorage', e);
    }
  }

  async getProgress(): Promise<UserProgress> {
    return Promise.resolve(this.getLocalData());
  }

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

  async isLessonCompleted(lessonId: string): Promise<boolean> {
    const data = this.getLocalData();
    return Promise.resolve(data.completedLessons.includes(lessonId));
  }

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

  async saveWritingSubmission(submission: WritingSubmission): Promise<UserProgress> {
    const data = this.getLocalData();
    data.writingSubmissions.unshift(submission);
    data.stats.totalExercisesCompleted += 1;
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

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

  async addStudyTime(minutes: number): Promise<UserProgress> {
    const data = this.getLocalData();
    data.stats.totalMinutesStudied += minutes;
    this.updateStreakInternal(data);
    this.saveLocalData(data);
    return Promise.resolve(data);
  }

  private updateStreakInternal(data: UserProgress): void {
    const today = new Date().toISOString().split('T')[0];
    if (!data.streak.historyDates.includes(today)) {
      data.streak.historyDates.push(today);
    }
    
    const lastDate = data.streak.lastStudyDate;
    if (lastDate === today) {
      return; // Already studied today
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastDate === yesterday) {
      data.streak.currentStreak += 1;
    } else {
      // Missed a day
      data.streak.currentStreak = 1;
    }

    if (data.streak.currentStreak > data.streak.longestStreak) {
      data.streak.longestStreak = data.streak.currentStreak;
    }

    data.streak.lastStudyDate = today;
  }
}

export const progressRepository = new LocalProgressRepository();
