/**
 * Multiple Select id-ID translation
 * Author: AdjadTea<adjadtea@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Indonesian = {
  formatSelectAll() {
    return '[Pilih Semua]';
  },
  formatAllSelected() {
    return 'Semua Dipilih';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} dari ${total} dipilih`;
  },
  formatNoMatchesFound() {
    return 'Tidak ditemukan';
  },
  formatOkButton() {
    return 'Tutup';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['id-ID'] = Indonesian;

export default ms.locales;
