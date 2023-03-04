import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'node:path';
import glob from 'glob';

const dirname = path.dirname(__filename);
const localeFiles: string[] = glob.sync('src/locales/**/*.ts');
const localeEntryPoints: string[] = [];
const locales: string[] = [resolve(dirname, `src/locales/all-locales-index.ts`)];
const localeInputs: { [locale: string]: string } = {
  all: resolve(dirname, `src/locales/all-locales-index.ts`),
};

for (const localeFile of localeFiles) {
  // eslint-disable-next-line no-unused-vars
  const [_, locale] = localeFile.match(/multiple-select-(.*)\.ts$/) || [];
  if (locale && locale.length === 5) {
    // locales.push(locale);
    localeInputs[locale] = resolve(dirname, `src/locales/multiple-select-${locale}.ts`);
    localeEntryPoints.push(resolve(dirname, `src/locales/multiple-select-${locale}.ts`));
  }
}

export default defineConfig({
  base: './',
  mode: 'library',
  build: {
    emptyOutDir: false,
    minify: true,
    sourcemap: false,
    lib: {
      entry: locales.map((locale) => resolve(dirname, `src/locales/multiple-select-${locale}.ts`)),
      // entry: [
      //   resolve(dirname, 'src/locales/multiple-select-en-US.ts'),
      //   resolve(dirname, 'src/locales/multiple-select-es-ES.ts'),
      // ],
      formats: ['es', 'cjs'],
      // name: 'multiple-select-all-locales',
      // fileName: ' multiple-select-all-locales',
      fileName: (format, entryName) => {
        if (entryName === 'all') {
          return `multiple-select-all-locales.${format === 'cjs' ? 'cjs' : 'js'}`;
        }
        return `locales/multiple-select-${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`;
      },
    },
    rollupOptions: {
      input: localeInputs,
      // input: {
      //   // inlineDynamicImports: false,
      //   // all: resolve(dirname, 'src/locales/all-locales-index.ts'),
      //   'en-US': resolve(dirname, 'src/locales/multiple-select-en-US.ts'),
      //   'es-ES': resolve(dirname, 'src/locales/multiple-select-es-ES.ts'),
      // },
      // output: [
      //   {
      //     format: 'umd',
      //     name: '[name]',
      //     inlineDynamicImports: true,
      //     entryFileNames: '[name].bundle.[format].js',
      //     // entryFileNames: 'multiple-select.[format].js',
      //   },
      // ],
    },
  },
});
