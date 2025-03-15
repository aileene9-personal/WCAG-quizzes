import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { Box, Container, VStack, useColorMode } from '@chakra-ui/react';
import Quiz from './components/Quiz';
import { QuizSettings, QuizResult, WCAGLevel, Difficulty } from './types/quiz';
import { quizQuestions } from './data/quizQuestions';
import { config, isFeatureEnabled } from './config/env';

const defaultSettings: QuizSettings = {
  questionCount: config.quiz.defaultQuestionCount,
  timePerQuestion: config.quiz.defaultTimePerQuestion,
  totalTime: config.quiz.defaultQuestionCount * config.quiz.defaultTimePerQuestion,
  enableTimer: true,
  enableAudioNotifications: true,
  maxPauses: 3,
  filters: {
    level: ['A', 'AA', 'AAA'] as WCAGLevel[],
    categories: [],
    difficulty: ['beginner', 'intermediate', 'advanced'] as Difficulty[],
  },
};

function App() {
  const [settings] = useState<QuizSettings>(defaultSettings);
  const [quizKey, setQuizKey] = useState(0);
  const [questions, setQuestions] = useState(() => getRandomQuestions());
  const { colorMode, toggleColorMode } = useColorMode();

  // Initialize dark mode based on configuration
  useEffect(() => {
    if (isFeatureEnabled('darkMode') && colorMode === 'light') {
      toggleColorMode();
    }
  }, []); // Run only once on mount

  function getRandomQuestions() {
    const allQuestions = [...quizQuestions];
    if (allQuestions.length === 0) {
      console.error('No quiz questions available');
      return [];
    }
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    const count = Math.min(settings.questionCount, allQuestions.length);
    return shuffled.slice(0, count);
  }

  // Add a check for empty questions
  useEffect(() => {
    const randomQuestions = getRandomQuestions();
    if (randomQuestions.length === 0) {
      console.error('No questions available for the quiz');
      return;
    }
    setQuestions(randomQuestions);
  }, [settings.questionCount]);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    if (config.features.debug) {
      console.log('Quiz completed:', result);
    }
    // Handle quiz completion (save results, show summary, etc.)
  }, []);

  const handleNewQuiz = useCallback(() => {
    setQuestions(getRandomQuestions());
    setQuizKey(prev => prev + 1);
  }, []);

  return (
    <Container 
      maxW="container.xl" 
      py={{ base: 4, md: 8 }}
      px={{ base: 2, sm: 4, md: 6 }}
    >
      <VStack spacing={{ base: 4, md: 8 }}>
        <Box w="100%">
          <Quiz
            key={quizKey}
            settings={settings}
            questions={questions}
            onComplete={handleQuizComplete}
            onNewQuiz={handleNewQuiz}
          />
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
