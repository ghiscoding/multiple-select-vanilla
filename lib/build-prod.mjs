import { buildSync } from 'esbuild';
import { globSync } from 'glob';

const buildFormats = ['cjs', 'esm'];
const localeFiles = globSync('src/locales/**/*.ts');
const localeEntryPoints = [];

for (const format of buildFormats) {
  const extension = format === 'cjs' ? 'js' : 'js';
  // multiple-select.js
  runBuild({
    format,
    outfile: `dist/${format}/multiple-select.${extension}`,
  });

  // build all locales
  for (const localeFile of localeFiles) {
    // eslint-disable-next-line no-unused-vars
    const [_, locale] = localeFile.match(/multiple-select-(.*)\.ts$/) || [];
    if (locale && locale.length === 5) {
      localeEntryPoints.push(`src/locales/multiple-select-${locale}.ts`);
      runBuild({
        entryPoints: [`src/locales/multiple-select-${locale}.ts`],
        format,
        outfile: `dist/locales${format === 'cjs' ? '-cjs' : ''}/multiple-select-${locale}.${extension}`,
      });
    }
  }

  // also merge all Locales into a single file "multiple-select-all-locales.js"
  runBuild({
    entryPoints: ['./src/locales/all-locales-index.ts'],
    format,
    outfile: `dist/locales${format === 'cjs' ? '-cjs' : ''}/multiple-select-all-locales.${extension}`,
  });

  // finally, create a regular bundle as a standalone which will be accessible as MultipleSelect from the global window object
  // this file is basically a legacy alternative to import via a <script> tag
  runBuild({
    format,
    globalName: 'MultipleSelect',
    outfile: `dist/browser${format === 'cjs' ? '-cjs' : ''}/multiple-select.${extension}`,
  });
}

function runBuild(options) {
  const startTime = new Date().getTime();
  const buildOptions = {
    ...{
      color: true,
      entryPoints: ['./src/index.ts'],
      bundle: true,
      minify: true,
      target: 'es2021',
      sourcemap: true,
      logLevel: 'error',
    },
    ...options,
  };
  buildSync(buildOptions);
  const endTime = new Date().getTime();
  console.info(`⚡️ Built "${buildOptions.outfile}" in ${endTime - startTime}ms`);
}
