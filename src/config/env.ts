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