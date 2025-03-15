import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../test/utils';
import userEvent from '@testing-library/user-event';
import Quiz from './Quiz';
import { quizQuestions } from '../data/quizQuestions';
import { QuizSettings } from '../types/quiz';

const mockSettings: QuizSettings = {
  questionCount: 2,
  timePerQuestion: 30,
  totalTime: 60,
  enableTimer: true,
  enableAudioNotifications: false,
  filters: {
    level: ['A', 'AA', 'AAA'],
    categories: [],
    difficulty: ['beginner', 'intermediate', 'advanced'],
  },
};

const mockQuestions = quizQuestions.slice(0, 2);
const mockOnComplete = vi.fn();
const mockOnNewQuiz = vi.fn();

describe('Quiz', () => {
  it('renders the first question', () => {
    render(
      <Quiz
        settings={mockSettings}
        questions={mockQuestions}
        onComplete={mockOnComplete}
        onNewQuiz={mockOnNewQuiz}
      />
    );

    expect(screen.getByText(mockQuestions[0].question)).toBeInTheDocument();
  });

  it('shows options for the current question', () => {
    render(
      <Quiz
        settings={mockSettings}
        questions={mockQuestions}
        onComplete={mockOnComplete}
        onNewQuiz={mockOnNewQuiz}
      />
    );

    mockQuestions[0].options.forEach(option => {
      expect(screen.getByLabelText(option)).toBeInTheDocument();
    });
  });

  it('handles answer selection', async () => {
    const user = userEvent.setup();
    render(
      <Quiz
        settings={mockSettings}
        questions={mockQuestions}
        onComplete={mockOnComplete}
        onNewQuiz={mockOnNewQuiz}
      />
    );

    const firstOption = screen.getByLabelText(mockQuestions[0].options[0]);
    await user.click(firstOption);

    // Should move to next question
    expect(screen.getByText(mockQuestions[1].question)).toBeInTheDocument();
  });

  it('shows quiz completion after answering all questions', async () => {
    const user = userEvent.setup();
    render(
      <Quiz
        settings={mockSettings}
        questions={mockQuestions}
        onComplete={mockOnComplete}
        onNewQuiz={mockOnNewQuiz}
      />
    );

    // Answer all questions
    for (const question of mockQuestions) {
      const option = screen.getByLabelText(question.options[0]);
      await user.click(option);
    }

    // Should call onComplete
    expect(mockOnComplete).toHaveBeenCalled();
  });

  it('allows skipping questions', async () => {
    const user = userEvent.setup();
    render(
      <Quiz
        settings={mockSettings}
        questions={mockQuestions}
        onComplete={mockOnComplete}
        onNewQuiz={mockOnNewQuiz}
      />
    );

    const skipButton = screen.getByRole('button', { name: /skip/i });
    await user.click(skipButton);

    // Should move to next question
    expect(screen.getByText(mockQuestions[1].question)).toBeInTheDocument();
  });
}); 