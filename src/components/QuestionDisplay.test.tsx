import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../test/utils';
import userEvent from '@testing-library/user-event';
import QuestionDisplay from './QuestionDisplay';
import { quizQuestions } from '../data/quizQuestions';

describe('QuestionDisplay', () => {
  const mockQuestion = quizQuestions[0];
  const mockOnAnswer = vi.fn();

  it('renders the question text', () => {
    render(
      <QuestionDisplay
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        isSkipped={false}
      />
    );

    expect(screen.getByText(mockQuestion.question)).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(
      <QuestionDisplay
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        isSkipped={false}
      />
    );

    mockQuestion.options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('handles option selection', async () => {
    const user = userEvent.setup();
    render(
      <QuestionDisplay
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        isSkipped={false}
      />
    );

    const option = screen.getByText(mockQuestion.options[0]);
    await user.click(option);

    expect(mockOnAnswer).toHaveBeenCalledWith(mockQuestion.options[0]);
  });

  it('disables options when question is skipped', () => {
    render(
      <QuestionDisplay
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        isSkipped={true}
      />
    );

    const options = screen.getAllByRole('radio');
    options.forEach(option => {
      expect(option).toBeDisabled();
    });
  });

  it('shows selected answer when provided', () => {
    const selectedAnswer = mockQuestion.options[0];
    render(
      <QuestionDisplay
        question={mockQuestion}
        onAnswer={mockOnAnswer}
        selectedAnswer={selectedAnswer}
        isSkipped={false}
      />
    );

    const option = screen.getByLabelText(selectedAnswer);
    expect(option).toBeChecked();
  });
}); 