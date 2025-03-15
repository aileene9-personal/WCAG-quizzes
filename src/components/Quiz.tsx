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
import { QuizQuestion, getRandomQuestions } from '../data/quizQuestions';
import { QuizState, QuizSettings, QuizResult } from '../types/quiz';
import { QuizQuestion as QuizQuestionType } from '../data/types';
import QuestionDisplay from './QuestionDisplay';
import QuizTimer from './QuizTimer';
import QuizProgress from './QuizProgress';
import QuizResults from './QuizResults';
import QuizControls from './QuizControls';

interface TimeRemaining {
  total: number;
  question: number;
}

interface QuizProps {
  settings: QuizSettings;
  questions: QuizQuestion[];
  onComplete: (result: QuizResult) => void;
  onNewQuiz: () => void;
}

const Quiz: React.FC<QuizProps> = ({ settings, questions: initialQuestions, onComplete, onNewQuiz }) => {
  const toast = useToast();
  const [questions, setQuestions] = useState(initialQuestions);
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

  const handleAnswer = useCallback((answer: string | string[]) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [prev.currentQuestion]: answer,
      },
    }));
  }, []);

  const handleSkip = useCallback(() => {
    setState(prev => ({
      ...prev,
      skippedQuestions: new Set([...prev.skippedQuestions, prev.currentQuestion]),
      currentQuestion: Math.min(prev.currentQuestion + 1, prev.questions.length - 1),
    }));
  }, []);

  const handleNext = useCallback(() => {
    setState(prev => ({
      ...prev,
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

  const calculateScore = useCallback(() => {
    let score = 0;
    Object.entries(state.answers).forEach(([index, answer]) => {
      const question = questions[Number(index)];
      const isCorrect = Array.isArray(question.correctAnswer)
        ? Array.isArray(answer) &&
          answer.length === question.correctAnswer.length &&
          answer.every(a => question.correctAnswer.includes(a))
        : answer === question.correctAnswer;
      if (isCorrect) score++;
    });
    return score;
  }, [questions, state.answers]);

  const handleSubmit = useCallback(() => {
    const score = calculateScore();
    const result: QuizResult = {
      questions: state.questions,
      answers: state.answers,
      skippedQuestions: state.skippedQuestions,
      score,
      timeTaken: settings.totalTime - state.timeRemaining.total,
      completedAt: new Date(),
    };
    setState(prev => ({ ...prev, isComplete: true, score }));
    onComplete(result);
  }, [calculateScore, onComplete, settings.totalTime, state]);

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

  useEffect(() => {
    if (state.timeRemaining.total <= 0 && !state.isComplete) {
      handleSubmit();
    }
  }, [state.timeRemaining.total, state.isComplete, handleSubmit]);

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
        question={questions[state.currentQuestion]}
        onAnswer={handleAnswer}
        selectedAnswer={state.answers[state.currentQuestion]}
        isSkipped={state.skippedQuestions.has(state.currentQuestion)}
      />

      <QuizControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSkip={handleSkip}
        onSubmit={handleSubmit}
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