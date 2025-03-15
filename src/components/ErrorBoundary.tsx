import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <VStack spacing={4} align="center" p={8}>
          <Heading size="lg">Something went wrong</Heading>
          <Text color="red.500">{this.state.error?.message}</Text>
          <Button
            colorScheme="blue"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
        </VStack>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 