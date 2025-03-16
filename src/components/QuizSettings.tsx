import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  VStack,
  Heading,
} from '@chakra-ui/react';
import type { QuizSettings as QuizSettingsType } from '../types/quiz';

interface QuizSettingsProps {
  onStart: (settings: QuizSettingsType) => void;
  initialSettings?: QuizSettingsType | null;
}

const defaultSettings: QuizSettingsType = {
  questionCount: 10,
  timePerQuestion: 60,
  totalTime: 600,
  enableTimer: true,
  enableAudioNotifications: true,
  maxPauses: 3,
  filters: {
    level: ['A', 'AA', 'AAA'],
    categories: [],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    questionType: 'all',
  },
};

export function QuizSettings({ onStart, initialSettings }: QuizSettingsProps) {
  const [settings, setSettings] = useState<QuizSettingsType>(
    initialSettings || defaultSettings
  );

  // Update settings when initialSettings changes
  useEffect(() => {
    if (initialSettings) {
      setSettings(initialSettings);
    }
  }, [initialSettings]);

  const handleQuestionCountChange = (value: string) => {
    const count = parseInt(value) || 10;
    setSettings(prev => ({
      ...prev,
      questionCount: count,
      totalTime: count * prev.timePerQuestion,
    }));
  };

  const handleQuestionTypeChange = (value: string) => {
    setSettings(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        questionType: value as 'all' | 'wcag' | 'general',
      },
    }));
  };

  const handleStart = () => {
    onStart(settings);
  };

  return (
    <Box p={6} maxW="600px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading size="lg" textAlign="center">Quiz Settings</Heading>
        
        <FormControl>
          <FormLabel>Number of Questions</FormLabel>
          <NumberInput
            min={5}
            max={50}
            value={settings.questionCount}
            onChange={handleQuestionCountChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Question Type</FormLabel>
          <Select
            value={settings.filters.questionType}
            onChange={(e) => handleQuestionTypeChange(e.target.value)}
          >
            <option value="all">All Questions</option>
            <option value="wcag">WCAG Standards Only</option>
            <option value="general">General Knowledge (WASBoK & Others)</option>
          </Select>
        </FormControl>

        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleStart}
        >
          Start Quiz
        </Button>
      </VStack>
    </Box>
  );
} 