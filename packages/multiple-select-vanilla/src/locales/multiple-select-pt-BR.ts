/**
 * Multiple Select pt-BR translation
 * Author: Lucas Aguiar<lucas99.abreu@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Portuguese = {
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
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['pt-BR'] = Portuguese;

export default ms.locales;
