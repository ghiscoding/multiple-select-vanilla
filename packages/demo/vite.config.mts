import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    cors: true,
    open: true,
    host: 'localhost',
  },
});
