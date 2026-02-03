import { exec, execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { buildSync } from 'esbuild';
import { copyfiles } from 'native-copyfiles';
import { compile as sassCompile } from 'sass';

const env = process.env.NODE_ENV;

// Start the compilation process
const files = process.env.LERNA_FILE_CHANGES.split(',') || [];
runCompilation(files);

function runBuild(options) {
  const startTime = Date.now();
  const buildOptions = {
    ...{
      color: true,
      entryPoints: ['./src/index.ts'],
      bundle: true,
      minify: env === 'production',
      format: 'esm',
      target: 'es2021',
      sourcemap: true,
      logLevel: 'error',
      outfile: 'dist/index.js',
    },
    ...options,
  };
  buildSync(buildOptions);
  const endTime = Date.now();
  console.info(`⚡️ Built in ${endTime - startTime}ms`);
}

function runMergedLocaleBuild() {
  // merge all Locales into a single file "all-locales.js"
  runBuild({
    entryPoints: ['./src/locales/all-locales.ts'],
    format: 'esm',
    outfile: 'dist/locales/all-locales.js',
  });
}

async function runCompilation(changedFiles) {
  let tsLogged = false;
  let sassLogged = false;

  for (const changedFile of changedFiles) {
    const fileWithExtension = path.basename(changedFile);
    const filename = path.basename(changedFile, '.scss');
    const extension = path.extname(changedFile);

    if (extension === '.ts') {
      if (!tsLogged) {
        console.log('TypeScript file changes detected');
        tsLogged = true;
      }
      if (changedFile.includes('locales')) {
        // rebuild changed locale and also merged locale into a single locale
        const match = changedFile.match(/locales[\\/](..-..).ts$/);
        if (match?.[1] && !['index', 'all-locales'].includes(match[1])) {
          const locale = match[1];
          runBuild({
            entryPoints: [`src/locales/${locale}.ts`],
            format: 'esm',
            outfile: `dist/locales/${locale}.js`,
          });
        }
        runMergedLocaleBuild();
      } else {
        runBuild();
      }
      exec('pnpm run build:types', () => {});
    } else if (extension === '.scss') {
      if (!sassLogged) {
        console.log('SASS file changes detected');
        sassLogged = true;
      }
      if (filename.startsWith('_')) {
        // when _variables changes, let's rebuild all SASS files instead of just one
        try {
          execSync('pnpm run sass:build');
        } catch (e) {
          console.error(`SASS error: ${e}`);
        }
      } else {
        const basePath = path.join(process.cwd(), '/src/styles');
        const absoluteFilePath = path.relative(basePath, changedFile);
        const posixPath = absoluteFilePath.replaceAll('\\', '/');

        const outDir = 'dist/styles/css';
        if (!existsSync(outDir)) {
          mkdirSync(outDir, { recursive: true });
        }
        writeFileSync(
          `dist/styles/css/${posixPath.replace('.scss', '')}.css`,
          sassCompile(`src/styles/${posixPath}`, { style: 'compressed', quietDeps: true, noSourceMap: true }).css,
        );
      }

      copyfiles(`src/styles/**/${filename}.scss`, 'dist/styles/sass', { up: 2 }, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Copied "${fileWithExtension}" to "dist/styles/sass"`);
        }
      });
    }
  }
}
