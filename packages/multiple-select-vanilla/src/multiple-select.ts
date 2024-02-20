/**
 * Multiple-Select-Vanilla
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

import { MultipleSelectInstance } from './MultipleSelectInstance';
import Constants from './constants';
import type { MultipleSelectLocales } from './interfaces';
import type { MultipleSelectOption } from './interfaces/multipleSelectOption.interface';
import English from './locales/multiple-select-en-US';

/**
 * The multiplseSelect function is your entry to creating a MultipleSelect instance on any HTML Select Element.
 * You can provide a query selector as a string, a html node or an array of html nodes
 */
export const multipleSelect = (
  selector: ArrayLike<Node> | Node | string,
  config?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>,
): MultipleSelectInstance | MultipleSelectInstance[] => {
  if (typeof selector === 'string') {
    return _multipleSelect(document.querySelectorAll(selector), config);
  }
  if (selector instanceof Node) {
    return _multipleSelect([selector], config);
  }
  return _multipleSelect(selector, config);
};

function _multipleSelect(nodeList: ArrayLike<Node>, config?: Partial<MultipleSelectOption>): MultipleSelectInstance | MultipleSelectInstance[] {
  // static list
  const nodes = Array.from(nodeList) as HTMLElement[];
  const instances: MultipleSelectInstance[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i] as HTMLElement & { _multipleSelect?: MultipleSelectInstance };
    try {
      // destroy any previous element when found prior to recreating it
      if (node._multipleSelect !== undefined) {
        node._multipleSelect.destroy();
        delete node._multipleSelect;
      }

      node._multipleSelect = new MultipleSelectInstance(node as HTMLSelectElement, config || {});
      node._multipleSelect.init();

      // when a hard destroyed is called, we need to first delete the _multipleSelect instance before the DOM Element is removed
      // then after it's destroyed, we'll also have to nullify the instance
      const msOptions = node._multipleSelect.getOptions(false);
      msOptions.onHardDestroy = () => delete node._multipleSelect;
      msOptions.onAfterHardDestroyed = () => (instances[i] = null as any);

      instances.push(node._multipleSelect);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

multipleSelect.defaults = Constants.DEFAULTS;
multipleSelect.locales = { ...English } as MultipleSelectLocales; // load English as default locale
multipleSelect.methods = Constants.METHODS;

// add it to the window object so it can be used as standalone
if (typeof window !== 'undefined') {
  window.multipleSelect = multipleSelect;
}
