# Contributing

We'd love for you to contribute and to make this project even better than it is today! If this interests you, go ahead and submit a Pull Request.

Before accepting any Pull Request, we need to make sure that you followed the step shown below.

**Note**: this project uses [pnpm workspaces](https://pnpm.io/workspaces), you can install pnpm by following their [installation](https://pnpm.io/installation) or via `corepack enable` to run any of the pnpm scripts shown below:

### Steps

1. clone the lib:
   - `git clone https://github.com/ghiscoding/multiple-select-vanilla`
2. install with **pnpm** from the root:
   - `pnpm install` OR `npx pnpm install`
3. run Biome Lint script (or simply execute step 5.)
  - `pnpm biome:lint:write`
4. run Biome Format script
  - `pnpm biome:format:write`
5. run a full TypeScript (TSC) build (this will also run Biome Lint & Format)
   - `pnpm build` OR `npx pnpm build`
6. add/run Vitest unit tests (make sure to run the previous steps first):
   - `pnpm test` (watch mode)
   - `pnpm test:coverage` (full test coverage)
7. after achieving step 3 to 6, then the final step would be to create the Pull Request...