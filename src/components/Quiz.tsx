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
import ErrorBoundary from './ErrorBoundary';

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
    mode: settings.enableTimer ? 'timed' : 'practice',
    timeRemaining: {
      total: settings.totalTime,
      question: settings.timePerQuestion,
    },
    score: 0,
  }));

  const currentQuestion = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    if (!settings.enableTimer) return;

    let timer: NodeJS.Timeout;
    let lastTime = Date.now();
    let isVisible = document.visibilityState === 'visible';

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible) {
        lastTime = Date.now();
      }
    };

    const updateTimer = () => {
      if (!isVisible) return;
      
      const now = Date.now();
      const delta = Math.floor((now - lastTime) / 1000);
      lastTime = now;

      setState((prev: QuizState) => ({
        ...prev,
        timeRemaining: {
          total: Math.max(0, prev.timeRemaining.total - delta),
          question: Math.max(0, prev.timeRemaining.question - delta),
        },
      }));
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [state.currentQuestion, settings.enableTimer]);

  const handleAnswer = useCallback((answer: string | string[]) => {
    try {
      const isCorrect = Array.isArray(currentQuestion.correctAnswer)
        ? Array.isArray(answer) &&
          answer.length === currentQuestion.correctAnswer.length &&
          answer.every(a => currentQuestion.correctAnswer.includes(a))
        : answer === currentQuestion.correctAnswer;

      setState((prev: QuizState) => {
        const newAnswers = {
          ...prev.answers,
          [currentQuestion.id]: answer,
        };
        
        const newScore = isCorrect ? prev.score + 1 : prev.score;
        
        if (prev.currentQuestion < questions.length - 1) {
          return {
            ...prev,
            answers: newAnswers,
            score: newScore,
            currentQuestion: prev.currentQuestion + 1,
            timeRemaining: {
              total: prev.timeRemaining.total,
              question: prev.timeRemaining.question,
            },
          };
        } else {
          const result: QuizResult = {
            questions: questions,
            answers: newAnswers,
            skippedQuestions: prev.skippedQuestions,
            score: newScore,
            timeTaken: settings.enableTimer ? settings.totalTime - prev.timeRemaining.total : 0,
            completedAt: new Date(),
          };
          onComplete(result);
          return {
            ...prev,
            answers: newAnswers,
            score: newScore,
            isComplete: true,
          };
        }
      });
    } catch (error) {
      console.error('Error handling answer:', error);
    }
  }, [currentQuestion, questions.length, settings.totalTime, settings.enableTimer, onComplete]);

  const handlePrevious = useCallback(() => {
    setState((prev: QuizState) => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }));
  }, []);

  const handleNext = useCallback(() => {
    if (state.currentQuestion === questions.length - 1) {
      const result: QuizResult = {
        questions: questions,
        answers: state.answers,
        skippedQuestions: state.skippedQuestions,
        score: state.score,
        timeTaken: settings.enableTimer ? settings.totalTime - state.timeRemaining.total : 0,
        completedAt: new Date(),
      };
      setState((prev: QuizState) => ({ ...prev, isComplete: true }));
      onComplete(result);
    } else {
      setState((prev: QuizState) => ({
        ...prev,
        currentQuestion: Math.min(prev.currentQuestion + 1, questions.length - 1),
      }));
    }
  }, [state.currentQuestion, questions.length, state.answers, state.skippedQuestions, state.score, settings.totalTime, settings.enableTimer, onComplete]);

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
        isComplete: false,
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
        timeTaken={settings.enableTimer ? settings.totalTime - state.timeRemaining.total : 0}
        onRetry={handleRetry}
        enableTimer={settings.enableTimer}
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
          onSubmit={handleNext}
          isFirstQuestion={state.currentQuestion === 0}
          isLastQuestion={state.currentQuestion === questions.length - 1}
          hasAnswer={Boolean(state.answers[currentQuestion.id])}
        />
      </Box>
    </VStack>
  );
};

const QuizWithErrorBoundary = (props: QuizProps): ReactElement => (
  <ErrorBoundary>
    <Quiz {...props} />
  </ErrorBoundary>
);

export default QuizWithErrorBoundary; 