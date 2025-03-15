import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@chakra-ui/react', '@chakra-ui/radio', '@emotion/react', '@emotion/styled', 'framer-motion']
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  base: '/WCAG-quizzes/'
})
