/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

import Constants from '../constants';

const locales = {
  ['fr-FR']: {
    formatSelectAll() {
      return '[Tout sélectionner]';
    },
    formatAllSelected() {
      return 'Tous sélectionnés';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' de ' + total + ' sélectionnés';
    },
    formatNoMatchesFound() {
      return 'Aucun résultat';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
