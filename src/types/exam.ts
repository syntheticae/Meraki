export type ExamType = 'ielts' | 'toefl';

export interface ExamQuestionOption {
  id: string;
  text: string;
}

export interface ExamQuestion {
  id: string;
  section: 'listening' | 'reading' | 'writing' | 'speaking';
  type: 'multiple-choice' | 'true-false-not-given' | 'matching-headings' | 'sentence-completion' | 'integrated-summary';
  questionNumber: number;
  prompt: string;
  contextPassage?: string;
  audioPlaceholderText?: string;
  options?: ExamQuestionOption[];
  correctAnswer: string | string[];
  explanation: string;
  skillTested: string;
}

export interface MockExamSection {
  id: string;
  sectionName: string;
  timeLimitMinutes: number;
  instructions: string;
  passage?: {
    title: string;
    text: string;
    wordCount: number;
  };
  questions: ExamQuestion[];
}

export interface MockExam {
  id: string;
  type: ExamType;
  title: string;
  subtitle: string;
  difficulty: string;
  totalTimeMinutes: number;
  totalQuestions: number;
  description: string;
  sections: MockExamSection[];
}

export interface ScoreBandConversion {
  rawScoreRange: [number, number];
  bandScore: number;
  cefrLevel: 'B1' | 'B2' | 'C1' | 'C2';
  description: string;
}
