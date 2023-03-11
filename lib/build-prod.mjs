import { buildSync } from 'esbuild';
import { globSync } from 'glob';

const buildFormats = ['cjs', 'esm'];
const localeFiles = globSync('src/locales/**/*.ts');
const localeEntryPoints = [];

for (const format of buildFormats) {
  // multiple-select.js
  runBuild({ format, outfile: `dist/${format}/multiple-select.js` });
  // runBuild({ format, outfile: `dist/multiple-select.${format === 'esm' ? 'mjs' : 'cjs'}` });
}

// build all locales
for (const localeFile of localeFiles) {
  // eslint-disable-next-line no-unused-vars
  const [_, locale] = localeFile.match(/multiple-select-(.*)\.ts$/) || [];
  if (locale && locale.length === 5) {
    localeEntryPoints.push(`src/locales/multiple-select-${locale}.ts`);
    runBuild({
      entryPoints: [`src/locales/multiple-select-${locale}.ts`],
      format: 'iife',
      outfile: `dist/locales/multiple-select-${locale}.js`,
    });
  }
}

// also merge all Locales into a single file "multiple-select-all-locales.js"
runBuild({
  entryPoints: ['./src/locales/all-locales-index.ts'],
  format: 'iife',
  outfile: `dist/multiple-select-all-locales.js`,
});

// finally, create a regular bundle as a standalone which will be accessible as MultipleSelect from the global window object
// this file is basically a legacy alternative to import via a <script> tag
runBuild({
  format: 'iife',
  globalName: 'MultipleSelect',
  outfile: `dist/multiple-select.js`,
});

function runBuild(options) {
  const startTime = new Date().getTime();
  const buildOptions = {
    ...{
      color: true,
      entryPoints: ['./src/index.ts'],
      bundle: true,
      minify: true,
      target: 'es2020',
      sourcemap: true,
      logLevel: 'error',
    },
    ...options,
  };
  buildSync(buildOptions);
  const endTime = new Date().getTime();
  console.info(`⚡️ Built "${buildOptions.outfile}" in ${endTime - startTime}ms`);
}
