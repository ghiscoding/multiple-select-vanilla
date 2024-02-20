/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const French = {
  formatSelectAll() {
    return '[Tout sélectionner]';
  },
  formatAllSelected() {
    return 'Tous sélectionnés';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} de ${total} sélectionnés`;
  },
  formatNoMatchesFound() {
    return 'Aucun résultat';
  },
  formatOkButton() {
    return 'Fermer';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['fr-FR'] = French;

export default ms.locales;
