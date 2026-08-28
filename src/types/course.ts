export type TrackLevel = 'basic' | 'intermediate' | 'advanced' | 'exam-prep';

export type SkillCategory = 'grammar' | 'vocabulary' | 'reading' | 'writing' | 'ielts' | 'toefl';

export interface LessonSection {
  id: string;
  title: string;
  badge?: string;
  content: string;
  examples?: Array<{
    sentence: string;
    translation?: string;
    explanation?: string;
    isCorrect?: boolean;
  }>;
  ruleBox?: {
    formula: string;
    explanation: string;
    pitfall?: string;
  };
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'exam-tip';
    title: string;
    text: string;
  };
}

export interface Lesson {
  id: string;
  trackId: string;
  slug: string;
  title: string;
  order: number;
  summary: string;
  readTimeMin: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'IELTS 6.5+' | 'TOEFL 90+';
  objectives: string[];
  sections: LessonSection[];
  keyTakeaways: string[];
  prevLessonId?: string;
  nextLessonId?: string;
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  level: TrackLevel;
  category: SkillCategory;
  description: string;
  iconName: string;
  badgeText: string;
  estimatedHours: number;
  totalLessons: number;
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    bgGlow: string;
  };
  lessons: Lesson[];
}
