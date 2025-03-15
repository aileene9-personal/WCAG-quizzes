import React from 'react';
import {
  HStack,
  Button,
  Tooltip,
  Badge,
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
  onSkip: () => void;
  onSubmit: () => void;
  onPauseResume: () => void;
  isPaused: boolean;
  pausesRemaining: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  hasAnswer: boolean;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  onPrevious,
  onNext,
  onSkip,
  onSubmit,
  onPauseResume,
  isPaused,
  pausesRemaining,
  isFirstQuestion,
  isLastQuestion,
  hasAnswer,
}) => {
  return (
    <HStack spacing={4} width="100%" justify="space-between">
      <HStack>
        <Tooltip label={isFirstQuestion ? 'This is the first question' : 'Previous question'}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={onPrevious}
            isDisabled={isFirstQuestion}
            variant="outline"
          >
            Previous
          </Button>
        </Tooltip>

        <Tooltip label={isLastQuestion ? 'This is the last question' : 'Next question'}>
          <Button
            rightIcon={<ChevronRightIcon />}
            onClick={onNext}
            isDisabled={isLastQuestion}
            colorScheme={hasAnswer ? 'blue' : 'gray'}
          >
            Next
          </Button>
        </Tooltip>

        <Tooltip label="Skip this question">
          <Button
            onClick={onSkip}
            variant="ghost"
            colorScheme="yellow"
          >
            Skip
          </Button>
        </Tooltip>
      </HStack>

      <HStack>
        <Tooltip label={`${pausesRemaining} pauses remaining`}>
          <Button
            leftIcon={<TimeIcon />}
            onClick={onPauseResume}
            isDisabled={pausesRemaining === 0 && !isPaused}
            colorScheme={isPaused ? 'yellow' : 'gray'}
          >
            {isPaused ? 'Resume' : 'Pause'}
            <Badge ml={2} colorScheme={pausesRemaining > 0 ? 'green' : 'red'}>
              {pausesRemaining}
            </Badge>
          </Button>
        </Tooltip>

        <Tooltip label={isLastQuestion ? 'Submit quiz' : 'Go to last question to submit'}>
          <Button
            leftIcon={<CheckIcon />}
            onClick={onSubmit}
            isDisabled={!isLastQuestion}
            colorScheme="green"
          >
            Submit
          </Button>
        </Tooltip>
      </HStack>
    </HStack>
  );
};

export default QuizControls; 