/**
 * Multiple Select pt-BR translation
 * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['pt-BR'] = {
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
  formatOkButton() {
    return 'Fechar';
  },
} as MultipleSelectLocale;

export default ms.locales;
