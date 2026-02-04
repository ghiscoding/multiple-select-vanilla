# Multiple-Select-Vanilla

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/)
[![Actions Status](https://github.com/ghiscoding/multiple-select-vanilla/actions/workflows/main.yml/badge.svg)](https://github.com/ghiscoding/multiple-select-vanilla/actions)

[![NPM downloads](https://img.shields.io/npm/dy/multiple-select-vanilla)](https://npmjs.org/package/multiple-select-vanilla)
[![npm](https://img.shields.io/npm/v/multiple-select-vanilla.svg?logo=npm&logoColor=fff&label=npm)](https://www.npmjs.com/package/multiple-select-vanilla)
[![npm bundle size](https://img.shields.io/badge/gzip-13.1kB-1183c4)](https://bundlejs.com/?q=multiple-select-vanilla)

## Description
Multiple-Select-Vanilla is a fork of the popular [Multiple-Select (jQuery)](https://github.com/wenzhixin/multiple-select) library (thanks to @wenzhixin for this great project). This fork was based on its latest known version at the time, which was `v1.5.2`, but later updated to [`v1.7.0`](https://github.com/wenzhixin/multiple-select/releases/tag/1.7.0). The main difference from the original lib is that we dropped jQuery in favor of native browser code and this mean zero external dependency. As a bonus, a few extra features were also added to the library and you can see them listed below [Changes vs Original lib](#changes-vs-original-lib-multiple-select).

This lib allows you to select multiple elements with checkboxes :).

To get started take a look at the [Live demo](https://ghiscoding.github.io/multiple-select-vanilla/) for all available options and methods that the library offers.

## Demo
Take a look at the [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) to see all available options/methods (there's a lot).
You can also take a look at the "[Used by](#used-by)" section below to see and try live real world Open Source projects taking advantage of this library.

### Fully tested with [![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/)

The [Live demo](https://ghiscoding.github.io/multiple-select-vanilla/) website is also helpful to run a full suite of E2E tests by using [Playwright](https://playwright.dev/), all project examples have dedicated Playwright tests.

## Installation

```sh
npm install multiple-select-vanilla
```

## Basic Usage

#### 1. from a native `<select>`

```html
<select class="multiple-select full-width" data-test="select1">
  <option value="1">First</option>
  <option value="2">Second</option>
  <option value="3">Third</option>
  <option value="4">Fourth</option>
</select>
```

and then initialize ms-select

```ts
import { multipleSelect } from 'multiple-select-vanilla';

const ms = multipleSelect('.multiple-select');
```

#### 2. or from a `data` array of string/numbers or text/value pair (object array)

```ts
import { multipleSelect } from 'multiple-select-vanilla';

const ms = multipleSelect('.multiple-select', {
  data: ['First', 'Second'] // native string/number/boolean
};

const ms = multipleSelect('.multiple-select', {
  data: [
    // text/value pair
    { text: 'First', value: 1 },
    { text: 'Second', value: 2 },
    { text: 'Third', value: 3 },
    { text: 'Fourth', value: 4 },
  ]
});
```

## Changelog

[CHANGELOG](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/multiple-select-vanilla/CHANGELOG.md)

## LICENSE

[MIT License](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/LICENSE)


## Changes vs Original lib (`multiple-select`)
Changes and new options:
- dropped jQuery requirement and rewrote with browser native code.
- rewritten in TypeScript to also provide typings support (`d.ts`)
- make the lib CSP compliant (see [CSP Compliance](#csp-compliance) section below)
- add E2E tests, with Playwright, for all existing examples (over 80 of them)
- revamped the UI in v3.x to give it a more Modern Look:
  - improved CSS styling by using SVG icons (CSS/SASS variables are also availables)
  - new Dark Mode
  - replace tabIndex with a more intuitive navigation & highlight by using arrow keys (or mouse hover)
  - show 3 different states on multiple selections (none " ", partial "-" or all "🗸")
- add extra options:
  - `autoAdjustDropHeight` will automatically adjust the drop (up/down) height by available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options30))
  - `autoAdjustDropPosition` will find best position (top/bottom) by its available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options29))
  - `autoAdjustDropWidthByTextSize` automatically set the drop width size by reading the widest list option width
  - `dataTest` will add a `data-test` attribute on the `.ms-parent` and `.ms-drop` divs for easier E2E testing
  - `useSelectOptionLabel` will use the `<option label="">` which can be used to display shorter text of selected options.
    - example: display `"1,3"` as label instead of `"January,March"` (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options31))
  - `useSelectOptionLabelToHtml` similar to `useSelectOptionLabel` but also renders HTML.
  - `renderOptionLabelAsHtml` will render selected options as HTML code (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options27))
  - `sanitizer` can be used to sanitize HTML code and prevent XSS cross-site scripting attacks (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options32)).
  - `showOkButton` adds an "OK" button at the end of the multiple select option list (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options25))
  - `showSearchClear` show a clear filter button on the search filter input (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options34))
  - `diacriticParser` custom parser to normalize diacritic symbols when filtering select list (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options35))
  - `darkMode` to enable our new **Dark Mode** Theme (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options38))
  - `infiniteScroll` option (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options36))
  - `onFilterClear` callback that will be executed when the filter gets cleared (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/events))
  - `onClose(reason)` callback that will be executed when the dropdown closes (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/events))
  - `preFilter` provide a Filter predicate to pre-filter data (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options40))
  - `preSort` provide a Sort Comparer to pre-sort data (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options41))
  - `lazyData` provide a function with callback arguments to load data asynchronously (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options42))

## CSP Compliance
The library is now CSP (Content Security Policy) compliant, there are however some exceptions to be aware of. When using any HTML strings as template (when using `textTemplate`, `labelTemplate`, `renderOptionLabelAsHtml` or `useSelectOptionLabelToHtml`), you will not be fully compliant unless you return [`TrustedHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML). You can achieve this by using the `sanitizer` method in combo with an external library like [DOMPurify](https://github.com/cure53/DOMPurify) (recommended) to return `TrustedHTML` as shown below and with that in place you will be CSP compliant.

```typescript
import DOMPurify from 'dompurify';
import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

const ms1 = multipleSelect('#select1', {
   name: 'my-select',
   single: false,
   useSelectOptionLabelToHtml: true,
   sanitizer: (html) => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }), // return TrustedHTML Type
   data: [
      { text: '<i class="fa fa-star"></i> January', value: 1 },
      { text: '<i class="fa fa-star"></i> February', value: 2 },
   ]
});
```

with this code in place, we can now use the following CSP meta tag (which is what we use in the demo [index.html](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/packages/demo/index.html#L7))

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';style-src 'self' data:; img-src * 'self' data: https:; require-trusted-types-for 'script'; trusted-types dompurify">
```

> [!NOTE]
> in our demo we are only adding `unsafe-inline` simply because we are using Vite (which is not CSP compliant in Dev mode), but the library should work nonetheless without `unsafe-inline`.

## Major Changes

### version 3.0
- remove deprecated options
- new Modern Look by using SVG icons

### version 4.0
- build ESM-Only and drop CJS (CommonJS) build (aka `require()`)

### version 5.0

- **Locale management** has been refactored to remove usage of the global `window` object. Locales are now provided via a modular registry and injected through options. The `multiple-select-` prefix has been removed from all locale import paths (single and merged) and no longer exists on the `window` object.
- **Lazy loading API change:** The `lazyData` option now uses a callback signature: `lazyData(resolve, reject)` instead of returning a Promise. This allows for more flexible async data loading and error handling. See the demo and documentation for updated usage examples.

**Migration Example:**

```diff
// 1. load every locale individually, it could be imported in 2 ways (named import OR import on window object)
// named import
- import { Spanish } from 'multiple-select-vanilla/dist/locales/multiple-select-es-ES.js';
+ import { Spanish } from 'multiple-select-vanilla/dist/locales/es-ES.js';

// OR default import
- import 'multiple-select-vanilla/dist/locales/multiple-select-es-ES.js';
+ import Spanish from 'multiple-select-vanilla/dist/locales/es-ES.js';

// 2. or load all locales at once
- import 'multiple-select-vanilla/dist/locales/multiple-select-all-locales';
// named import
+ import { locales } from 'multiple-select-vanilla/dist/locales/all-locales.js';
// OR default import
+ import locales from 'multiple-select-vanilla/dist/locales/all-locales.js';

// 3. lazyData option (old vs new)
- lazyData: () => Promise<CollectionData>
+ lazyData: (resolve, reject) => void
```

See the [Example09](https://ghiscoding.github.io/multiple-select-vanilla/#/example09) for details on dynamic locale loading.

### Installation / Structure

The library is now ESM Only, the library does include optional locales that can be loaded through imports or you can use and define your own custom texts as well. Here's the full library structure of the project

```
dist/
  locales/
    all-locales.js    # all-in-1 locales
    ..
    es-ES.js          # Spanish locale
    fr-FR.js          # French locale
    ...
  styles/             # CSS and SASS Stylings
    css/
    sass/
  index.d.ts          # d.ts Type Definitions
  index.js            # ESM import
```

### Used by

This fork was created mostly to drop jQuery, and it is used by a few other Open Source projects of mine that I also maintain:
- [Angular-Slickgrid](https://ghiscoding.github.io/angular-slickgrid-demos)
- [Aurelia-Slickgrid](https://ghiscoding.github.io/aurelia-slickgrid-demos)
- [Slickgrid-React](https://ghiscoding.github.io/slickgrid-react-demos)
- [Slickgrid-Universal](https://ghiscoding.github.io/slickgrid-universal)

## Contributions

[![PR](https://img.shields.io/badge/PR-Welcome-1abc9c)](https://github.com/ghiscoding/multiple-select-vanilla/pulls)

[Pull Request](https://github.com/ghiscoding/multiple-select-vanilla/pulls) are welcome, feel free to contribute.

### Development / Contributions

If you wish to contribute to the project, please follow the steps shown below:

**Note**: this project uses [pnpm workspaces](https://pnpm.io/workspaces), you can install pnpm by following their [installation](https://pnpm.io/installation) or use NodeJS `corepack enable` to run any of these pnpm scripts.

1. clone the lib:
   - `git clone https://github.com/ghiscoding/multiple-select-vanilla`
2. install with **pnpm** from the root:
   - `pnpm install` OR `npx pnpm install`
3. run a full TypeScript build
   - `pnpm run build` OR `npx pnpm run build`
4. run in development mode (lib & demo)
   - `pnpm run dev` OR `npx pnpm run dev`

#### Pull Request Contribution

Before submitting a PR (pull request), please make sure that you followed the steps below for a better chance of a successfull PR:

1. make sure that you have already executed `pnpm install`
2. run the Biome lint npm script (or simply jump to step 4)
   - `pnpm run biome:lint:write`
3. run the Biome code formatting npm script (or simply jump to step 4)
   - `pnpm run biome:format:write`
4. run a full Build (this will also run Biome lint/format, so you could skip step 2)
   - `pnpm run build`

## Sponsors

<div>
  <span>
    <a href="https://github.com/wundergraph" class="Link" title="Wundergraph" target="_blank"><img src="https://avatars.githubusercontent.com/u/64281914" width="50" height="50" valign="middle" /></a>
  </span>
  &nbsp;
  <span>
    <a href="https://github.com/johnsoncodehk" class="Link" title="johnsoncodehk (Volar)" target="_blank"><img src="https://avatars.githubusercontent.com/u/16279759" width="50" height="50" valign="middle" /></a>
  </span>
   &nbsp;
  <span>
    <a href="https://github.com/kevinburkett" class="Link" title="kevinburkett" target="_blank"><img class="circle avatar-user" src="https://avatars.githubusercontent.com/u/48218815?s=52&amp;v=4" width="45" height="45" valign="middle" /></a>
  </span>
  &nbsp;
  <span>
    <a href="https://github.com/anton-gustafsson" class="Link" title="anton-gustafsson" target="_blank"><img src="https://avatars.githubusercontent.com/u/22906905?s=52&v=4" width="50" height="50" valign="middle" /></a>
  </span>
  &nbsp;
  <span>
    <a href="https://github.com/gibson552" class="Link" title="gibson552" target="_blank"><img src="https://avatars.githubusercontent.com/u/84058359?s=52&v=4" width="50" height="50" valign="middle" /></a>
  </span>
</div>
