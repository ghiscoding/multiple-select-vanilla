/**
 * Multiple Select ja-JP translation
 * Author: Nozomi Anzai<nozomi.anzai@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Japanese = {
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
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['ja-JP'] = Japanese;

export default ms.locales;
