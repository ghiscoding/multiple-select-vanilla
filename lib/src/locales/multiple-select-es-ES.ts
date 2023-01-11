/**
 * Multiple Select es-ES translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['es-ES']: {
    formatSelectAll() {
      return '[Seleccionar todo]';
    },
    formatAllSelected() {
      return 'Todos seleccionados';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' de ' + total + ' seleccionado';
    },
    formatNoMatchesFound() {
      return 'No se encontraron coincidencias';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
