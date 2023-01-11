/**
 * Multiple Select pt-BR translation
 * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['pt-BR']: {
    formatSelectAll() {
      return '[Selecionar todos]';
    },
    formatAllSelected() {
      return 'Todos selecionados';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' de ' + total + ' selecionado(s)';
    },
    formatNoMatchesFound() {
      return 'Nenhum resultado encontrado';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
