import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useToast,
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

const Quiz: React.FC<QuizProps> = ({ settings, questions: initialQuestions, onComplete, onNewQuiz }) => {
  const toast = useToast();
  const [questions] = useState(initialQuestions);
  const [state, setState] = useState<QuizState>(() => ({
    currentQuestion: 0,
    questions: initialQuestions,
    answers: {},
    skippedQuestions: new Set<number>(),
    score: 0,
    timeRemaining: {
      total: settings.totalTime,
      question: settings.timePerQuestion,
    } as TimeRemaining,
    pausesRemaining: 3,
    isComplete: false,
    isPaused: false,
    mode: settings.enableTimer ? 'timed' : 'practice',
  }));

  const currentQuestion = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    if (!settings.enableTimer) return;

    const timer = setInterval(() => {
      setState(prev => ({
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

    if (isCorrect) {
      setState(prev => ({
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentQuestion]: answer,
        },
        score: prev.score + 1,
      }));
      toast({
        title: 'Correct!',
        description: currentQuestion.explanation,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Incorrect',
        description: currentQuestion.explanation,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    handleNextQuestion();
  }, [currentQuestion, toast]);

  const handleNextQuestion = useCallback(() => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
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
      setState(prev => ({ ...prev, isComplete: true }));
      onComplete(result);
    }
  }, [state.currentQuestion, questions.length, state.answers, state.skippedQuestions, state.score, settings.totalTime, onComplete]);

  const handleSkip = useCallback(() => {
    setState(prev => ({
      ...prev,
      skippedQuestions: new Set([...prev.skippedQuestions, prev.currentQuestion]),
      currentQuestion: Math.min(prev.currentQuestion + 1, prev.questions.length - 1),
    }));
  }, []);

  const handlePrevious = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }));
  }, []);

  const handlePauseResume = useCallback(() => {
    setState(prev => {
      if (!prev.isPaused && prev.pausesRemaining === 0) {
        toast({
          title: 'No pauses remaining',
          status: 'warning',
          duration: 3000,
        });
        return prev;
      }
      return {
        ...prev,
        isPaused: !prev.isPaused,
        pausesRemaining: prev.isPaused ? prev.pausesRemaining : prev.pausesRemaining - 1,
      };
    });
  }, [toast]);

  const handleRetry = useCallback((mode: 'same' | 'new') => {
    if (mode === 'same') {
      setState({
        currentQuestion: 0,
        questions: questions,
        answers: {},
        skippedQuestions: new Set(),
        score: 0,
        timeRemaining: {
          total: settings.totalTime,
          question: settings.timePerQuestion,
        },
        pausesRemaining: 3,
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

  return (
    <VStack spacing={6} width="100%" maxW="800px" mx="auto" p={4}>
      <QuizProgress
        current={state.currentQuestion + 1}
        total={questions.length}
        skipped={state.skippedQuestions}
      />
      
      <QuizTimer
        timeRemaining={state.timeRemaining}
        isPaused={state.isPaused}
        onTimeUpdate={(total, question) =>
          setState(prev => ({
            ...prev,
            timeRemaining: { total, question },
          }))
        }
        mode={state.mode}
      />

      <QuestionDisplay
        question={currentQuestion}
        onAnswer={handleAnswer}
        selectedAnswer={state.answers[state.currentQuestion]}
        isSkipped={state.skippedQuestions.has(state.currentQuestion)}
      />

      <QuizControls
        onPrevious={handlePrevious}
        onNext={handleNextQuestion}
        onSkip={handleSkip}
        onSubmit={handleNextQuestion}
        onPauseResume={handlePauseResume}
        isPaused={state.isPaused}
        pausesRemaining={state.pausesRemaining}
        isFirstQuestion={state.currentQuestion === 0}
        isLastQuestion={state.currentQuestion === questions.length - 1}
        hasAnswer={Boolean(state.answers[state.currentQuestion])}
      />
    </VStack>
  );
};

export default Quiz; 