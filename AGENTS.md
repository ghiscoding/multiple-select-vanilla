# AGENTS.md

## Project overview

`multiple-select-vanilla` is a pnpm workspace containing a browser-based TypeScript select component and its Vite demo application. The demo is also the fixture application for the Playwright end-to-end suite.

The repository uses ESM, TypeScript, SCSS, Biome, esbuild, Vite, and Playwright. Preserve browser behavior and the published package surface when changing the library.

## Requirements and setup

- Node: `^22.17.0 || >=24.0.0`; use Node 24 when matching CI.
- pnpm: `11.x` (`packageManager`)
- Install dependencies with `pnpm install`.
- Install the Playwright Chromium binary with `pnpm playwright:install` when needed.

## Repository layout

- `packages/multiple-select-vanilla/src`: library source of truth.
  - `index.ts`: public exports.
  - `multiple-select.ts`: public factory and instance ownership.
  - `MultipleSelectInstance.ts`: component state, rendering, selection, events, filtering, and layout.
  - `models`: public and internal TypeScript types.
  - `services`: event binding and virtual scrolling.
  - `utils`: DOM and data helpers.
  - `locales`: locale modules and aggregate locale export.
  - `styles`: base SCSS, variables, mixins, and themes.
- `packages/multiple-select-vanilla/test`: Node security tests.
- `packages/demo/src`: Vite demo pages and view models.
- `playwright/e2e`: browser tests, generally named after their matching demo route.
- `playwright/playwright.config.ts`: Chromium configuration; tests expect the demo at `http://localhost:4000/`.
- `dist` directories and `tsconfig.tsbuildinfo`: generated output. Do not hand-edit them.

## Development workflow

- Use `pnpm` for workspace and package commands.
- Treat `packages/multiple-select-vanilla/src` as the library source of truth.
- Keep refactors small and behavior-preserving. When the user requests incremental work, stop after each step so they can review and run tests.
- Preserve unrelated staged and unstaged changes. Check `git status --short` before and after editing.
- Do not change the public API, generated DOM structure, CSS class names, ARIA state, native event ordering, or callback behavior unless the task explicitly requires it.
- Do not edit generated `dist` files. Build scripts may regenerate them locally.
- Do not run publishing, versioning, or release scripts unless the user explicitly requests a release operation.
- Use a Conventional Commit-style PR title; `.github/workflows/lint-pr-title.yml` enforces semantic pull-request titles.

## Code conventions and implementation notes

- Use two-space indentation, single quotes, semicolons, and the repository's 140-character line width.
- Keep `.js` extensions in relative TypeScript imports; emitted ESM requires them.
- Prefer the existing DOM helpers and `BindingEventService` over introducing parallel abstractions.
- Keep public types and exports compatible. Changes to `src/index.ts`, exported interfaces, locale/style paths, or `package.json#exports` require package-surface validation.
- Options can originate from JavaScript data, element datasets, or native `<select>` markup. Preserve coercion and selection behavior across all three sources.
- Native `childNodes` includes whitespace text nodes. `initRow()` can return `null` for these nodes, so any traversal of parsed optgroup children must guard against non-option entries even though the current public type is narrower.
- Selection mutations commonly require recalculating aggregate state, synchronizing rendered controls, updating the original `<select>`, and firing the established events. Preserve that order.
- Virtual scrolling recreates list DOM and rebinds events. Exercise extra care around element references, focus, keyboard navigation, filtering, and selection updates.

## Common pnpm scripts

### Development and builds

- `pnpm dev`: initialize the library build, start the demo, and watch library sources. This is the preferred full development environment.
- `pnpm dev:demo` or `pnpm serve:demo`: run only the Vite demo on port 4000. Build the library first if `dist` is stale or missing.
- `pnpm build:lib`: generate the library JavaScript, declarations, CSS, and copied SCSS.
- `pnpm build:demo`: type-check and build the demo.
- `pnpm build`: clean all generated output, auto-apply Biome lint/format fixes, and build every package. This command mutates files and should not be used as a routine read-only check.
- `pnpm clean`: remove every package's `dist` directory and TypeScript build-info files. Run only when a clean rebuild is needed.

### Formatting and linting

- `pnpm biome:lint:check`: lint all packages without applying fixes.
- `pnpm biome:format:check`: check formatting for all packages without applying fixes.
- `pnpm biome:lint:write`: apply lint fixes across packages.
- `pnpm biome:format:write`: apply formatting across packages.

Prefer the `:check` variants during validation. Do not apply repository-wide fixes unless they are in scope.

### Tests and package validation

- `pnpm test:e2e`: run the full Playwright suite. The demo must already be available at port 4000.
- `pnpm test:e2e playwright/e2e/<spec>.spec.ts`: run a targeted Playwright spec through the existing root script.
- `pnpm test:e2e:ui`: open Playwright UI mode.
- `pnpm test:e2e:debug`: open Playwright UI/debug mode.
- `pnpm test:report`: show the generated Playwright report.
- `pnpm test:security`: build the library bundle and run the Node security tests.
- `pnpm are-types-wrong`: pack and validate the library's published exports and declaration layout.

### Release-only scripts

`pnpm preview:version` and `pnpm preview:publish` are dry-run previews. `pnpm new-version`, `pnpm new-publish`, and `pnpm roll-new-release` change release state and must not be run without explicit user authorization.

## CI-equivalent validation

`.github/workflows/main.yml` is the source of truth for the pull-request validation sequence. CI uses Node 24 and performs these steps in order:

1. `pnpm install`
2. `pnpm biome:lint:check`
3. `pnpm biome:format:check`
4. `pnpm build:lib`
5. `pnpm test:security`
6. `pnpm build:demo`
7. `pnpm exec playwright install chromium`
8. Start `pnpm serve:demo` in the background
9. `pnpm test:e2e`

Use this sequence before handoff when a change is broad, release-sensitive, or likely to affect CI. The Playwright workflow publishes JUnit XML from `playwright-report`, so do not change reporter paths without updating the workflow that uploads and publishes test results.

The release workflow uses `pnpm build` before versioning and publishing. Treat `.github/workflows/release.yml` and all release scripts as privileged release operations; do not invoke or modify release state without explicit user authorization.

## Validation by change scope

For a library TypeScript change, run at minimum:

```sh
pnpm biome:lint:check
pnpm biome:format:check
pnpm exec tsc --noEmit --incremental false -p packages/multiple-select-vanilla/tsconfig.json
```

After every behavioral change, run the most relevant Playwright specification. Start the development environment in another terminal if necessary:

```sh
pnpm dev
pnpm test:e2e playwright/e2e/<spec>.spec.ts
```

Additional expectations:

- Library public API or type changes: run `pnpm build:lib` and `pnpm are-types-wrong`.
- Sanitization, DOM construction, or prototype-safety changes: run `pnpm test:security`.
- Demo TypeScript or route changes: run `pnpm build:demo` and the matching Playwright spec.
- SCSS changes: run `pnpm build:lib` and relevant visual/behavioral Playwright specs.
- Multi-step or cross-cutting behavioral refactors: run the full `pnpm test:e2e` suite before completion.

Report which validations ran, their results, and any checks that could not run. Do not claim Playwright coverage from TypeScript, lint, or build checks alone.
