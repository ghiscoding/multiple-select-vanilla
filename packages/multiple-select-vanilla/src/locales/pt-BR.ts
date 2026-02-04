/**
 * Multiple Select pt-BR translation
 * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Portuguese: MultipleSelectLocale = {
  formatSelectAll() {
    return '[Selecionar todos]';
  },
  formatAllSelected() {
    return 'Todos selecionados';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} de ${total} selecionado(s)`;
  },
  formatNoMatchesFound() {
    return 'Nenhum resultado encontrado';
  },
  formatOkButton() {
    return 'Fechar';
  },
  formatLazyLoading() {
    return 'Carregamento...';
  },
  formatLazyFailed() {
    return 'Falha ao carregar os dados';
  },
};

export default Portuguese;
