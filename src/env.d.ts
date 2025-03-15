/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_ENV: 'development' | 'production'
  readonly VITE_ENABLE_DEBUG: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_ENABLE_DARK_MODE: string
  readonly VITE_API_URL: string
  readonly VITE_DEFAULT_QUESTIONS_COUNT: string
  readonly VITE_DEFAULT_TIME_PER_QUESTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 