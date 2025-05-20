# Multiple-Select-Vanilla

## Live Demo
Available [**Live demo**](https://ghiscoding.github.io/multiple-select-vanilla/) for displaying all available options/methods. 

## Installation

```sh
npm install multiple-select-vanilla
```

## Basic Usage

#### 1. From a native `<select>`

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

##### 2. From data

```ts
import { multipleSelect } from 'multiple-select-vanilla';

const ms = multipleSelect('.multiple-select', {
  data: [
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
