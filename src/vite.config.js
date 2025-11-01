import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/s/', // 👈 usa el nombre EXACTO de tu repo aquí
})
