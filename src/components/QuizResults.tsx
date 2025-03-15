import React from 'react';
import type { ReactElement } from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  HStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { QuizQuestion } from '../types/quiz';

interface QuizResultsProps {
  questions: QuizQuestion[];
  answers: Record<string, string | string[]>;
  skippedQuestions: Set<number>;
  score: number;
  timeTaken: number;
  onRetry?: (mode: 'same' | 'new') => void;
}

const QuizResults = ({ questions, answers, skippedQuestions, score, timeTaken, onRetry }: QuizResultsProps): ReactElement => {
  const percentage = (score / questions.length) * 100;
  const textColor = useColorModeValue('gray.900', 'white');
  const mutedTextColor = useColorModeValue('gray.700', 'gray.200');
  const tableBgColors = {
    correct: useColorModeValue('green.100', 'green.800'),
    incorrect: useColorModeValue('red.100', 'red.800'),
    skipped: useColorModeValue('yellow.100', 'yellow.800'),
  };
  const tableTextColors = {
    correct: useColorModeValue('gray.900', 'white'),
    incorrect: useColorModeValue('gray.900', 'white'),
    skipped: useColorModeValue('gray.900', 'white'),
  };
  const scoreColor = percentage >= 70 
    ? useColorModeValue('green.600', 'green.300')
    : useColorModeValue('red.600', 'red.300');

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatAnswer = (answer: string | string[] | undefined) => {
    if (!answer) return 'Not answered';
    return Array.isArray(answer) ? answer.join(', ') : answer;
  };

  const renderQuestionMetadata = (question: QuizQuestion) => {
    if (question.wasBoKDomain) {
      return (
        <VStack align="start" spacing={1}>
          <Badge colorScheme="purple">{question.wasBoKDomain}</Badge>
          <Text fontSize="sm" color={mutedTextColor}>
            {question.wasBoKSection}
          </Text>
        </VStack>
      );
    } else {
      return (
        <Text fontSize="sm" color={mutedTextColor}>
          {question.wcagCriterion} ({question.wcagLevel})
        </Text>
      );
    }
  };

  const renderLearnMore = (question: QuizQuestion) => {
    if (question.wasBoKDomain) {
      return null; // No external link for WASBoK questions
    } else if (question.wcagLink) {
      const linkColor = useColorModeValue('blue.600', 'blue.300');
      return (
        <Link
          href={question.wcagLink}
          isExternal
          color={linkColor}
          fontSize="sm"
          display="inline-flex"
          alignItems="center"
          mt={2}
        >
          Learn more <ExternalLinkIcon mx="2px" />
        </Link>
      );
    }
    return null;
  };

  return (
    <VStack spacing={8} width="100%" maxW="1200px" mx="auto" p={4}>
      <Box textAlign="center" mb={8}>
        <Heading size="xl" mb={4} color={textColor}>
          Quiz Results
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" color={scoreColor}>
          {score}/{questions.length} ({percentage.toFixed(1)}%)
        </Text>
        <Text color={mutedTextColor}>
          Time taken: {formatTime(timeTaken)}
        </Text>
      </Box>

      <Box overflowX="auto" width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th width="40%" color={textColor}>Question</Th>
              <Th width="20%" color={textColor}>Your Answer</Th>
              <Th width="20%" color={textColor}>Correct Answer</Th>
              <Th width="20%" color={textColor}>Explanation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isSkipped = skippedQuestions.has(index);
              const isCorrect = Array.isArray(question.correctAnswer)
                ? Array.isArray(userAnswer) &&
                  userAnswer.length === question.correctAnswer.length &&
                  userAnswer.every(a => question.correctAnswer.includes(a))
                : userAnswer === question.correctAnswer;

              const rowBg = isSkipped 
                ? tableBgColors.skipped 
                : isCorrect 
                  ? tableBgColors.correct 
                  : tableBgColors.incorrect;
              
              const rowTextColor = isSkipped 
                ? tableTextColors.skipped 
                : isCorrect 
                  ? tableTextColors.correct 
                  : tableTextColors.incorrect;

              return (
                <Tr key={index} bg={rowBg}>
                  <Td>
                    <Text fontWeight="medium" color={rowTextColor}>{question.question}</Text>
                    {renderQuestionMetadata(question)}
                  </Td>
                  <Td color={rowTextColor}>{formatAnswer(userAnswer)}</Td>
                  <Td color={rowTextColor}>{formatAnswer(question.correctAnswer)}</Td>
                  <Td>
                    <Text fontSize="sm" color={rowTextColor}>{question.explanation}</Text>
                    {renderLearnMore(question)}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>

      <HStack spacing={4} mt={8}>
        <Button
          leftIcon={<RepeatIcon />}
          onClick={() => onRetry?.('same')}
          colorScheme="blue"
          size="lg"
        >
          Retake This Quiz
        </Button>
        <Button
          leftIcon={<RepeatIcon />}
          onClick={() => onRetry?.('new')}
          colorScheme="green"
          size="lg"
        >
          Take New Quiz
        </Button>
      </HStack>
    </VStack>
  );
};

export default QuizResults; 