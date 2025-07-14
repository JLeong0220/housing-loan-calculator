import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name
const repoName = 'housing-loan-calculator'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()]
})