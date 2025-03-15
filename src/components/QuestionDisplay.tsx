import React from 'react';
import {
  Box,
  VStack,
  Text,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';
import { QuizQuestion } from '../data/types';

interface QuestionDisplayProps {
  question: QuizQuestion;
  selectedAnswer?: string | string[];
  onAnswer: (answer: string | string[]) => void;
  isSkipped: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  isSkipped,
}) => {
  const isMultipleChoice = Array.isArray(question.correctAnswer);

  if (isMultipleChoice) {
    return (
      <Box width="100%" p={4} bg="white" borderRadius="md" shadow="sm">
        <VStack align="stretch" spacing={4}>
          <Text fontSize="xl" fontWeight="semibold">
            {question.question}
          </Text>
          <CheckboxGroup
            value={Array.isArray(selectedAnswer) ? selectedAnswer : []}
            onChange={(values: string[]) => onAnswer(values)}
            isDisabled={isSkipped}
          >
            <Stack spacing={3}>
              {question.options.map((option, index) => (
                <Checkbox key={index} value={option}>
                  {option}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          {question.criterion && (
            <Text fontSize="sm" color="gray.600">
              WCAG Criterion: {question.criterion} ({question.quality})
            </Text>
          )}
        </VStack>
      </Box>
    );
  }

  return (
    <Box width="100%" p={4} bg="white" borderRadius="md" shadow="sm">
      <VStack align="stretch" spacing={4}>
        <Text fontSize="xl" fontWeight="semibold">
          {question.question}
        </Text>
        <RadioGroup
          value={selectedAnswer as string || ''}
          onChange={(value) => onAnswer(value)}
          isDisabled={isSkipped}
        >
          <Stack spacing={3}>
            {question.options.map((option, index) => (
              <Radio key={index} value={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        {question.criterion && (
          <Text fontSize="sm" color="gray.600">
            WCAG Criterion: {question.criterion} ({question.quality})
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default QuestionDisplay; 