export type ExerciseType = 'multiple-choice' | 'fill-blank' | 'matching' | 'shadowing' | 'writing-rubric';

export interface BaseExercise {
  id: string;
  lessonId: string;
  type: ExerciseType;
  title: string;
  instruction: string;
  points: number;
}

export interface MultipleChoiceOption {
  id: string;
  text: string;
  explanation: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  question: string;
  contextSnippet?: string;
  options: MultipleChoiceOption[];
  correctAnswerId: string;
  grammarTip?: string;
}

export interface BlankTarget {
  index: number;
  correctAnswers: string[]; // case-insensitive acceptable variants
  hint?: string;
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill-blank';
  sentence: string; // Template with [___] or {0}, {1}
  targets: BlankTarget[];
  wordBank?: string[];
  explanation: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: MatchingPair[];
  explanation: string;
}

export interface ShadowingExercise extends BaseExercise {
  type: 'shadowing';
  textToShadow: string;
  ipaPhonetic?: string;
  translation?: string;
  audioVoice?: 'en-US' | 'en-GB';
  keyIntonationPoints: string[];
  tips: string;
}

export interface RubricDescriptor {
  score: number;
  label: string;
  description: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  weightPercent: number;
  descriptors: RubricDescriptor[];
}

export interface WritingRubricExercise extends BaseExercise {
  type: 'writing-rubric';
  prompt: string;
  taskType: 'IELTS-Task-1' | 'IELTS-Task-2' | 'TOEFL-Academic' | 'General-Essay';
  suggestedTimeMin: number;
  minWordCount: number;
  maxWordCount?: number;
  criteria: RubricCriterion[];
  modelAnswer: {
    bandOrScore: string;
    text: string;
    analysis: string[];
  };
  recommendedVocabulary: Array<{
    term: string;
    definition: string;
    example: string;
  }>;
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | MatchingExercise
  | ShadowingExercise
  | WritingRubricExercise;
