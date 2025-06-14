import { buildSync } from 'esbuild';
import { globSync } from 'tinyglobby';

const buildFormats = ['esm'];
const localeFiles = globSync('src/locales/**/*.ts');
const localeEntryPoints = [];

for (const format of buildFormats) {
  runBuild({
    format,
    outfile: `dist/index.js`,
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
        outfile: `dist/locales/multiple-select-${locale}.js`,
      });
    }
  }

  // also merge all Locales into a single file "multiple-select-all-locales.js"
  runBuild({
    entryPoints: ['./src/locales/all-locales-index.ts'],
    format,
    outfile: `dist/locales/multiple-select-all-locales.js`,
  });

  // finally, create a regular bundle as a standalone which will be accessible as MultipleSelect from the global window object
  // this file is basically a legacy alternative to import via a <script> tag
  runBuild({
    format,
    globalName: 'MultipleSelect',
    outfile: `dist/browser/multiple-select.js`,
  });
}

function runBuild(options) {
  const startTime = Date.now();
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
  const endTime = Date.now();
  console.info(`⚡️ Built "${buildOptions.outfile}" in ${endTime - startTime}ms`);
}
