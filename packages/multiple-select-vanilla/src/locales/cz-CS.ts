/**
 * Multiple Select cz-CS translation
 * Author: Matej Puhony<info@puhony.eu>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Czech: MultipleSelectLocale = {
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
};

export default Czech;
