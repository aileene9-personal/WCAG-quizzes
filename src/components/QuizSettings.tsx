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
  Switch,
  HStack,
  Text,
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
  enableTimer: false,
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
  const [settings, setSettings] = useState<QuizSettingsType>(() => {
    const initial = initialSettings || defaultSettings;
    return {
      ...initial,
      // If timer is disabled, ensure timer-related values are 0
      timePerQuestion: initial.enableTimer ? 60 : 0,
      totalTime: initial.enableTimer ? initial.questionCount * 60 : 0,
    };
  });

  // Update settings when initialSettings changes
  useEffect(() => {
    if (initialSettings) {
      setSettings(prev => ({
        ...initialSettings,
        timePerQuestion: initialSettings.enableTimer ? 60 : 0,
        totalTime: initialSettings.enableTimer ? initialSettings.questionCount * 60 : 0,
      }));
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

  const handleTimerToggle = (checked: boolean) => {
    setSettings(prev => ({
      ...prev,
      enableTimer: checked,
      // Set to 60 seconds when enabled, 0 when disabled
      timePerQuestion: checked ? 60 : 0,
      totalTime: checked ? prev.questionCount * 60 : 0,
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

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="timer-toggle" mb="0">
            Enable Timer
          </FormLabel>
          <Switch
            id="timer-toggle"
            isChecked={settings.enableTimer}
            onChange={(e) => handleTimerToggle(e.target.checked)}
          />
        </FormControl>

        {settings.enableTimer && (
          <FormControl>
            <FormLabel>Time per Question (seconds)</FormLabel>
            <NumberInput
              min={30}
              max={300}
              value={settings.timePerQuestion}
              onChange={(value) => {
                const time = parseInt(value) || 60;
                setSettings(prev => ({
                  ...prev,
                  timePerQuestion: time,
                  totalTime: time * prev.questionCount,
                }));
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text fontSize="sm" color="gray.600" mt={1}>
              Total time: {Math.floor(settings.totalTime / 60)} minutes {settings.totalTime % 60} seconds
            </Text>
          </FormControl>
        )}

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