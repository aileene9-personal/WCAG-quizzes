/// <reference types="vitest" />
/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ['@chakra-ui/react', '@chakra-ui/radio', '@emotion/react', '@emotion/styled', 'framer-motion']
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  base: '/WCAG-quizzes/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion']
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    minify: 'esbuild',
    cssMinify: true,
    esbuild: {
      jsxInject: `import React from 'react'`,
      jsxDev: mode === 'development',
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  preview: {
    port: 8080,
    strictPort: false,
    host: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
      ],
    },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
}))
