import { describe, it, expect } from 'vitest';
import { render, screen } from './test/utils';
import App from './App';

describe('App', () => {
  it('renders the quiz component', () => {
    render(<App />);
    // The quiz should be visible with the question text
    expect(screen.getByText(/Question 1 of/)).toBeInTheDocument();
  });

  it('initializes with default settings', () => {
    render(<App />);
    // Check if the timer is displayed
    expect(screen.getByText(/Time Remaining:/)).toBeInTheDocument();
    // Check if the progress is shown
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
}); 