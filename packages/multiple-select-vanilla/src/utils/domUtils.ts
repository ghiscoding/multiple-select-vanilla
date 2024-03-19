import type { HtmlStruct, InferDOMType } from '../interfaces';
import { objectRemoveEmptyProps } from './utils';

export interface HtmlElementPosition {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

/** calculate available space for each side of the DOM element */
export function calculateAvailableSpace(element: HTMLElement): { top: number; bottom: number; left: number; right: number } {
  let bottom = 0;
  let top = 0;
  let left = 0;
  let right = 0;

  const windowHeight = window.innerHeight ?? 0;
  const windowWidth = window.innerWidth ?? 0;
  const scrollPosition = windowScrollPosition();
  const pageScrollTop = scrollPosition.top;
  const pageScrollLeft = scrollPosition.left;
  const elmOffset = getElementOffset(element);

  if (elmOffset) {
    const elementOffsetTop = elmOffset.top ?? 0;
    const elementOffsetLeft = elmOffset.left ?? 0;
    top = elementOffsetTop - pageScrollTop;
    bottom = windowHeight - (elementOffsetTop - pageScrollTop);
    left = elementOffsetLeft - pageScrollLeft;
    right = windowWidth - (elementOffsetLeft - pageScrollLeft);
  }

  return { top, bottom, left, right };
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
  if (appendToParent?.appendChild) {
    appendToParent.appendChild(elm);
  }
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
export function emptyElement<T extends Element = Element>(element?: T | null): T | undefined | null {
  while (element?.firstChild) {
    if (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
  return element;
}

/** Get HTML element offset with pure JS */
export function getElementOffset(element?: HTMLElement): HtmlElementPosition | undefined {
  if (!element) {
    return undefined;
  }
  const rect = element?.getBoundingClientRect?.();
  let top = 0;
  let left = 0;
  let bottom = 0;
  let right = 0;

  if (rect?.top !== undefined && rect.left !== undefined) {
    top = rect.top + window.pageYOffset;
    left = rect.left + window.pageXOffset;
    right = rect.right;
    bottom = rect.bottom;
  }
  return { top, left, bottom, right };
}

export function getElementSize(elm: HTMLElement, mode: 'inner' | 'outer' | 'scroll', type: 'height' | 'width') {
  // first try defined style width or offsetWidth (which include scroll & padding)
  let size = Number.parseFloat(elm.style[type]);
  if (!size || Number.isNaN(size)) {
    switch (mode) {
      case 'outer':
        size = elm[type === 'width' ? 'offsetWidth' : 'offsetHeight'];
        break;
      case 'scroll':
        size = elm[type === 'width' ? 'scrollWidth' : 'scrollHeight'];
        break;
      case 'inner':
      default:
        size = elm[type === 'width' ? 'clientWidth' : 'clientHeight'];
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
    const widthStr = window.getComputedStyle(elm)[type];
    size = Number.parseFloat(widthStr);
    if (Number.isNaN(size)) {
      size = 0;
    }

    // reapply original values
    elm.style.display = prevDisplay;
    elm.style.position = prevPosition;
  }

  return size || 0;
}

/**
 * Find a single parent by a simple selector, it only works with a simple selector
 * for example: "input.some-class", ".some-class", "input#some-id"
 * Note: it won't work with complex selector like "div.some-class input.my-class"
 * @param elm
 * @param selector
 * @returns
 */
export function findParent(elm: HTMLElement, selector: string) {
  let targetElm: HTMLElement | null = null;
  let parentElm = elm?.parentElement;

  while (parentElm) {
    // query selector id (#some-id) or class (.some-class other-class)
    const [_, nodeType, selectorType, classOrIdName] = selector.match(/^([a-z]*)([#.]{1})([a-z\-]+)$/i) || [];
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

export function insertAfter(referenceNode: HTMLElement, newNode: HTMLElement) {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
}

export function omitProp(obj: any, key: string) {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

/** Display or hide matched element */
export function toggleElement(elm?: HTMLElement | null, display?: boolean) {
  if (elm?.style) {
    elm.style.display = (elm.style.display === 'none' && display !== false) || display === true ? 'block' : 'none';
  }
}

export function toggleElementClass(elm?: HTMLElement | null, state?: boolean) {
  if (elm?.classList) {
    const adding = state === true || !elm.classList.contains('selected');
    const action = adding ? 'add' : 'remove';
    elm.classList[action]('selected');
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
