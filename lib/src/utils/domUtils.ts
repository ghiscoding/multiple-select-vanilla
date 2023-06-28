export type InferType<T> = T extends infer R ? R : any;

/* eslint-disable @typescript-eslint/indent */
export type InferDOMType<T> = T extends CSSStyleDeclaration ? Partial<CSSStyleDeclaration> : T extends infer R ? R : any;
/* eslint-enable @typescript-eslint/indent */

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
  appendToParent?: HTMLElement
): HTMLElementTagNameMap[T] {
  const elm = document.createElement<T>(tagName);

  if (elementOptions) {
    Object.keys(elementOptions).forEach((elmOptionKey) => {
      const elmValue = elementOptions[elmOptionKey as keyof typeof elementOptions];
      if (typeof elmValue === 'object') {
        Object.assign(elm[elmOptionKey as K] as object, elmValue);
      } else {
        elm[elmOptionKey as K] = (elementOptions as any)[elmOptionKey as keyof typeof elementOptions];
      }
    });
  }
  if (appendToParent && appendToParent.appendChild) {
    appendToParent.appendChild(elm);
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

/**
 * HTML encode using a plain <div>
 * Create a in-memory div, set it's inner text(which a div can encode)
 * then grab the encoded contents back out.  The div never exists on the page.
 * @param {String} inputValue - input value to be encoded
 * @return {String}
 */
export function htmlEncode(inputValue: string): string {
  const val = typeof inputValue === 'string' ? inputValue : String(inputValue);
  const entityMap: { [char: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return (val || '').toString().replace(/[&<>"']/g, (s) => entityMap[s as keyof { [char: string]: string }]);
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
