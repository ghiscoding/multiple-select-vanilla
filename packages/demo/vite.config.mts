import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 4000,
    cors: true,
    open: true,
    host: 'localhost',
  },
  optimizeDeps: {
    exclude: ['multiple-select-vanilla'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
