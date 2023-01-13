# Multiple-Select-Vanilla

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/multiple-select-vanilla.svg?logo=npm&logoColor=fff&label=npm)](https://www.npmjs.com/package/multiple-select-vanilla)
[![Actions Status](https://github.com/ghiscoding/multiple-select-vanilla/workflows/CI%20Build/badge.svg)](https://github.com/ghiscoding/multiple-select-vanilla/actions)
<!-- [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) -->

## Official Release now available 📣
We now have a full working and official release `0.1.0` and a [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) for all options/methods

## Description
Multiple-Select-Vanilla is a fork of the popular [Multiple-Select (jQuery)](https://github.com/wenzhixin/multiple-select) original lib, it is based on the latest version `1.5.2` from the original lib. The main difference is that we dropped jQuery and rewrote necessary code in plain vanilla/pure JavaScript without any dependencies (zero dependency). We will also add nice extra features pretty soon, for example auto-position (top/bottom & left/right) is planned.

This lib allows you to select multiple elements with checkboxes :).

To get started checkout examples and documentation at http://wenzhixin.net.cn/p/multiple-select

## Installation

```sh
npm install multiple-select-vanilla
```

## Changes vs Original lib
New Multiple-Select Options:
- dropped jQuery requirement and replaced necessary code with pure vanilla JS code.

## Changelog

[CHANGELOG](https://github.com/ghiscoding/multiple-select-vanilla/blob/master/CHANGELOG.md)

## LICENSE

[The MIT License](https://github.com/ghiscoding/multiple-select-vanilla/blob/master/LICENSE)

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
