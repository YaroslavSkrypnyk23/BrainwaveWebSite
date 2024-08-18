import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/jsm-brainwave', // Базовий шлях для всіх ресурсів
  
});