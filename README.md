# Multiple-Select-Vanilla

## Description
Multiple-Select-Vanilla is a fork of the popular [multiple-select](https://github.com/wenzhixin/multiple-select), based on version `1.5.2`, but rewritten in plain vanilla JavaScript without any dependencies. This lib allows you to select multiple elements with checkboxes :).

To get started checkout examples and documentation at http://wenzhixin.net.cn/p/multiple-select

## Installation

```shell
npm install multiple-select-vanilla
```

## Changes from original
New Multiple-Select Options:
 - `okButton` boolean flag which when set will add an "OK" button at the end of the list to make it convenient to the user to close the window
 - `okButtonText` was also added to change locale
 - made code changes to support re-styling of the radio/checkbox with Font-Awesome or any other font
 - width option was not working when using "container", added some code to support it
 - `offsetLeft` (defaults to 0) if we want the drop to be offset from the select element (by default it is aligned left to the element with 0 offset)
 - `autoAdjustDropHeight` (defaults to False) when set will automatically adjust the drop (up or down) height
 - "autoAdjustDropPosition" (defaults to False) when set will automatically calculate the area with the most available space and use best possible choice for the drop to show (up/down and left/right)
 - `autoDropWidth` (defaults to False) when set will automatically adjust the dropdown width with the same size as the select element width
 - `autoAdjustDropWidthByTextSize` (defaults to false) when set will automatically adjust the drop (up or down) width by the text size (it will use largest text width)
 - `adjustHeightPadding` (defaults to 10) when using "autoAdjustDropHeight" we might want to add a bottom (or top) padding instead of taking the entire available space
 - `maxWidth` (defaults to 500) when using "autoAdjustDropWidthByTextSize" we want to make sure not to go too wide, so we can use "maxWidth" to cover that
 - `minWidth` (defaults to undefined) when using "autoAdjustDropWidthByTextSize" and we want to make sure to have a minimum width
 - `domElmOkButtonHeight` defaults to 26 (as per CSS), that is the "OK" button element height in pixels inside the drop when using multiple-selection
 - `domElmSelectSidePadding` defaults to 26 (as per CSS), that is the select DOM element padding in pixels (that is not the drop but the select itself, how tall is it)
 - `domElmSelectAllHeight` defaults to 39 (as per CSS), that is the DOM element of the "Select All" text area
 - `useSelectOptionLabel` (defaults to False), when set to True it will use the <option label=""> that can be used to display selected options
 - `useSelectOptionLabelToHtml` (defaults to False), same as "useSelectOptionLabel" but will also render html


## Changelog

[CHANGELOG](https://github.com/ghiscoding/multiple-select-vanilla/blob/master/CHANGELOG.md)

## LICENSE

[The MIT License](https://github.com/ghiscoding/multiple-select-vanilla/blob/master/LICENSE)
