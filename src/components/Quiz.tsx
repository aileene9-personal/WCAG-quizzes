import React, { useState, useEffect, useCallback } from 'react';
import type { ReactElement } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Checkbox,
  Progress,
} from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { quizQuestions } from '../data/quizQuestions';
import { QuizState, QuizSettings, QuizResult } from '../types/quiz';
import QuestionDisplay from './QuestionDisplay';
import QuizTimer from './QuizTimer';
import QuizProgress from './QuizProgress';
import QuizResults from './QuizResults';
import QuizControls from './QuizControls';
import { config } from '../config/env';

interface TimeRemaining {
  total: number;
  question: number;
}

interface QuizProps {
  settings: QuizSettings;
  questions: typeof quizQuestions;
  onComplete: (result: QuizResult) => void;
  onNewQuiz: () => void;
}

const Quiz = ({ settings, questions: initialQuestions, onComplete, onNewQuiz }: QuizProps): ReactElement => {
  const [questions] = useState(initialQuestions);
  const [state, setState] = useState<QuizState>(() => ({
    currentQuestion: 0,
    questions: initialQuestions,
    answers: {} as Record<string, string | string[]>,
    skippedQuestions: new Set<number>(),
    isComplete: false,
    isPaused: false,
    mode: settings.enableTimer ? 'timed' : 'practice',
    timeRemaining: {
      total: settings.totalTime,
      question: settings.timePerQuestion,
    },
    pausesRemaining: settings.maxPauses || 0,
    score: 0,
  }));

  const currentQuestion = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    if (!settings.enableTimer) return;

    const timer = setInterval(() => {
      setState((prev: QuizState) => ({
        ...prev,
        timeRemaining: {
          total: prev.timeRemaining.total - 1,
          question: prev.timeRemaining.question,
        },
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [state.currentQuestion, settings.enableTimer]);

  const handleAnswer = useCallback((answer: string | string[]) => {
    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? Array.isArray(answer) &&
        answer.length === currentQuestion.correctAnswer.length &&
        answer.every(a => currentQuestion.correctAnswer.includes(a))
      : answer === currentQuestion.correctAnswer;

    setState((prev: QuizState) => {
      const newState = {
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: answer,
        },
        score: isCorrect ? prev.score + 1 : prev.score,
      };
      
      // Only move to next question after state is updated
      if (prev.currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setState(current => ({
            ...current,
            currentQuestion: Math.min(current.currentQuestion + 1, current.questions.length - 1),
            timeRemaining: {
              total: current.timeRemaining.total - current.timeRemaining.question,
              question: current.timeRemaining.question,
            },
          }));
        }, 0);
      } else {
        const result: QuizResult = {
          questions: questions,
          answers: newState.answers,
          skippedQuestions: newState.skippedQuestions,
          score: newState.score,
          timeTaken: settings.totalTime - newState.timeRemaining.total,
          completedAt: new Date(),
        };
        setTimeout(() => {
          setState(current => ({ ...current, isComplete: true }));
          onComplete(result);
        }, 0);
      }
      
      return newState;
    });
  }, [currentQuestion, questions.length, settings.totalTime, onComplete]);

  const handleNext = useCallback(() => {
    if (state.currentQuestion < questions.length - 1) {
      setState((prev: QuizState) => ({
        ...prev,
        currentQuestion: Math.min(prev.currentQuestion + 1, prev.questions.length - 1),
        timeRemaining: {
          total: prev.timeRemaining.total - prev.timeRemaining.question,
          question: prev.timeRemaining.question,
        },
      }));
    } else {
      const result: QuizResult = {
        questions: questions,
        answers: state.answers,
        skippedQuestions: state.skippedQuestions,
        score: state.score,
        timeTaken: settings.totalTime - state.timeRemaining.total,
        completedAt: new Date(),
      };
      setState((prev: QuizState) => ({ ...prev, isComplete: true }));
      onComplete(result);
    }
  }, [state.currentQuestion, questions.length, state.answers, state.skippedQuestions, state.score, settings.totalTime, onComplete]);

  const handleSkip = useCallback(() => {
    setState((prev: QuizState) => ({
      ...prev,
      skippedQuestions: new Set([...prev.skippedQuestions, prev.currentQuestion]),
      currentQuestion: Math.min(prev.currentQuestion + 1, prev.questions.length - 1),
    }));
  }, []);

  const handlePrevious = useCallback(() => {
    setState((prev: QuizState) => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }));
  }, []);

  const handlePauseResume = useCallback(() => {
    setState((prev: QuizState) => {
      if (!prev.isPaused && prev.pausesRemaining === 0) {
        return prev;
      }
      return {
        ...prev,
        isPaused: !prev.isPaused,
        pausesRemaining: prev.isPaused ? prev.pausesRemaining : prev.pausesRemaining - 1,
      };
    });
  }, []);

  const handleRetry = useCallback((mode: 'same' | 'new') => {
    if (mode === 'same') {
      setState({
        currentQuestion: 0,
        questions: questions,
        answers: {} as Record<string, string | string[]>,
        skippedQuestions: new Set(),
        score: 0,
        timeRemaining: {
          total: settings.totalTime,
          question: settings.timePerQuestion,
        },
        pausesRemaining: settings.maxPauses || 0,
        isComplete: false,
        isPaused: false,
        mode: settings.enableTimer ? 'timed' : 'practice',
      });
    } else {
      onNewQuiz();
    }
  }, [questions, settings, onNewQuiz]);

  if (state.isComplete) {
    return (
      <QuizResults
        questions={questions}
        answers={state.answers}
        skippedQuestions={state.skippedQuestions}
        score={state.score}
        timeTaken={settings.totalTime - state.timeRemaining.total}
        onRetry={handleRetry}
      />
    );
  }

  if (!questions || questions.length === 0 || !questions[state.currentQuestion]) {
    return (
      <VStack spacing={4} align="center" w="100%">
        <Text>No questions available. Please try again later.</Text>
        <Button onClick={onNewQuiz}>Start New Quiz</Button>
      </VStack>
    );
  }

  return (
    <VStack 
      spacing={{ base: 4, md: 6 }} 
      width="100%" 
      maxW="800px" 
      mx="auto" 
      p={{ base: 2, sm: 3, md: 4 }}
    >
      <QuizProgress
        current={state.currentQuestion + 1}
        total={questions.length}
        skipped={state.skippedQuestions}
      />
      
      <QuizTimer
        timeRemaining={state.timeRemaining}
        isPaused={state.isPaused}
        onTimeUpdate={(total: number, question: number) =>
          setState((prev: QuizState) => ({
            ...prev,
            timeRemaining: { total, question },
          }))
        }
        mode={state.mode}
      />

      <Box width="100%" px={{ base: 2, sm: 3, md: 4 }}>
        <QuestionDisplay
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={state.answers[currentQuestion.id]}
          isSkipped={state.skippedQuestions.has(state.currentQuestion)}
        />
      </Box>

      <Box width="100%" mt={{ base: 4, md: 6 }}>
        <QuizControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSkip={handleSkip}
          onSubmit={handleNext}
          onPauseResume={handlePauseResume}
          isPaused={state.isPaused}
          pausesRemaining={state.pausesRemaining}
          isFirstQuestion={state.currentQuestion === 0}
          isLastQuestion={state.currentQuestion === questions.length - 1}
          hasAnswer={Boolean(state.answers[state.currentQuestion])}
        />
      </Box>
    </VStack>
  );
};

export default Quiz; 