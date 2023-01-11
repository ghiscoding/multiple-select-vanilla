/**
 * Multiple Select ru-RU translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['ru-RU']: {
    formatSelectAll() {
      return '[Выбрать все]';
    },
    formatAllSelected() {
      return 'Выбрано все';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' из ' + total + ' выбрано';
    },
    formatNoMatchesFound() {
      return 'Совпадений не найдено';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
