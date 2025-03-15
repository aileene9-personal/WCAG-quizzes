import { validateEnvironment } from './envValidation';

// Validate environment variables before creating the config
if (import.meta.env.VITE_APP_ENV === 'production') {
  const errors = validateEnvironment();
  if (errors.length > 0) {
    throw new Error(`Environment validation failed: ${JSON.stringify(errors, null, 2)}`);
  }
}

export const config = {
  app: {
    title: import.meta.env.VITE_APP_TITLE,
    description: import.meta.env.VITE_APP_DESCRIPTION,
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    env: import.meta.env.VITE_APP_ENV,
    apiUrl: import.meta.env.VITE_API_URL,
  },
  features: {
    debug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    darkMode: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
  },
  quiz: {
    defaultQuestionCount: parseInt(import.meta.env.VITE_DEFAULT_QUESTIONS_COUNT, 10),
    defaultTimePerQuestion: parseInt(import.meta.env.VITE_DEFAULT_TIME_PER_QUESTION, 10),
  },
  performance: {
    enableSourceMaps: import.meta.env.VITE_ENABLE_SOURCE_MAPS === 'true',
    enableCompression: import.meta.env.VITE_ENABLE_COMPRESSION === 'true',
  },
  security: {
    enableHttps: import.meta.env.VITE_ENABLE_HTTPS === 'true',
    enableCsp: import.meta.env.VITE_ENABLE_CSP === 'true',
  },
  cache: {
    duration: parseInt(import.meta.env.VITE_CACHE_DURATION || '3600', 10),
    enableServiceWorker: import.meta.env.VITE_ENABLE_SERVICE_WORKER === 'true',
  },
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
} as const;

// Type-safe config getter
export function getConfig<T extends keyof typeof config>(key: T): typeof config[T] {
  return config[key];
}

// Helper for feature flags
export function isFeatureEnabled(feature: keyof typeof config.features): boolean {
  return config.features[feature];
} 