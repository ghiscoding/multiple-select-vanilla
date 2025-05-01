/**
 * Multiple Select cz-CS translation
 * Author: Matej Puhony<info@puhony.eu>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Czech = {
  formatSelectAll() {
    return '[Vybrat vše]';
  },
  formatAllSelected() {
    return 'Vše vybráno';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} z ${total} vybráno`;
  },
  formatNoMatchesFound() {
    return 'Nebylo nalezeno';
  },
  formatOkButton() {
    return 'Zavřít';
  },
  formatLazyLoading() {
    return 'Načítám se...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['cz-CS'] = Czech;

export default ms.locales;
