import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { Box, Container, VStack, useColorMode, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import Quiz from './components/Quiz';
import { QuizSettings as QuizSettingsType, QuizResult } from './types/quiz';
import { quizQuestions, getRandomQuestions } from './data/quizQuestions';
import { config, isFeatureEnabled } from './config/env';
import { QuizSettings } from './components/QuizSettings';
import QuizResults from './components/QuizResults';

function App() {
  const [settings, setSettings] = useState<QuizSettingsType | null>(null);
  const [quizKey, setQuizKey] = useState(0);
  const [questions, setQuestions] = useState<typeof quizQuestions>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [showSettings, setShowSettings] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Initialize dark mode based on configuration
  useEffect(() => {
    if (isFeatureEnabled('darkMode') && colorMode === 'light') {
      toggleColorMode();
    }
  }, []); // Run only once on mount

  const handleStartQuiz = useCallback((newSettings: QuizSettingsType) => {
    setSettings(newSettings);
    const selectedQuestions = getRandomQuestions(
      newSettings.questionCount,
      newSettings.filters.questionType
    );
    setQuestions(selectedQuestions);
    setQuizResult(null);
    setShowSettings(false);
  }, []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    if (config.features.debug) {
      console.log('Quiz completed:', result);
    }
    setQuizResult(result);
  }, []);

  const handleRetry = useCallback((mode: 'same' | 'new') => {
    if (mode === 'same') {
      setQuizResult(null);
      setQuizKey(prev => prev + 1);
    } else if (mode === 'new' && settings) {
      const newQuestions = getRandomQuestions(
        settings.questionCount,
        settings.filters.questionType
      );
      setQuestions(newQuestions);
      setQuizResult(null);
      setQuizKey(prev => prev + 1);
    }
  }, [settings]);

  const handleSettingsClick = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const handleSettingsConfirm = useCallback(() => {
    onClose();
    setShowSettings(true);
    setSettings(null);
    setQuizResult(null);
  }, [onClose]);

  const renderContent = () => {
    if (showSettings) {
      return <QuizSettings onStart={handleStartQuiz} initialSettings={settings} />;
    }

    if (quizResult) {
      return (
        <QuizResults
          questions={questions}
          answers={quizResult.answers}
          skippedQuestions={quizResult.skippedQuestions}
          score={quizResult.score}
          timeTaken={quizResult.timeTaken}
          onRetry={handleRetry}
        />
      );
    }

    return (
      <Box position="relative" w="100%">
        <Box position="absolute" top={4} right={4} zIndex={2}>
          <IconButton
            aria-label="Settings"
            icon={<SettingsIcon />}
            onClick={handleSettingsClick}
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
          />
        </Box>
        <Box pt={16}>
          <Quiz
            key={quizKey}
            settings={settings!}
            questions={questions}
            onComplete={handleQuizComplete}
            onNewQuiz={() => setShowSettings(true)}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Container 
      maxW="container.xl" 
      py={{ base: 4, md: 8 }}
      px={{ base: 2, sm: 4, md: 6 }}
    >
      <VStack spacing={{ base: 4, md: 8 }}>
        <Box w="100%">
          {renderContent()}
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Warning</ModalHeader>
          <ModalBody>
            Going to settings will reset your current quiz progress. Do you want to continue?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSettingsConfirm}>
              Continue
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default App;
