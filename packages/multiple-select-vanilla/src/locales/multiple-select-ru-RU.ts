/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Russian = {
  formatSelectAll() {
    return '[Выбрать все]';
  },
  formatAllSelected() {
    return 'Выбрано все';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} из ${total} выбрано`;
  },
  formatNoMatchesFound() {
    return 'Совпадений не найдено';
  },
  formatOkButton() {
    return 'Закрывать';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['ru-RU'] = Russian;

export default ms.locales;
