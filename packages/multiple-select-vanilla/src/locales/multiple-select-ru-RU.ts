/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import { MultipleSelectInstance } from '../MultipleSelectInstance';
import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['ru-RU'] = {
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

export default ms.locales;
