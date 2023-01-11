/**
 * Multiple Select hu-HU translation
 * Author: Péter Báthory<bathory86p@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['hu-HU']: {
    formatSelectAll() {
      return '[Összes kiválasztása]';
    },
    formatAllSelected() {
      return 'Összes kiválasztva';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' / ' + total + ' kiválasztva';
    },
    formatNoMatchesFound() {
      return 'Nincs találat';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
