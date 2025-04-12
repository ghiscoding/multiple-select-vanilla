import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  server: {
    port: 4000,
    cors: true,
    open: true,
    host: 'localhost',
  },
  optimizeDeps: {
    exclude: ['multiple-select-vanilla'],
  },
});
