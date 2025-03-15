export type WCAGLevel = 'A' | 'AA' | 'AAA';
export type QuizMode = 'practice' | 'timed';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string | string[];
  explanation: string;
  category: string;
  difficulty: Difficulty;
  // Quality metrics (0-100)
  qualityRating?: {
    questionClarity: number;    // How clear and well-written the question is
    answerAccuracy: number;     // How accurate and current the answer is
    distractorQuality: number;  // How well-designed the incorrect options are
    overallQuality: number;     // Average of the above scores
  };
  rating?: number;              // Overall question rating (0-100)
  // WCAG-specific fields (optional)
  wcagCriterion?: string;
  wcagLevel?: WCAGLevel;
  wcagLink?: string;
  // WASBoK-specific fields (optional)
  wasBoKDomain?: string;
  wasBoKSection?: string;
}

export interface QuizSettings {
  questionCount: number;
  timePerQuestion: number;
  totalTime: number;
  enableTimer: boolean;
  enableAudioNotifications: boolean;
  maxPauses: number;
  filters: {
    level: WCAGLevel[];
    categories: string[];
    difficulty: Difficulty[];
  };
}

export interface QuizState {
  currentQuestion: number;
  questions: QuizQuestion[];
  answers: Record<string, string | string[]>;
  skippedQuestions: Set<number>;
  score: number;
  timeRemaining: {
    total: number;
    question: number;
  };
  pausesRemaining: number;
  isComplete: boolean;
  isPaused: boolean;
  mode: QuizMode;
}

export interface QuizResult {
  questions: QuizQuestion[];
  answers: Record<string, string | string[]>;
  skippedQuestions: Set<number>;
  score: number;
  timeTaken: number;
  completedAt: Date;
} 