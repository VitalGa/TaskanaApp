import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const checkDir = (dir) => {
  const fullPath = path.resolve(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Директория ${dir} не существует!`);
  }
  return fullPath;
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': checkDir('./src'),
    },
  },
});
