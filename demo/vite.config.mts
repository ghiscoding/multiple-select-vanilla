import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    cors: true,
    host: 'localhost',
  },
});
