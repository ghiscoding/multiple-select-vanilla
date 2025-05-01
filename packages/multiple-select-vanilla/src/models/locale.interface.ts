/** Locale I18N key (string) that currently exists in the project */
export type LocaleKey =
  | 'cz-CS'
  | 'da-DK'
  | 'de-DE'
  | 'en-US'
  | 'es-ES'
  | 'fr-FR'
  | 'hu-HU'
  | 'id-ID'
  | 'it-IT'
  | 'ja-JP'
  | 'pt-BR'
  | 'ru-RU'
  | 'vi-VN'
  | 'zh-CN'
  | 'zh-TW';

export interface MultipleSelectLocale {
  /** Customize the formatted text "All Selected" when using custom locale. */
  formatAllSelected(): string;

  /** Customize the formatted text "x of y selected" when using custom locale. */
  formatCountSelected(selectedCount: number, totalCount: number): string;

  /** For the "No Matches Found" text when nothing is found while filtering the dropdown */
  formatNoMatchesFound(): string;

  /** Customize the formatted lazy "Loading..." text when lazy loading data is processing. */
  formatLazyLoading(): string;

  /** Customize the formatted text "OK" showing at the bottom of the drop. */
  formatOkButton(): string;

  /** For the "Select All" checkbox text */
  formatSelectAll(): string;
}

export type MultipleSelectLocales = Record<LocaleKey, MultipleSelectLocale>;
