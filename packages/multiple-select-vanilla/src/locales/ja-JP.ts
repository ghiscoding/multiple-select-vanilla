/**
 * Multiple Select ja-JP translation
 * Author: Nozomi Anzai<nozomi.anzai@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Japanese: MultipleSelectLocale = {
  formatSelectAll() {
    return '[すべて選択]';
  },
  formatAllSelected() {
    return 'すべて選択';
  },
  formatCountSelected(count: number, total: number) {
    return `${total} 件中 ${count} 件選択`;
  },
  formatNoMatchesFound() {
    return '見つかりません';
  },
  formatOkButton() {
    return '閉める';
  },
  formatLazyLoading() {
    return '積載...';
  },
  formatLazyFailed() {
    return 'データの読み込みに失敗しました';
  },
};

export default Japanese;
