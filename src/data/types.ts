/**
 * Represents a single quiz question with its associated metadata and answer options.
 */
export interface QuizQuestion {
  /** Unique identifier for the question */
  id: string;
  
  /** The actual question text */
  question: string;
  
  /** Array of possible answer options */
  options: string[];
  
  /** The correct answer(s) - can be a single string or array of strings for multiple correct answers */
  correctAnswer: string | string[];
  
  /** Detailed explanation of why the answer is correct */
  explanation: string;
  
  /** Optional WCAG quality level (A, AA, or AAA) */
  quality?: 'A' | 'AA' | 'AAA';
  
  /** Optional flag to indicate if multiple answers can be correct */
  multipleCorrect?: boolean;
  
  /** Optional WCAG success criterion reference (e.g., "1.1.1") */
  criterion?: string;
  
  /** Optional category or topic of the question */
  category?: string;
  
  /** Optional difficulty level */
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

/**
 * Configuration options for quiz generation
 */
export interface QuizConfig {
  /** Number of questions to include in the quiz */
  numberOfQuestions: number;
  
  /** Optional quality level filter */
  qualityLevel?: 'A' | 'AA' | 'AAA';
  
  /** Optional category filter */
  category?: string;
  
  /** Optional difficulty level filter */
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  
  /** Optional time limit in minutes */
  timeLimit?: number;
}

/**
 * Quiz results interface
 */
export interface QuizResult {
  /** Total number of questions */
  totalQuestions: number;
  
  /** Number of correctly answered questions */
  correctAnswers: number;
  
  /** Time taken to complete the quiz in seconds */
  timeTaken: number;
  
  /** Array of question IDs that were answered incorrectly */
  incorrectQuestions: string[];
  
  /** Date when the quiz was completed */
  completedAt: Date;
} 