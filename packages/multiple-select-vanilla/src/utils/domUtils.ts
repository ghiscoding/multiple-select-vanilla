import type { HtmlStruct, InferDOMType, OptGroupRowData, OptionRowData } from '../models/interfaces.js';
import { isDefined, objectRemoveEmptyProps } from './utils.js';

export interface HtmlElementPosition {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

/** Calculate available space for each side of the DOM element */
export function calculateAvailableSpace(elm: HTMLElement): { top: number; bottom: number; left: number; right: number } {
  const { innerHeight: windowHeight = 0, innerWidth: windowWidth = 0 } = window;
  const { top: pageScrollTop, left: pageScrollLeft } = windowScrollPosition();
  const { top = 0, left = 0 } = getOffset(elm) || {};

  return {
    top: top - pageScrollTop,
    bottom: windowHeight - (top - pageScrollTop),
    left: left - pageScrollLeft,
    right: windowWidth - (left - pageScrollLeft),
  };
}

/**
 * Accepts string containing the class or space-separated list of classes, and
 * returns list of individual classes.
 * Method properly takes into account extra whitespaces in the `className`
 * e.g.: " class1    class2   " => will result in `['class1', 'class2']`.
 * @param {String} className - space separated list of class names
 */
export function classNameToList(className = ''): string[] {
  return className.split(' ').filter(cls => cls); // filter will remove whitespace entries
}

/**
 * Create a DOM Element with any optional attributes or properties.
 * It will only accept valid DOM element properties that `createElement` would accept.
 * For example: `createDomElement('div', { className: 'my-css-class' })`,
 * for style or dataset you need to use nested object `{ style: { display: 'none' }}
 * The last argument is to optionally append the created element to a parent container element.
 * @param {String} tagName - html tag
 * @param {Object} options - element properties
 * @param {[HTMLElement]} appendToParent - parent element to append to
 */
export function createDomElement<T extends keyof HTMLElementTagNameMap, K extends keyof HTMLElementTagNameMap[T]>(
  tagName: T,
  elementOptions?: { [P in K]: InferDOMType<HTMLElementTagNameMap[T][P]> },
  appendToParent?: HTMLElement,
): HTMLElementTagNameMap[T] {
  const elm = document.createElement<T>(tagName);

  if (elementOptions) {
    Object.keys(elementOptions).forEach(elmOptionKey => {
      const elmValue = elementOptions[elmOptionKey as keyof typeof elementOptions];
      if (typeof elmValue === 'object') {
        Object.assign(elm[elmOptionKey as K] as object, elmValue);
      } else {
        elm[elmOptionKey as K] = (elementOptions as any)[elmOptionKey as keyof typeof elementOptions];
      }
    });
  }
  appendToParent?.appendChild(elm);
  return elm;
}

/**
 * From an HtmlBlock, create the DOM structure and append it to dedicated DOM element, for example:
 *   `{ tagName: 'li', props: { className: 'some-class' }, attrs: { 'aria-label': 'some label' }, children: [] }`
 * @param item
 * @param appendToElm
 */
export function createDomStructure(item: HtmlStruct, appendToElm?: HTMLElement, parentElm?: HTMLElement): HTMLElement {
  // to be CSP safe, we'll omit `innerHTML` and assign it manually afterward
  const itemPropsOmitHtml = item.props?.innerHTML ? omitProp(item.props, 'innerHTML') : item.props;

  const elm = createDomElement(item.tagName, objectRemoveEmptyProps(itemPropsOmitHtml, ['className', 'title', 'style']), appendToElm);
  let parent: HTMLElement | null | undefined = parentElm;
  if (!parent) {
    parent = elm;
  }

  if (item.props.innerHTML) {
    elm.innerHTML = item.props.innerHTML; // at this point, string type should already be as TrustedHTML
  }

  // add all custom DOM element attributes
  if (item.attrs) {
    for (const attrName of Object.keys(item.attrs)) {
      elm.setAttribute(attrName, item.attrs[attrName]);
    }
  }

  // use recursion when finding item children
  if (item.children) {
    for (const childItem of item.children) {
      createDomStructure(childItem, elm, parent);
    }
  }

  appendToElm?.appendChild(elm);
  return elm;
}

/**
 * Create html node with optgroups and options from data
 * @param data - array of options and/or optgroups
 * @param parent - parent element to append to
 * @return {object} element - updated element
 */
export function createDomStructureFromData(data: Array<OptGroupRowData | OptionRowData>, parent: HTMLElement): HTMLElement {
  data.forEach(row => {
    if (row.type === 'optgroup') {
      const optgroup = createDomElement('optgroup', { label: (row as OptGroupRowData).label }, parent);
      if ((row as OptGroupRowData).children) {
        createDomStructureFromData((row as OptGroupRowData).children, optgroup);
      }
    } else {
      const optionProps: any = {
        value: row.value,
        disabled: row.disabled || false,
        selected: row.selected || false,
      };
      if (row.classes) {
        optionProps.className = row.classes;
      }
      const option = createDomElement('option', optionProps, parent);
      option.textContent = (row as OptionRowData).text;
    }
  });
  return parent;
}

/** takes an html block object and converts to a real HTMLElement */
export function convertItemRowToHtml(item: HtmlStruct): HTMLElement {
  if (item.hasOwnProperty('tagName')) {
    return createDomStructure(item);
  }
  return document.createElement('li');
}

/**
 * Empty a DOM element by removing all of its DOM element children leaving with an empty element (basically an empty shell)
 * @return {object} element - updated element
 */
export function emptyElement<T extends Element = Element>(elm?: T | null): T | undefined | null {
  while (elm?.firstChild) {
    if (elm.lastChild) {
      elm.removeChild(elm.lastChild);
    }
  }
  return elm;
}

/** Get HTML element offset with pure JS */
export function getOffset(element?: HTMLElement): HtmlElementPosition | undefined {
  if (element) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    return {
      top: top + window.pageYOffset,
      left: left + window.pageXOffset,
      bottom,
      right,
    };
  }
  return undefined;
}

export function getSize(elm: HTMLElement | undefined, mode: 'inner' | 'outer' | 'scroll', type: 'height' | 'width') {
  if (!elm) {
    return 0;
  }

  // first try defined style width or offsetWidth (which include scroll & padding)
  let size = Number.parseFloat(elm.style[type]);
  if (!size || Number.isNaN(size)) {
    const pascalType = type === 'height' ? 'Height' : 'Width';
    switch (mode) {
      case 'outer':
        size = elm[`offset${pascalType}`];
        break;
      case 'scroll':
        size = elm[`scroll${pascalType}`];
        break;
      case 'inner':
      default:
        size = elm[`client${pascalType}`];
        break;
    }
    size = elm.getBoundingClientRect()[type];
  }

  if (!size || Number.isNaN(size)) {
    // when 0 width, we'll try different ways
    // when element is auto or 0, we'll keep previous style values to get width and then reapply original values
    const prevDisplay = elm.style.display;
    const prevPosition = elm.style.position;
    elm.style.display = 'block';
    elm.style.position = 'absolute';
    size = getComputedSize(elm, type);

    // reapply original values
    elm.style.display = prevDisplay;
    elm.style.position = prevPosition;
  }

  return size || 0;
}

/**
 * use `getComputedStyle()` and return size has a number or default to 0
 * @param elm - HTML element
 * @param styleType - CSS style type (e.g. 'width', 'paddingLeft', ...)
 * @returns - return size as a number or 0 when unparseable
 */
export function getComputedSize(elm: HTMLElement, styleType: string) {
  const elmStyle = window.getComputedStyle(elm)[styleType as any];
  let size = Number.parseFloat(elmStyle);
  if (Number.isNaN(size)) {
    size = 0;
  }
  return size;
}

/**
 * Find a single parent by a simple selector, it only works with a simple selector
 * for example: "input.some-class", ".some-class", "input#some-id"
 * Note: it won't work with complex selector like "div.some-class input.my-class"
 * @param elm - HTML element
 * @param selector - HTML selector
 * @returns
 */
export function findParent(elm: HTMLElement, selector: string) {
  let targetElm: HTMLElement | null = null;
  let parentElm = elm?.parentElement;

  while (parentElm) {
    // query selector id (#some-id) or class (.some-class other-class)
    const [_, nodeType, selectorType, classOrIdName] = selector.match(/^([a-z]*)([#.]{1})([a-z-]+)$/i) || [];
    if (selectorType && classOrIdName) {
      // class or id selector type
      for (const q of classOrIdName.replace(selectorType, '').split(' ')) {
        if (parentElm.classList.contains(q)) {
          if (nodeType) {
            if (parentElm?.tagName.toLowerCase() === nodeType) {
              targetElm = parentElm;
            }
          } else {
            targetElm = parentElm;
          }
        }
      }
    }
    parentElm = parentElm.parentElement;
  }

  return targetElm;
}

/**
 * Simple function to decode the most common HTML entities.
 * For example: "&lt;div&gt;Hablar espa&#241;ol? &#55358;&#56708;&lt;/div&gt;" => "<div>Hablar español? 🦄</div>"
 * @param {String} inputValue - input value to be decoded
 * @return {String}
 */
export function htmlDecode(input?: string | boolean | number): string {
  if (isDefined(input)) {
    // 1. decode html entities (e.g. `&#39;` => single quote)
    // 2. use textarea to decode the rest (e.g. html tags and symbols, `&lt;div&gt;` => `<div>`)
    const txt = document.createElement('textarea');
    txt.innerHTML = input.toString().replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
    return txt.value;
  }
  return '';
}

export function insertAfter(referenceNode: HTMLElement, newNode: HTMLElement) {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
}

export function omitProp(obj: any, key: string) {
  const { [key]: _omitted, ...rest } = obj;
  return rest;
}

/** Display or hide matched element */
export function toggleElement(elm?: HTMLElement | null, display?: boolean) {
  if (elm?.style) {
    elm.style.display = (elm.style.display === 'none' && display !== false) || display === true ? 'block' : 'none';
  }
}

/**
 * Get the Window Scroll top/left Position
 * @returns
 */
export function windowScrollPosition(): { left: number; top: number } {
  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || 0,
    top: window.pageYOffset || document.documentElement.scrollTop || 0,
  };
}
