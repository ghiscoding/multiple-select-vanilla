import { buildSync } from 'esbuild';
import { globSync } from 'tinyglobby';

const buildFormats = ['esm'];
const localeFiles = globSync('src/locales/**/*.ts');

for (const format of buildFormats) {
  runBuild({
    format,
    outfile: `dist/index.js`,
  });

  // build all locales (short names, e.g. "es-ES.ts")
  for (const localeFile of localeFiles) {
    const match = localeFile.match(/src\/locales\/(..-..).ts$/);
    if (match?.[1] && !['index', 'all-locales'].includes(match[1])) {
      const locale = match[1];
      runBuild({
        entryPoints: [localeFile],
        format,
        outfile: `dist/locales/${locale}.js`,
      });
    }
  }

  // also merge all Locales into a single file "all-locales.js" (the registry)
  runBuild({
    entryPoints: ['./src/locales/all-locales.ts'],
    format,
    outfile: `dist/locales/all-locales.js`,
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
