// This config is only for VS code vitest extension
import { defineConfig, UserConfigExport } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTest.ts'],
  }
} as UserConfigExport)
