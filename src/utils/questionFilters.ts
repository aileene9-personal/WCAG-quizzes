import { QuizQuestion } from '../types/quiz';

export function filterQuestionsByType(questions: QuizQuestion[], questionType: 'all' | 'wcag' | 'general'): QuizQuestion[] {
  switch (questionType) {
    case 'wcag':
      // Select only questions that have a wcagCriterion field
      return questions.filter(q => q.wcagCriterion !== undefined);
    case 'general':
      // Select only questions that don't have a wcagCriterion field
      return questions.filter(q => q.wcagCriterion === undefined);
    default:
      return questions;
  }
}

export function getRandomQuestions(questions: QuizQuestion[], count: number, questionType: 'all' | 'wcag' | 'general' = 'all'): QuizQuestion[] {
  // Filter questions based on type
  const filteredQuestions = filterQuestionsByType(questions, questionType);
  
  // Shuffle and return requested number of questions
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, filteredQuestions.length));
} 