/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Hungarian = {
  formatSelectAll() {
    return '[Összes kiválasztása]';
  },
  formatAllSelected() {
    return 'Összes kiválasztva';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} / ${total} kiválasztva`;
  },
  formatNoMatchesFound() {
    return 'Nincs találat';
  },
  formatOkButton() {
    return 'Bezár';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['hu-HU'] = Hungarian;

export default ms.locales;
