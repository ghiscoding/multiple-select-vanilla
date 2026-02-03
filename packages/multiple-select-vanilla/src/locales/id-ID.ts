/**
 * Multiple Select id-ID translation
 * Author: AdjadTea<adjadtea@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Indonesian: MultipleSelectLocale = {
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
  formatLazyLoading() {
    return 'Memuat...';
  },
};

export default Indonesian;
