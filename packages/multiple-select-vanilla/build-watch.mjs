import { exec, execSync } from 'child_process';
import path from 'path';
import copyfiles from 'copyfiles';
import { buildSync } from 'esbuild';
import fs from 'fs-extra';
import { compile as sassCompile } from 'sass';

const env = process.env.NODE_ENV;

// Start the compilation process
runCompilation(process.env.LERNA_FILE_CHANGES.split(','));

function runBuild(options) {
  const startTime = new Date().getTime();
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
      // outfile: env === 'production' ? './dist/multiple-select.min.js' : './dist/multiple-select.js',
      outfile: 'dist/multiple-select.js',
    },
    ...options,
  };
  buildSync(buildOptions);
  const endTime = new Date().getTime();
  console.info(`⚡️ Built in ${endTime - startTime}ms`);
}

function runMergedLocaleBuild() {
  // merge all Locales into a single file "multiple-select-all-locales.js"
  runBuild({
    entryPoints: ['./src/locales/all-locales-index.ts'],
    format: 'esm',
    outfile: 'dist/locales/multiple-select-all-locales.js',
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
        const [_, locale] = changedFile.match(/locales[\\\/]multiple-select-(.*)\.ts$/) || [];
        if (locale?.length === 5) {
          runBuild({
            entryPoints: [`src/locales/multiple-select-${locale}.ts`],
            format: 'esm',
            outfile: `dist/locales/multiple-select-${locale}.js`,
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
        execSync('pnpm run sass:build');
      } else {
        const basePath = path.join(process.cwd(), '/src/styles');
        const absoluteFilePath = path.relative(basePath, changedFile);
        const posixPath = absoluteFilePath.replaceAll('\\', '/');

        fs.outputFileSync(
          `dist/styles/css/${posixPath.replace('.scss', '')}.css`,
          sassCompile(`src/styles/${posixPath}`, { style: 'compressed', quietDeps: true, noSourceMap: true }).css,
        );
      }

      copyfiles([`src/styles/**/${filename}.scss`, 'dist/styles/sass'], { up: 2 }, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Copied "${fileWithExtension}" to "dist/styles/sass"`);
        }
      });
    }
  }
}
