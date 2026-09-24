import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
    provider: 'v8',
    include: ['src/**/*.{js,jsx}'],
    exclude: [
      'src/setupTests.js',
      'src/main.jsx',
    ],
    reporter: ['text', 'html'],
    thresholds: {
      statements: 80,
    },
  },
  },
});