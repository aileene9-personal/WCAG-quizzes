import React from 'react';
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

const QuizResults: React.FC<QuizResultsProps> = ({
  questions,
  answers,
  skippedQuestions,
  score,
  timeTaken,
  onRetry,
}) => {
  const percentage = (score / questions.length) * 100;

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
          <Text fontSize="sm" color="gray.600">
            {question.wasBoKSection}
          </Text>
        </VStack>
      );
    } else {
      return (
        <Text fontSize="sm" color="gray.600">
          {question.wcagCriterion} ({question.wcagLevel})
        </Text>
      );
    }
  };

  const renderLearnMore = (question: QuizQuestion) => {
    if (question.wasBoKDomain) {
      return null; // No external link for WASBoK questions
    } else if (question.wcagLink) {
      return (
        <Link
          href={question.wcagLink}
          isExternal
          color="blue.500"
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
        <Heading size="xl" mb={4}>
          Quiz Results
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" color={percentage >= 70 ? 'green.500' : 'red.500'}>
          {score}/{questions.length} ({percentage.toFixed(1)}%)
        </Text>
        <Text color="gray.600">
          Time taken: {formatTime(timeTaken)}
        </Text>
      </Box>

      <Box overflowX="auto" width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th width="40%">Question</Th>
              <Th width="20%">Your Answer</Th>
              <Th width="20%">Correct Answer</Th>
              <Th width="20%">Explanation</Th>
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

              return (
                <Tr key={index} bg={isSkipped ? 'yellow.50' : isCorrect ? 'green.50' : 'red.50'}>
                  <Td>
                    <Text fontWeight="medium">{question.question}</Text>
                    {renderQuestionMetadata(question)}
                  </Td>
                  <Td>{formatAnswer(userAnswer)}</Td>
                  <Td>{formatAnswer(question.correctAnswer)}</Td>
                  <Td>
                    <Text fontSize="sm">{question.explanation}</Text>
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
        >
          Retake This Quiz
        </Button>
        <Button
          leftIcon={<RepeatIcon />}
          onClick={() => onRetry?.('new')}
          colorScheme="green"
        >
          Take New Quiz
        </Button>
      </HStack>
    </VStack>
  );
};

export default QuizResults; 