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
  base: mode === 'production' ? '/WCAG-quizzes/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    modulePreload: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        format: 'es',
        inlineDynamicImports: false
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true
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
