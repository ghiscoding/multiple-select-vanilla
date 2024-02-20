/**
 * Multiple Select zh-TW translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const MandarinTraditional = {
  formatSelectAll() {
    return '[全選]';
  },
  formatAllSelected() {
    return '已選擇所有記錄';
  },
  formatCountSelected(count: number, total: number) {
    return `已從${total}條記錄中選擇${count}條`;
  },
  formatNoMatchesFound() {
    return '沒有找到記錄';
  },
  formatOkButton() {
    return '关闭';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['zh-TW'] = MandarinTraditional;

export default ms.locales;
