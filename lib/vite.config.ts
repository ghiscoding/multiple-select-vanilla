import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import path from 'node:path';

const dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  mode: 'library',
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: [
        resolve(dirname, 'src/index.ts'),
        // resolve(dirname, 'src/locales/all-locales-index.ts'),
        // resolve(dirname, 'src/locales/multiple-select-en-US.ts'),
      ],
      name: 'MultipleSelect',
      fileName: 'multiple-select',
    },
    rollupOptions: {
      input: {
        'multiple-select': resolve(dirname, 'src/index.ts'),
        // locales: resolve(dirname, 'src/locales/all-locales-index.ts'),
        // locales: resolve(dirname,'src/locales/multiple-select-en-US.ts'),
      },
      output: [
        {
          format: 'cjs',
          entryFileNames: '[name].bundle.[format].js',
          inlineDynamicImports: false,
          // entryFileNames: 'multiple-select.[format].js',
        },
        {
          format: 'es',
          entryFileNames: '[name].bundle.[format].js',
          inlineDynamicImports: false,
          // entryFileNames: 'multiple-select.[format].js',
        },
        {
          format: 'umd',
          name: 'MultipleSelect',
          entryFileNames: '[name].bundle.[format].js',
          // entryFileNames: 'multiple-select.[format].js',
        },
      ],
    },
  },
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
    }),
  ],
});
