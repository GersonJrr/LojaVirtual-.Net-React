import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://localhost:7145',
        changeOrigin: true,
        secure: false, // para aceitar certificado autoassinado
      },
    },
  },
})
