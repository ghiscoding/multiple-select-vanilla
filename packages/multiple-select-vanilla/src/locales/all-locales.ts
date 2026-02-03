import type { MultipleSelectLocales } from '../models/locale.interface.js';
import { Czech } from './cz-CS.js';
import { Danish } from './da-DK.js';
import { German } from './de-DE.js';
import { English } from './en-US.js';
import { Spanish } from './es-ES.js';
import { French } from './fr-FR.js';
import { Hungarian } from './hu-HU.js';
import { Indonesian } from './id-ID.js';
import { Italian } from './it-IT.js';
import { Japanese } from './ja-JP.js';
import { Korean } from './ko-KR.js';
import { Portuguese } from './pt-BR.js';
import { Russian } from './ru-RU.js';
import { Vietnamese } from './vi-VN.js';
import { Mandarin } from './zh-CN.js';
import { MandarinTraditional } from './zh-TW.js';

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
