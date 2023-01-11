/**
 * Multiple-Select-Vanilla
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

import Constants from './constants';
import { MultipleSelect } from './MultipleSelect';
import { MultipleSelectOption } from './interfaces/multipleSelectOption.interface';

export interface MultipleSelectInstance extends MultipleSelect {}

export const multipleSelect = function (selector: ArrayLike<Node> | Node | string, config?: Partial<MultipleSelectOption>) {
  const instances: MultipleSelectInstance[] = [];

  if (typeof selector === 'string') {
    document.querySelectorAll<HTMLSelectElement>(selector).forEach((el) => instances.push(new MultipleSelect(el, config)));
  } else if (selector instanceof Node) {
    instances.push(new MultipleSelect(selector as HTMLSelectElement, config));
  }

  instances.forEach((instance, index) => {
    instance.init();

    // when a hard destroyed is called, we'll also nullify the instance
    instance.getOptions(false).onHardDestroyed = () => (instances[index] = null as any);
  });

  return instances.length === 1 ? instances[0] : instances;
};

multipleSelect.defaults = Constants.DEFAULTS;
multipleSelect.locales = Constants.LOCALES;
multipleSelect.methods = Constants.METHODS;

// add it to the window object so it can be used as standalone
if (typeof window !== 'undefined') {
  (window as any).multipleSelect = multipleSelect;
}
