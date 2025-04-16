import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Проверяем существование директорий
const checkDir = (dir) => {
  const fullPath = path.resolve(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Директория ${dir} не существует!`);
  }
  return fullPath;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': checkDir('./src'),
      '@components': checkDir('./src/components'),
      '@containers': checkDir('./src/containers'),
      '@pages': checkDir('./src/pages'),
      '@assets': checkDir('./src/assets'),
      '@layouts': checkDir('./src/layouts'),
      '@ui': checkDir('./src/ui'),
    },
  },
});
