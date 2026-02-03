/**
 * Multiple Select da-DK translation
 * Author: HThuren<thuren.henrik@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Danish: MultipleSelectLocale = {
  formatSelectAll() {
    return '[Vælg alle]';
  },
  formatAllSelected() {
    return 'Alle valgt';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} af ${total} valgt`;
  },
  formatNoMatchesFound() {
    return 'Søgning uden resultat';
  },
  formatOkButton() {
    return 'Lukke';
  },
  formatLazyLoading() {
    return 'Indlæser nu...';
  },
  formatLazyFailed() {
    return 'Kunne ikke indlæse data';
  },
};

export default Danish;
