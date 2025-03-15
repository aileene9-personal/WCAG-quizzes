interface ValidationError {
  variable: string;
  message: string;
}

const requiredVariables = [
  'VITE_APP_TITLE',
  'VITE_APP_DESCRIPTION',
  'VITE_APP_BASE_URL',
  'VITE_APP_ENV',
  'VITE_API_URL',
  'VITE_DEFAULT_QUESTIONS_COUNT',
  'VITE_DEFAULT_TIME_PER_QUESTION',
] as const;

const numericVariables = [
  'VITE_DEFAULT_QUESTIONS_COUNT',
  'VITE_DEFAULT_TIME_PER_QUESTION',
  'VITE_CACHE_DURATION',
] as const;

const booleanVariables = [
  'VITE_ENABLE_DEBUG',
  'VITE_ENABLE_ANALYTICS',
  'VITE_ENABLE_DARK_MODE',
  'VITE_ENABLE_SOURCE_MAPS',
  'VITE_ENABLE_COMPRESSION',
  'VITE_ENABLE_HTTPS',
  'VITE_ENABLE_CSP',
  'VITE_ENABLE_SERVICE_WORKER',
] as const;

export function validateEnvironment(): ValidationError[] {
  const errors: ValidationError[] = [];

  // Check required variables
  requiredVariables.forEach((variable) => {
    if (!import.meta.env[variable]) {
      errors.push({
        variable,
        message: `Missing required environment variable: ${variable}`,
      });
    }
  });

  // Validate numeric variables
  numericVariables.forEach((variable) => {
    const value = import.meta.env[variable];
    if (value && isNaN(Number(value))) {
      errors.push({
        variable,
        message: `Invalid numeric value for ${variable}: ${value}`,
      });
    }
  });

  // Validate boolean variables
  booleanVariables.forEach((variable) => {
    const value = import.meta.env[variable];
    if (value && value !== 'true' && value !== 'false') {
      errors.push({
        variable,
        message: `Invalid boolean value for ${variable}: ${value}. Must be 'true' or 'false'`,
      });
    }
  });

  // Validate URLs
  if (import.meta.env.VITE_API_URL && !isValidUrl(import.meta.env.VITE_API_URL)) {
    errors.push({
      variable: 'VITE_API_URL',
      message: `Invalid URL format: ${import.meta.env.VITE_API_URL}`,
    });
  }

  // Validate environment
  if (import.meta.env.VITE_APP_ENV && !['development', 'production'].includes(import.meta.env.VITE_APP_ENV)) {
    errors.push({
      variable: 'VITE_APP_ENV',
      message: `Invalid environment value: ${import.meta.env.VITE_APP_ENV}. Must be 'development' or 'production'`,
    });
  }

  return errors;
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Validate environment variables on startup
if (import.meta.env.VITE_APP_ENV === 'production') {
  const errors = validateEnvironment();
  if (errors.length > 0) {
    console.error('Environment validation failed:', errors);
    // In production, we might want to show a user-friendly error message
    // or redirect to a maintenance page
  }
} 