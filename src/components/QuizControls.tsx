import React from 'react';
import {
  HStack,
  VStack,
  Button,
  Tooltip,
  Badge,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TimeIcon,
  CheckIcon,
} from '@chakra-ui/icons';

interface QuizControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  hasAnswer: boolean;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  onPrevious,
  onNext,
  onSubmit,
  isFirstQuestion,
  isLastQuestion,
  hasAnswer,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavigationButtons = () => (
    <HStack spacing={{ base: 2, md: 4 }} width="100%" justify="center">
      <Tooltip label={isFirstQuestion ? 'This is the first question' : 'Previous question'}>
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={onPrevious}
          isDisabled={isFirstQuestion}
          variant="outline"
          size={{ base: "sm", md: "md" }}
        >
          {!isMobile && "Previous"}
        </Button>
      </Tooltip>

      <Tooltip label={isLastQuestion ? 'This is the last question' : 'Next question'}>
        <Button
          rightIcon={<ChevronRightIcon />}
          onClick={onNext}
          isDisabled={isLastQuestion}
          colorScheme={hasAnswer ? 'blue' : 'gray'}
          size={{ base: "sm", md: "md" }}
        >
          {!isMobile && "Next"}
        </Button>
      </Tooltip>
    </HStack>
  );

  const ActionButtons = () => (
    <HStack spacing={{ base: 2, md: 4 }} width="100%" justify="center">
      <Tooltip label={isLastQuestion ? 'Submit quiz' : 'Go to last question to submit'}>
        <Button
          leftIcon={<CheckIcon />}
          onClick={onSubmit}
          isDisabled={!isLastQuestion}
          colorScheme="green"
          size={{ base: "sm", md: "md" }}
        >
          Submit
        </Button>
      </Tooltip>
    </HStack>
  );

  return (
    <Box width="100%">
      <VStack spacing={4} width="100%">
        <NavigationButtons />
        <ActionButtons />
      </VStack>
    </Box>
  );
};

export default QuizControls; 