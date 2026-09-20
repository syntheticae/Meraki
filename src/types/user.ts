export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // YYYY-MM-DD
  historyDates: string[]; // List of YYYY-MM-DD dates with study activity
}

export interface QuizAttemptRecord {
  lessonId: string;
  score: number;
  maxScore: number;
  percentage: number;
  completedAt: string; // ISO date string
}

export interface WritingSubmission {
  id: string;
  exerciseId: string;
  promptTitle: string;
  taskType: string;
  submittedText: string;
  wordCount: number;
  timeSpentSeconds: number;
  criteriaScores: Record<string, number>; // criterionId -> score (e.g. 7.0)
  overallScore: number;
  submittedAt: string;
}

export interface VaultItem {
  id: string;
  sourceType: 'module-quiz' | 'practice' | 'flashcard' | 'manual';
  question: string;
  correctAnswer: string;
  userAnswer?: string;
  topicTitle?: string;
  addedAt: string; // ISO date string
  reviewCount: number;
  nextReviewAt?: string; // ISO date string for SRS scheduling
}

export interface UserProgress {
  userId: string;
  displayName: string;
  level: string;
  completedLessons: string[];  // lesson ids (for /learn tracks)
  completedTopics: string[];   // topic ids (for /modules 40-bab core curriculum)
  lastViewedTopicId?: string;  // last module topic user was reading — for resume
  bookmarkedLessons: string[];
  quizAttempts: Record<string, QuizAttemptRecord>; // key is lessonId
  streak: StreakData;
  writingSubmissions: WritingSubmission[];
  vaultItems: VaultItem[];     // unified mistake vault
  mockExamResults: Array<{
    id: string;
    examId: string;
    examTitle: string;
    examType: 'ielts' | 'toefl';
    bandOrScore: string;
    completedAt: string;
    sectionBreakdown: Record<string, number>;
  }>;
  stats: {
    totalMinutesStudied: number;
    totalExercisesCompleted: number;
    vocabularyMasteredCount: number;
  };
  dailyGoalMinutes: number;
  preferredDialect: 'en-US' | 'en-GB';
  hasCompletedOnboarding: boolean; // controls onboarding flow
}
