import React from 'react';
import { HStack, Box, Text, Tooltip } from '@chakra-ui/react';

interface QuizProgressProps {
  current: number;
  total: number;
  skipped: Set<number>;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ current, total, skipped }) => {
  return (
    <Box width="100%">
      <HStack justify="space-between" mb={2}>
        <Text>
          Question {current} of {total}
        </Text>
        <Text>
          {skipped.size} skipped
        </Text>
      </HStack>
      <HStack spacing={1} width="100%">
        {Array.from({ length: total }, (_, i) => (
          <Tooltip
            key={i}
            label={`Question ${i + 1}${skipped.has(i) ? ' (Skipped)' : ''}`}
            aria-label={`Question ${i + 1}${skipped.has(i) ? ' (Skipped)' : ''}`}
          >
            <Box
              flex={1}
              height="4px"
              borderRadius="full"
              bg={
                i + 1 === current
                  ? 'blue.500'
                  : skipped.has(i)
                  ? 'yellow.500'
                  : i + 1 < current
                  ? 'green.500'
                  : 'gray.200'
              }
              transition="background-color 0.2s"
            />
          </Tooltip>
        ))}
      </HStack>
    </Box>
  );
};

export default QuizProgress; 