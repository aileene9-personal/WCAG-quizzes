# WCAG Quiz Data Structure

This directory contains the data structure and questions for the WCAG Quiz application.

## File Structure

- `types.ts`: Contains TypeScript interfaces defining the data structure
- `quizQuestions.ts`: Contains the actual quiz questions database
- `README.md`: This documentation file

## Data Types

### QuizQuestion Interface

The main interface for quiz questions includes:

- `id`: Unique identifier for each question
- `question`: The actual question text
- `options`: Array of possible answers
- `correctAnswer`: The correct answer(s)
- `explanation`: Detailed explanation of the correct answer
- `quality`: WCAG quality level (A, AA, or AAA)
- `criterion`: WCAG success criterion reference
- `category`: Topic category
- `difficulty`: Question difficulty level

### QuizConfig Interface

Configuration options for quiz generation:

- `numberOfQuestions`: Number of questions to include
- `qualityLevel`: Filter by WCAG quality level
- `category`: Filter by specific category
- `difficulty`: Filter by difficulty level
- `timeLimit`: Optional time limit in minutes

### QuizResult Interface

Structure for storing quiz results:

- `totalQuestions`: Total number of questions
- `correctAnswers`: Number of correct answers
- `timeTaken`: Time taken in seconds
- `incorrectQuestions`: IDs of incorrectly answered questions
- `completedAt`: Completion timestamp

## Usage Guidelines

1. **Adding New Questions**
   - Ensure each question has a unique ID
   - Provide clear, unambiguous question text
   - Include comprehensive explanations
   - Reference specific WCAG criteria when applicable

2. **Categories**
   Main categories include:
   - Perceivable
   - Operable
   - Understandable
   - Robust

3. **Quality Levels**
   - A: Basic accessibility requirements
   - AA: Enhanced accessibility requirements
   - AAA: Highest level of accessibility requirements

4. **Difficulty Levels**
   - Easy: Basic concepts and guidelines
   - Medium: Intermediate implementation details
   - Hard: Complex scenarios and edge cases

## Example Question

```typescript
{
  id: "1",
  question: "What is the minimum contrast ratio required for normal text in WCAG 2.1 Level AA?",
  options: [
    "2.5:1",
    "3:1",
    "4.5:1",
    "7:1"
  ],
  correctAnswer: "4.5:1",
  explanation: "WCAG 2.1 Level AA requires a contrast ratio of at least 4.5:1 for normal text to ensure readability for users with visual impairments.",
  quality: "AA",
  criterion: "1.4.3",
  category: "Perceivable",
  difficulty: "Medium"
}
``` 