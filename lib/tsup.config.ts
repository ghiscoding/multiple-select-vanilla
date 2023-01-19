// import { copy } from 'esbuild-plugin-copy';
import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  /*
   * TSUP issue which seems to ignore plugins (esbuild-plugin-copy) watch changes,
   * remove lerna watch in root whenever that gets fixed
   * see https://github.com/egoist/tsup/issues/801
   */
  // esbuildPlugins: [
  //   copy({
  //     copyOnStart: true,
  //     assets: [{ from: ['./src/styles/**/*.scss'], to: ['./styles/sass'] }],
  //   }) as any,
  // ],
  dts: true, // generate dts files & run type checking
  entry: ['src/**/*.ts'], // include all files under src
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'], // generate CommonJS and ESM files
  bundle: env === 'production',
  minify: env === 'production',
  watch: env !== 'production',
  skipNodeModulesBundle: true,
  splitting: false,
  target: 'es2020',
  outDir: 'dist',
  // treeshake: true, // use Rollup for tree shaking instead
};
