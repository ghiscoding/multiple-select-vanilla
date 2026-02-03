import { Czech } from './cz-CS';
import { Danish } from './da-DK';
import { German } from './de-DE';
import { English } from './en-US';
import { Spanish } from './es-ES';
import { French } from './fr-FR';
import { Hungarian } from './hu-HU';
import { Indonesian } from './id-ID';
import { Italian } from './it-IT';
import { Japanese } from './ja-JP';
import { Korean } from './ko-KR';
import { Portuguese } from './pt-BR';
import { Russian } from './ru-RU';
import { Vietnamese } from './vi-VN';
import { Mandarin } from './zh-CN';
import { MandarinTraditional } from './zh-TW';

import type { MultipleSelectLocales } from '../models/locale.interface.js';

export const locales: MultipleSelectLocales = {
  'cz-CS': Czech,
  'da-DK': Danish,
  'de-DE': German,
  'en-US': English,
  'es-ES': Spanish,
  'fr-FR': French,
  'hu-HU': Hungarian,
  'id-ID': Indonesian,
  'it-IT': Italian,
  'ja-JP': Japanese,
  'ko-KR': Korean,
  'pt-BR': Portuguese,
  'ru-RU': Russian,
  'vi-VN': Vietnamese,
  'zh-CN': Mandarin,
  'zh-TW': MandarinTraditional,
};

export default locales;
