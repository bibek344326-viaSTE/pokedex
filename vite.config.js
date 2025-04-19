import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web2-assignment2-vite-react-pokemon/',
  plugins: [react()]
})