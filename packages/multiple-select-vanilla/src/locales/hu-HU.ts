/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Hungarian: MultipleSelectLocale = {
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
  formatLazyLoading() {
    return 'Most betöltés...';
  },
  formatLazyFailed() {
    return 'Az adatok betöltése nem sikerült';
  },
};

export default Hungarian;
