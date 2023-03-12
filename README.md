# Multiple-Select-Vanilla

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/multiple-select-vanilla.svg?logo=npm&logoColor=fff&label=npm)](https://www.npmjs.com/package/multiple-select-vanilla)
[![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/)
[![Actions Status](https://github.com/ghiscoding/multiple-select-vanilla/workflows/CI%20Build/badge.svg)](https://github.com/ghiscoding/multiple-select-vanilla/actions)

## Official Release now available 📣
We now have a fully working and official release including a [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) for all available options/methods. The intention is to eventually use this demo to add Cypress E2E tests.

## Description
Multiple-Select-Vanilla is a fork of the popular [Multiple-Select (jQuery)](https://github.com/wenzhixin/multiple-select) original library, it is based on its latest version `1.5.2` from the original lib. The main difference is that we dropped jQuery and rewrote all necessary code to be a plain vanilla/pure JavaScript library without any external dependencies (zero dependency). We also added a few extra features which you can see below ([Changes vs Original lib](#changes-vs-original-lib))

This lib allows you to select multiple elements with checkboxes :).

To get started checkout examples and documentation at https://ghiscoding.github.io/multiple-select-vanilla

## Installation

```sh
npm install multiple-select-vanilla
```

## Changelog

[CHANGELOG](https://github.com/ghiscoding/multiple-select-vanilla/blob/main/lib/CHANGELOG.md)

## LICENSE

[The MIT License](https://github.com/ghiscoding/multiple-select-vanilla/blob/master/LICENSE)


## Changes vs Original lib
New Multiple-Select Options:
- dropped jQuery requirement and replaced necessary code with pure vanilla JS code.
- written in TypeScript which brings typings support
- added new features:
  - `showOkButton` to add an "OK" button at the end of multiple select option list (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options25))
  - `autoAdjustDropHeight` will automatically adjust the drop (up or down) height with available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options30))
  - `autoAdjustDropPosition` will automatically choose best position (top/bottom) with available space (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options29))
  - `autoAdjustDropWidthByTextSize` automatically set the drop width size from the widest list option width
  - `useSelectOptionLabel` will use the `<option label="">` (from select option value) that can be used to display shorter selected option values.
    - example: value "1,3" instead of "January,March" (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options31))
  - `useSelectOptionLabelToHtml` similar to `useSelectOptionLabel` but also renders HTML.
  - `sanitizer` can be used to sanitize HTML code and prevent XSS cross-site scripting attacks (see [demo](https://ghiscoding.github.io/multiple-select-vanilla/#/options32)).

## Contributions

[![PR](https://img.shields.io/badge/PR-Welcome-1abc9c)](https://github.com/ghiscoding/multiple-select-vanilla/pulls)

Feel free to contribute any [Pull Request](https://github.com/ghiscoding/multiple-select-vanilla/pulls).

### Development / Contributions

If you wish to contribute to the project, please follow these steps:

**Note**: this project uses [pnpm workspaces](https://pnpm.io/workspaces), you can install pnpm by following their [installation](https://pnpm.io/installation) or simply run `npx pnpm` to run any of the pnpm scripts shown below:

1. clone the lib:
   - `git clone https://github.com/ghiscoding/multiple-select-vanilla`
2. install with **pnpm** from the root:
   - `pnpm install` OR `npx pnpm install`
3. run a full TypeScript build
   - `pnpm run build` OR `npx pnpm run build`
4. run in development mode (lib & demo)
   - `pnpm run dev` OR `npx pnpm run dev`

#### Pull Request Contribution

Before submitting a before request, make sure that you follow these steps
1. have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VSCode extension installed (no config required)
2. run the Prettier code formatting (or use step 3)
   - `pnpm run prettier:write`
3. run a full Build (this will also run Prettier format)
   - `pnpm run build`
