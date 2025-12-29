// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The repository name from your GitHub URL
const repoName = 'boxoffice'; 

export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [react()],
});