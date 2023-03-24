/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['hu-HU'] = {
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

export default ms.locales;
