import { exec } from 'child_process';
import { buildSync } from 'esbuild';
import copyfiles from 'copyfiles';
import fs from 'fs-extra';
import path from 'path';
import sass from 'sass';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const env = process.env.NODE_ENV;
const argv = yargs(hideBin(process.argv)).argv;

// Start the compilation process
runCompilation(argv.files.split(','));

function runBuild() {
  buildSync({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: env === 'production',
    format: 'esm',
    target: 'es2020',
    // outfile: env === 'production' ? './dist/multiple-select.min.js' : './dist/multiple-select.js',
    outfile: 'dist/esm/multiple-select.js',
  });
}

async function runCompilation(changedFiles) {
  for (const changedFile of changedFiles) {
    const extension = path.extname(changedFile);
    if (extension === '.ts') {
      console.log('TypeScript file change detected');
      runBuild();
      exec('npm run build:types', () => console.log('tsc incremental completed'));
    } else if (extension === '.scss') {
      console.log('SASS file changed');
      const basePath = path.join(process.cwd(), '/src/styles');
      const absoluteFilePath = path.relative(basePath, changedFile);
      const posixPath = absoluteFilePath.replaceAll('\\', '/');

      const fileWithExtension = path.basename(changedFile);
      const filename = path.basename(changedFile, '.scss');
      fs.outputFileSync(
        `dist/styles/css/${posixPath.replace('.scss', '')}.css`,
        sass.compile(`src/styles/${posixPath}`, { style: 'compressed', quietDeps: true, noSourceMap: true }).css
      );

      copyfiles([`src/styles/**/${filename}.scss`, 'dist/styles/sass'], { up: 2 }, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Copied "${fileWithExtension}" to "dist/styles/sass"`);
        }
      });
    }
  }
}