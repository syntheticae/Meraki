/**
 * Meraki English — Smart Roadmap & Adaptive Curriculum Types
 */

export type RoadmapTargetId =
  | 'foundation-30'
  | 'ielts-60'
  | 'toefl-60'
  | 'academic-writing-30'
  | 'custom';

export type RoadmapTaskType = 'module' | 'practice' | 'flashcard' | 'lab' | 'vault';

export interface RoadmapTask {
  id: string;
  type: RoadmapTaskType;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  targetTab: string;
  targetOptions?: {
    topicId?: string;
    stageIdx?: number;
    lessonSlug?: string;
    trackSlug?: string;
    subMode?: string;
  };
  completed: boolean;
  completedAt?: string;
}

export interface RoadmapDayPlan {
  dayNumber: number;          // 1-indexed (Hari 1, Hari 2, ...)
  themeTitle: string;         // e.g. "Fondasi Kalimat S-V-O & Fonetik Vokal"
  phase: number;              // 1: Foundation, 2: Reinforcement, 3: Mastery / Exam Prep
  phaseName: string;          // e.g. "Fase 1: Rekonstruksi Pola Dasar"
  tasks: RoadmapTask[];       // 3 balanced tasks per day
  isCurrentDay: boolean;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface UserRoadmapProgress {
  targetId: RoadmapTargetId;
  targetTitle: string;
  totalDays: number;
  startDate: string;          // ISO Date
  lastActiveDate: string;     // ISO Date
  currentDayIndex: number;    // 0-indexed index of active day
  days: RoadmapDayPlan[];
  diagnosticLevelAtStart?: string;
  customPreferences?: {
    dailyMinutes: number;
    focusAreas: string[];
  };
}

export interface RoadmapPresetMeta {
  id: RoadmapTargetId;
  title: string;
  badge: string;
  durationDays: number;
  estimatedHours: number;
  description: string;
  targetAudience: string;
  accentColor: string;
}
