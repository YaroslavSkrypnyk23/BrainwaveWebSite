import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BrainwaveWebSite/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Зберігає  основний JavaScript файл в кореневій папці dist
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'index.css'; // Зберігає CSS файл в кореневій папці dist
          }
          return 'assets/[name].[ext]'; // Інші статичні файли в папці assets
        },
      },
    },
  },
})