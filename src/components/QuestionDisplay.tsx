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
  HStack,
} from '@chakra-ui/react';
import { quizQuestions } from '../data/quizQuestions';

type QuizQuestion = typeof quizQuestions[number];

interface QuestionDisplayProps {
  question: QuizQuestion;
  onAnswer: (answer: string | string[]) => void;
  selectedAnswer?: string | string[];
  isSkipped?: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  isSkipped,
}) => {
  const isMultipleChoice = Array.isArray(question.correctAnswer);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          {question.question}
        </Text>
        {isMultipleChoice ? (
          <CheckboxGroup
            value={Array.isArray(selectedAnswer) ? selectedAnswer : []}
            onChange={(values: string[]) => onAnswer(values)}
          >
            <Stack spacing={2}>
              {question.options.map((option: string) => (
                <Checkbox
                  key={option}
                  value={option}
                  isDisabled={isSkipped}
                >
                  {option}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        ) : (
          <RadioGroup
            value={typeof selectedAnswer === 'string' ? selectedAnswer : ''}
            onChange={onAnswer}
          >
            <Stack spacing={2}>
              {question.options.map((option: string) => (
                <Box
                  key={option}
                  as="label"
                  cursor={isSkipped ? "not-allowed" : "pointer"}
                  p={2}
                  borderRadius="md"
                  _hover={!isSkipped ? { bg: "gray.100", _dark: { bg: "gray.700" } } : undefined}
                  transition="background-color 0.2s"
                >
                  <HStack spacing={3}>
                    <Radio
                      value={option}
                      isDisabled={isSkipped}
                      size="lg"
                    />
                    <Text fontSize="md">{option}</Text>
                  </HStack>
                </Box>
              ))}
            </Stack>
          </RadioGroup>
        )}
      </VStack>
    </Box>
  );
};

export default QuestionDisplay; 