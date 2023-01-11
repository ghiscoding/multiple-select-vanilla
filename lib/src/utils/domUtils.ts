export type InferType<T> = T extends infer R ? R : any;

/* eslint-disable @typescript-eslint/indent */
export type InferDOMType<T> = T extends CSSStyleDeclaration ? Partial<CSSStyleDeclaration> : T extends infer R ? R : any;
/* eslint-enable @typescript-eslint/indent */

export interface HtmlElementPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

/** Create a DOM Element with any optional attributes or properties */
export function createDomElement<T extends keyof HTMLElementTagNameMap, K extends keyof HTMLElementTagNameMap[T]>(
  tagName: T,
  elementOptions?: { [P in K]: InferDOMType<HTMLElementTagNameMap[T][P]> }
): HTMLElementTagNameMap[T] {
  const elm = document.createElement<T>(tagName);

  if (elementOptions) {
    Object.keys(elementOptions).forEach((elmOptionKey) => {
      const elmValue = elementOptions[elmOptionKey as keyof typeof elementOptions];
      if (typeof elmValue === 'object') {
        Object.assign({}, elm[elmOptionKey as K], elmValue);
      } else {
        elm[elmOptionKey as K] = (elementOptions as any)[elmOptionKey as keyof typeof elementOptions];
      }
    });
  }
  return elm;
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
  let size = parseFloat(elm.style[type]);
  if (!size || isNaN(size)) {
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

  // when 0 width, we'll try different ways
  if (!size || isNaN(size)) {
    // when element is auto or 0, we'll keep previous style values to get width and then reapply original values
    const prevDisplay = elm.style.display;
    const prevPosition = elm.style.position;
    elm.style.display = 'block';
    elm.style.position = 'absolute';
    const widthStr = window.getComputedStyle(elm)[type];
    size = parseFloat(widthStr);
    if (isNaN(size)) {
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
  let parentElm = elm.parentElement;

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
