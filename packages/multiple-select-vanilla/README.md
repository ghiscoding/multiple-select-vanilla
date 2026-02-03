# Multiple-Select-Vanilla

## Live Demo
Available [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) to see all available options/methods (there's a lot).

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
});

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

## Major Changes

### version 3.0
- remove deprecated options
- new Modern Look by using SVG icons

### version 4.0
- build ESM-Only and drop CJS (CommonJS) build (aka `require()`)

### version 5.0

Locale management has been refactored to remove usage of the global `window` object. Locales are now provided via a modular registry and injected through options. This change affects how you load, switch, and reference locales. Also, the `multiple-select-` prefix has been removed from all locale import paths (single and merged) and no longer exists on the `window` object

**Migration Example:**

```diff
// 1. load every locale individually, it could be import in 2 ways (named import OR import on window object)
- // named import
- import { Spanish } from 'multiple-select-vanilla/dist/locales/multiple-select-es-ES.js';
- // OR default import
- import 'multiple-select-vanilla/dist/locales/multiple-select-es-ES.js';
+ // named import
+ import { Spanish } from 'multiple-select-vanilla/dist/locales/es-ES.js';
+ // OR default import
+ import Spanish from 'multiple-select-vanilla/dist/locales/es-ES.js';

// 2. or load all locales at once
- import 'multiple-select-vanilla/dist/locales/multiple-select-all-locales';
+ // named import
+ import { locales } from 'multiple-select-vanilla/dist/locales/all-locales.js';
+ // OR default import
+ import locales from 'multiple-select-vanilla/dist/locales/all-locales.js';
```

See the [Example09](https://ghiscoding.github.io/multiple-select-vanilla/#/example09) for details on dynamic locale loading.
