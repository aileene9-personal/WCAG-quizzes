import React, { useEffect, useCallback } from 'react';
import { Box, Text, Progress } from '@chakra-ui/react';

interface QuizTimerProps {
  timeRemaining: {
    total: number;
    question: number;
  };
  onTimeUpdate: (total: number, question: number) => void;
  mode: 'timed' | 'practice';
}

const QuizTimer: React.FC<QuizTimerProps> = ({
  timeRemaining,
  onTimeUpdate,
  mode,
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const updateTime = useCallback(() => {
    if (mode === 'timed') {
      onTimeUpdate(
        Math.max(0, timeRemaining.total - 1),
        Math.max(0, timeRemaining.question - 1)
      );
    }
  }, [mode, timeRemaining, onTimeUpdate]);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  if (mode !== 'timed') {
    return null;
  }

  return (
    <Box width="100%">
      <Text fontSize="sm" fontWeight="medium" mb={2}>
        Time Remaining: {formatTime(timeRemaining.total)}
      </Text>
      <Progress
        value={(timeRemaining.total / timeRemaining.question) * 100}
        size="sm"
        colorScheme={timeRemaining.total < 60 ? 'red' : 'blue'}
      />
    </Box>
  );
};

export default QuizTimer; 