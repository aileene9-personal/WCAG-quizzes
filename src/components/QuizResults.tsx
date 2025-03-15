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
    <Box p={{ base: 2, md: 4 }} width="100%">
      <VStack spacing={{ base: 4, md: 6 }} align="stretch">
        <Heading size={{ base: "lg", md: "xl" }} textAlign="center">
          Quiz Results
        </Heading>
        <Box
          p={{ base: 3, md: 4 }}
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="md"
        >
          <VStack spacing={{ base: 3, md: 4 }} align="center">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={scoreColor}>
              {percentage.toFixed(1)}%
            </Text>
            <Text color={mutedTextColor}>
              {score} out of {questions.length} questions correct
            </Text>
            <Text color={mutedTextColor}>
              Time taken: {formatTime(timeTaken)}
            </Text>
          </VStack>
        </Box>

        <Box overflowX="auto">
          <Table variant="simple" size={{ base: "sm", md: "md" }}>
            <Thead>
              <Tr>
                <Th>Question</Th>
                <Th>Your Answer</Th>
                <Th>Correct Answer</Th>
                <Th>Explanation</Th>
                <Th>Result</Th>
                <Th>Learn More</Th>
              </Tr>
            </Thead>
            <Tbody>
              {questions.map((question, index) => (
                <Tr
                  key={question.id}
                  bg={
                    skippedQuestions.has(index)
                      ? tableBgColors.skipped
                      : answers[question.id] === question.correctAnswer
                      ? tableBgColors.correct
                      : tableBgColors.incorrect
                  }
                >
                  <Td maxW={{ base: "150px", md: "200px" }} isTruncated>
                    {question.question}
                  </Td>
                  <Td>{formatAnswer(answers[question.id])}</Td>
                  <Td>{formatAnswer(question.correctAnswer)}</Td>
                  <Td maxW={{ base: "200px", md: "300px" }}>
                    <Text fontSize="sm" color={mutedTextColor}>
                      {question.explanation}
                    </Text>
                  </Td>
                  <Td>
                    <Badge
                      colorScheme={
                        skippedQuestions.has(index)
                          ? 'yellow'
                          : answers[question.id] === question.correctAnswer
                          ? 'green'
                          : 'red'
                      }
                    >
                      {skippedQuestions.has(index)
                        ? 'Skipped'
                        : answers[question.id] === question.correctAnswer
                        ? 'Correct'
                        : 'Incorrect'}
                    </Badge>
                  </Td>
                  <Td>{renderLearnMore(question)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {onRetry && (
          <HStack spacing={{ base: 2, md: 4 }} justify="center" mt={{ base: 2, md: 4 }}>
            <Button
              leftIcon={<RepeatIcon />}
              onClick={() => onRetry('same')}
              colorScheme="blue"
              size={{ base: "sm", md: "md" }}
            >
              Retry Same Questions
            </Button>
            <Button
              leftIcon={<RepeatIcon />}
              onClick={() => onRetry('new')}
              colorScheme="green"
              size={{ base: "sm", md: "md" }}
            >
              Try New Questions
            </Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default QuizResults; 