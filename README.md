# Multiple-Select-Vanilla

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![NPM downloads](https://img.shields.io/npm/dy/multiple-select-vanilla)](https://npmjs.org/package/multiple-select-vanilla)
[![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/)
[![npm](https://img.shields.io/npm/v/multiple-select-vanilla.svg?logo=npm&logoColor=fff&label=npm)](https://www.npmjs.com/package/multiple-select-vanilla)
[![Actions Status](https://github.com/ghiscoding/multiple-select-vanilla/actions/workflows/main.yml/badge.svg)](https://github.com/ghiscoding/multiple-select-vanilla/actions)

## Stable Release
We now have a fully working and official release including a [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) for displaying all available options/methods. You can also take a look at the "[Used by](#used-by)" section below to see real world applications taking advantage of this library.

## Description
Multiple-Select-Vanilla is a fork of the popular [Multiple-Select (jQuery)](https://github.com/wenzhixin/multiple-select) library (thanks to @wenzhixin for this great lib). This fork was based on its latest known version at the time, which was `v1.5.2`, but later updated to [`v1.7.0`](https://github.com/wenzhixin/multiple-select/releases/tag/1.7.0). The main difference from the original lib is that we dropped jQuery in favor of native browser code and this mean zero external dependency. As a bonus, a few extra features were also added to the library as you can see from the list shown below [Changes vs Original lib](#changes-vs-original-lib-multiple-select).

This lib allows you to select multiple elements with checkboxes :).

To get started take a look at the [Live demo](https://ghiscoding.github.io/multiple-select-vanilla/) for all available options and methods that the library offers.


### Fully tested with [![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/)

The [Live demo](https://ghiscoding.github.io/multiple-select-vanilla/) website is also used by [Playwright](https://playwright.dev/) for E2E testing of the library, all examples are covered with Playwright tests.

## Installation

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/ghiscoding/multiple-select-vanilla)

```sh
npm install multiple-select-vanilla
```

## Changelog

[CHANGELOG](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/multiple-select-vanilla/CHANGELOG.md)

## LICENSE

[MIT License](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/LICENSE)


## Changes vs Original lib (`multiple-select`)
New Multiple-Select Options:
- dropped jQuery requirement and replaced necessary code with browser native code.
- written in TypeScript which also brings typings support
- add extra features:
  - `autoAdjustDropHeight` will automatically adjust the drop (up/down) height by available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options30))
  - `autoAdjustDropPosition` will find best position (top/bottom) by its available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options29))
  - `autoAdjustDropWidthByTextSize` automatically set the drop width size from the widest list option width
  - `dataTest` will add a `data-test` attribute on the `.ms-parent` and `.ms-drop` divs for easier E2E testing
  - `useSelectOptionLabel` will use the `<option label="">` that can be used to display shorter text of selected options.
    - example: display "1,3" as label instead of "January,March" (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options31))
  - `useSelectOptionLabelToHtml` similar to `useSelectOptionLabel` but also renders HTML.
  - `renderOptionLabelAsHtml` will render selected options as HTML code (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options27))
  - `sanitizer` can be used to sanitize HTML code and prevent XSS cross-site scripting attacks (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options32)).
  - `showOkButton` to add an "OK" button at the end of the multiple select option list (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options25))
  - `showSearchClear` show a clear button on the search filter input (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options34))
  - `diacriticParser` custom parser to normalize diacritic signs when filtering select list (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options35))

## CSP Compliance
The library is now CSP (Content Security Policy) compliant since `v0.6.0`, however there are some exceptions to be aware of. When using any html string as template (with `textTemplate`, `labelTemplate`, `renderOptionLabelAsHtml` or `useSelectOptionLabelToHtml`), you will not be fully compliant unless you return `TrustedHTML`. You can achieve this by using the `sanitizer` method in combo with [DOMPurify](https://github.com/cure53/DOMPurify) to return `TrustedHTML` as shown below and with that in place you will again be CSP compliant.

```typescript
import DOMPurify from 'dompurify';
import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

const ms1 = multipleSelect('#select1', {
   name: 'my-select',
   single: false,
   useSelectOptionLabelToHtml: true,
   sanitizer: (html) => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
   data: [
      {
         text: '<i class="fa fa-star"></i> January',
         value: 1,
      },
   ]
});
```
with this code in place, we can use the following CSP meta tag (which is what we use in the lib demo, ref: [index.html](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/index.html#L7))
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';style-src 'self' data:; img-src * 'self' data: https:; require-trusted-types-for 'script'; trusted-types dompurify">
```
**Note** in our demo we are actually adding `unsafe-inline` simply because we are using Vite (which is not CSP compliant in Dev mode), but the library should work nonetheless without `unsafe-inline`.

### Installation / Structure
There are multiple ways to use the library, you can see below the folder structure of the distribution files
1. `dist/browser`: Standalone build which assigns `multipleSelect` on the `window.multipleSelect` object
   - browser standalone means that you can simply load it with `<script></script>` and then `multipleSelect('#mySelect')`
   - 2 builds are available CJS (`.cjs`) and ESM (`.js`) and for ESM you will need to load it with `<script type="module">`
2. `cjs`: to use as CommonJS with `require('multiple-select-vanilla')`
3. `esm`: to use as ESM with `import from 'multiple-select-vanilla'`

```
dist/
  browser/
    multiple-select.js              # ESM build, use with: window.multipleSelect
    multiple-select.cjs             # CJS (CommonJS) build, use with: window.multipleSelect
  locales/
    multiple-select-all-locales.cjs # all-in-1 locales as CJS
    multiple-select-all-locales.js  # all-in-1 locales as ESM
    ..
    multiple-select-fr-FR.cjs       # French locale as CJS
    multiple-select-fr-FR.js        # French locale as ESM
    ...
  styles/                           # CSS and SASS Stylings
    css/
    sass/
  index.d.ts                        # d.ts Type Definitions
  multiple-select.cjs               # CJS (CommonJS), use with: require()
  multiple-select.js                # ESM, use with: import from
```

### Used by
This fork was created mostly to drop jQuery, and is used by a few other Open Source libraries that I also maintain:
- [Angular-Slickgrid](https://github.com/ghiscoding/Angular-Slickgrid)
- [Aurelia-Slickgrid](https://github.com/ghiscoding/aurelia-slickgrid)
- [Slickgrid-React](https://github.com/ghiscoding/slickgrid-react)
- [Slickgrid-Universal](https://github.com/ghiscoding/slickgrid-universal)

## Contributions

[![PR](https://img.shields.io/badge/PR-Welcome-1abc9c)](https://github.com/ghiscoding/multiple-select-vanilla/pulls)

[Pull Request](https://github.com/ghiscoding/multiple-select-vanilla/pulls) are welcome, feel free to contribute.

### Development / Contributions

If you wish to contribute to the project, please follow these steps:

**Note**: this project uses [pnpm workspaces](https://pnpm.io/workspaces), you can install pnpm by following their [installation](https://pnpm.io/installation) or use NodeJS `corepack enable` to run any of the pnpm scripts shown below:

1. clone the lib:
   - `git clone https://github.com/ghiscoding/multiple-select-vanilla`
2. install with **pnpm** from the root:
   - `pnpm install` OR `npx pnpm install`
3. run a full TypeScript build
   - `pnpm run build` OR `npx pnpm run build`
4. run in development mode (lib & demo)
   - `pnpm run dev` OR `npx pnpm run dev`

#### Pull Request Contribution

Before submitting a PR (pull request), please make sure that you followed these steps for a better chance of a successfull PR:

1. make sure that you have already executed `pnpm install`
2. run the Biome lint npm script (or simply use step 4)
   - `pnpm run biome:lint:write`
3. run the Biome code formatting npm script (or simply use step 4)
   - `pnpm run biome:format:write`
4. run a full Build (this will also run Biome lint/format, so you could skip step 2)
   - `pnpm run build`

## Sponsors

<div>
  <img class="circle avatar-user" src="https://avatars.githubusercontent.com/u/48218815?s=52&amp;v=4" width="40" height="40" alt="@kevinburkett" />
  <a href="/kevinburkett" class="Link">
    <span class="wb-break-word ml-2">kevinburkett</span>
  </a>
</div>
