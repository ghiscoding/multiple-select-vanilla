import { defineConfig } from 'tsup';

export default defineConfig(options => [
  // for bundlers like vite, rollup, esbuild, webpack etc
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    splitting: false,
    sourcemap: true,
    // clean: true,
    dts: !options.watch,
    minify: !options.watch,
    outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
  },
  // common js for node and other backend runtimes
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    splitting: false,
    sourcemap: true,
    // clean: true,
    dts: !options.watch,
    minify: true,
    outExtension: ({ format }) => ({
      js: format === 'cjs' ? '.cjs' : '.mjs',
    }),
  },

  // IIFE bundle js for cdn (window object for legacy <script>)
  {
    entry: {
      'browser/multiple-select': 'src/index.ts',
    },
    format: ['iife'],
    globalName: 'MultipleSelect',
    splitting: false,
    sourcemap: true,
    // clean: true,
    outExtension: ({ format }) => ({
      js: '.iife.js',
    }),
  },
]);
