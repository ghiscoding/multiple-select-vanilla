import type { MultipleSelectLocale } from './src/models/locale.interface.js';
import type { MultipleSelectInstance } from './src/MultipleSelectInstance.js';
import type { MultipleSelectOption } from './src/models/multipleSelectOption.interface.js';

declare global {
  interface Window {
    multipleSelect: {
      (
        selector: ArrayLike<Node> | Node | string,
        config?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>,
      ): MultipleSelectInstance | MultipleSelectInstance[];
      defaults: Partial<MultipleSelectInstance>;
      locales: Record<string, MultipleSelectLocale>;
      methods: string[];
    };
  }
}
