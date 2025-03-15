import { describe, it, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, createMockQuizQuestion } from '../utils';
import Quiz from '../../src/components/Quiz';
import { QuizSettings, QuizQuestion, WCAGLevel, Difficulty } from '../../src/types/quiz';

// Mock quiz questions for testing
const mockQuestions: QuizQuestion[] = [
  createMockQuizQuestion({
    id: '1',
    question: 'Test Question 1',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    explanation: 'Test explanation 1',
    category: 'Test',
    difficulty: 'beginner' as Difficulty,
    wcagCriterion: '1.1.1',
    wcagLevel: 'A' as WCAGLevel,
  }),
  createMockQuizQuestion({
    id: '2',
    question: 'Test Question 2 (Multiple Choice)',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: ['Option 1', 'Option 2'],
    explanation: 'Test explanation 2',
    category: 'Test',
    difficulty: 'intermediate' as Difficulty,
    wcagCriterion: '1.2.1',
    wcagLevel: 'AA' as WCAGLevel,
  }),
];

const defaultSettings: QuizSettings = {
  questionCount: 2,
  timePerQuestion: 30,
  totalTime: 60,
  enableTimer: false,
  enableAudioNotifications: false,
  maxPauses: 3,
  filters: {
    level: ['A', 'AA', 'AAA'] as WCAGLevel[],
    categories: [],
    difficulty: ['beginner', 'intermediate', 'advanced'] as Difficulty[],
  },
};

describe.skip('Quiz Component - Answer Recording', () => {
  const onComplete = vi.fn();
  const onNewQuiz = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should record single-choice answer correctly', async () => {
    render(
      <Quiz
        settings={defaultSettings}
        questions={mockQuestions}
        onComplete={onComplete}
        onNewQuiz={onNewQuiz}
      />
    );

    // Find and select an answer for the first question
    const optionA = screen.getByText('Option A');
    await userEvent.click(optionA);

    // The component should automatically advance to the next question
    expect(screen.getByText('Test Question 2 (Multiple Choice)')).toBeInTheDocument();

    // Complete the quiz to check recorded answers
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    await userEvent.click(option1);
    await userEvent.click(option2);

    // Verify onComplete was called with correct answers
    expect(onComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        answers: {
          '1': 'Option A',
          '2': ['Option 1', 'Option 2'],
        },
      })
    );
  });

  it('should handle skipped questions correctly', async () => {
    render(
      <Quiz
        settings={defaultSettings}
        questions={mockQuestions}
        onComplete={onComplete}
        onNewQuiz={onNewQuiz}
      />
    );

    // Skip the first question
    const skipButton = screen.getByText('Skip');
    await userEvent.click(skipButton);

    // Answer the second question
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    await userEvent.click(option1);
    await userEvent.click(option2);

    // Verify skipped questions are recorded
    expect(onComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        answers: {
          '2': ['Option 1', 'Option 2'],
        },
        skippedQuestions: expect.any(Set),
      })
    );
  });

  it('should maintain answer when navigating back', async () => {
    render(
      <Quiz
        settings={defaultSettings}
        questions={mockQuestions}
        onComplete={onComplete}
        onNewQuiz={onNewQuiz}
      />
    );

    // Answer first question
    const optionA = screen.getByText('Option A');
    await userEvent.click(optionA);

    // Answer second question
    const option1 = screen.getByText('Option 1');
    await userEvent.click(option1);

    // Navigate back
    const previousButton = screen.getByText('Previous');
    await userEvent.click(previousButton);

    // Verify first answer is still selected
    const radioInput = screen.getByLabelText('Option A');
    expect(radioInput).toBeChecked();
  });

  it('should handle multiple-choice answers correctly', async () => {
    render(
      <Quiz
        settings={defaultSettings}
        questions={mockQuestions}
        onComplete={onComplete}
        onNewQuiz={onNewQuiz}
      />
    );

    // Navigate to second question (multiple choice)
    const skipButton = screen.getByText('Skip');
    await userEvent.click(skipButton);

    // Select multiple answers
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    await userEvent.click(option1);
    await userEvent.click(option2);

    // Verify multiple answers are recorded correctly
    expect(onComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        answers: {
          '2': ['Option 1', 'Option 2'],
        },
      })
    );
  });

  it('should calculate score correctly based on answers', async () => {
    render(
      <Quiz
        settings={defaultSettings}
        questions={mockQuestions}
        onComplete={onComplete}
        onNewQuiz={onNewQuiz}
      />
    );

    // Answer first question correctly
    const optionA = screen.getByText('Option A');
    await userEvent.click(optionA);

    // Answer second question correctly
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    await userEvent.click(option1);
    await userEvent.click(option2);

    // Verify score calculation
    expect(onComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        score: 2,
        answers: {
          '1': 'Option A',
          '2': ['Option 1', 'Option 2'],
        },
      })
    );
  });
}); 