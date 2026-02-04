/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Russian: MultipleSelectLocale = {
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
  formatLazyLoading() {
    return 'погрузка...';
  },
  formatLazyFailed() {
    return 'Не удалось загрузить данные';
  },
};

export default Russian;
