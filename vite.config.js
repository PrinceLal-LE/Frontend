import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    host : '0.0.0.0',
    port : 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Your backend URL
        changeOrigin: true,
      }
    }
  }
})
