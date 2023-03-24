/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['fr-FR'] = {
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

export default ms.locales;
