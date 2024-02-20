/** Locale I18N key (string) that currently exists in the project */
export type LocaleKey =
  | 'cz-CS'
  | 'da-DK'
  | 'en-US'
  | 'es-ES'
  | 'fr-FR'
  | 'hu-HU'
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

  /** Customize the formatted text "OK" showing at the bottom of the drop. */
  formatOkButton(): string;

  /** For the "Select All" checkbox text */
  formatSelectAll(): string;
}

export type MultipleSelectLocales = Record<LocaleKey, MultipleSelectLocale>;
