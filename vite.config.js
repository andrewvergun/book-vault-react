import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/book-vault-react/',
  plugins: [react()],
  base: '/book-vault-react/',
})
