/**
 * Multiple Select zh-TW translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const ChineseTraditional: MultipleSelectLocale = {
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
    return '關閉';
  },
  formatLazyLoading() {
    return '加載...';
  },
  formatLazyFailed() {
    return '資料載入失敗';
  },
};

export default ChineseTraditional;
