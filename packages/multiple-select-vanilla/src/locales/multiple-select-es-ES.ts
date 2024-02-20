/**
 * Multiple Select es-ES translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Spanish = {
  formatSelectAll() {
    return '[Seleccionar todo]';
  },
  formatAllSelected() {
    return 'Todos seleccionados';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} de ${total} seleccionado`;
  },
  formatNoMatchesFound() {
    return 'No se encontraron coincidencias';
  },
  formatOkButton() {
    return 'Cerrar';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['es-ES'] = Spanish;

export default ms.locales;
