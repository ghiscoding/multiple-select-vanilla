/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

import Constants from '../constants';

const locales = {
  ['it-IT']: {
    formatSelectAll() {
      return '[Seleziona tutti]';
    },
    formatAllSelected() {
      return 'Tutti selezionati';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' di ' + total + ' selezionati';
    },
    formatNoMatchesFound() {
      return 'Nessun risultato';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
