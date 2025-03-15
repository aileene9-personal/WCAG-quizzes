import { useState, useCallback } from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';
import Quiz from './components/Quiz';
import { QuizSettings, QuizResult, WCAGLevel, Difficulty } from './types/quiz';
import { quizQuestions } from './data/quizQuestions';

const defaultSettings: QuizSettings = {
  questionCount: 20,
  timePerQuestion: 300,
  totalTime: 6000,
  enableTimer: true,
  enableAudioNotifications: true,
  filters: {
    level: ['A', 'AA', 'AAA'] as WCAGLevel[],
    categories: [],
    difficulty: ['beginner', 'intermediate', 'advanced'] as Difficulty[],
  },
};

function App() {
  const [settings] = useState<QuizSettings>(defaultSettings);
  const [quizKey, setQuizKey] = useState(0); // Add key to force Quiz remount
  const [questions, setQuestions] = useState(() => getRandomQuestions());

  function getRandomQuestions() {
    const allQuestions = [...quizQuestions];
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, settings.questionCount);
  }

  const handleQuizComplete = useCallback((result: QuizResult) => {
    console.log('Quiz completed:', result);
    // Handle quiz completion (save results, show summary, etc.)
  }, []);

  const handleNewQuiz = useCallback(() => {
    setQuestions(getRandomQuestions());
    setQuizKey(prev => prev + 1); // Force Quiz component to remount
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
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
