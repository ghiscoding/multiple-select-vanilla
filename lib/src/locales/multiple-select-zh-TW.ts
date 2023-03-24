/**
 * Multiple Select zh-TW translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['zh-TW'] = {
  formatSelectAll() {
    return '[全選]';
  },
  formatAllSelected() {
    return '已選擇所有記錄';
  },
  formatCountSelected(count: number, total: number) {
    return `已從${  total  }條記錄中選擇${  count  }條`;
  },
  formatNoMatchesFound() {
    return '沒有找到記錄';
  },
  formatOkButton() {
    return '关闭';
  },
} as MultipleSelectLocale;

export default ms.locales;
