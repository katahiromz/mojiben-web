// translation.js --- Translation
// Author: katahiromz
// License: Apache-2.0

import type { AndroidAppFunction } from './android.d';
declare const android: AndroidAppFunction;

// {{LANGUAGE_SPECIFIC}}
// TODO: Add the language(s) ​​you need and remove the ones you don't need.
export const trans_standardize_language = (language: string) => {
  switch (language){
  case 'ja': case 'ja-JP': case 'ja-jp':
    return 'ja-JP'; // Japanese
  case 'zh': case 'zh-CN': case 'zh-SG': case 'zh-cn': case 'zh-sg':
    return 'zh-CN'; // Chinese (Simplified)
  case 'zh-TW': case 'zh-HK': case 'zh-MO': case 'zh-tw': case 'zh-hk': case 'zh-mo':
    return 'zh-TW'; // Chinese (Traditional)
  case 'ko': case 'kr': case 'ko-KR': case 'ko-kr':
    return 'ko-KR'; // Korean
  case 'de': case 'de-DE': case 'de-de':
    return 'de-DE'; // German
  case 'es': case 'es-ES': case 'es-es':
    return 'es-ES'; // Spanish
  case 'it': case 'it-IT': case 'it-it':
    return 'it-IT'; // Italian
  case 'ru': case 'ru-RU': case 'ru-ru': case 'os-RU': case 'os-ru': case 'ru-KZ':
  case 'ru-kz': case 'ru-UA': case 'ru-ua': case 'ru-BY': case 'ru-by': case 'ru-KG':
  case 'ru-kg': case 'ru-MD': case 'ru-md':
    return 'ru-RU'; // Russian
  default:
    return 'en-US'; // English
  }
};

interface trans_data_type {
    [key: string]: {
        [key: string]: string
    }
};

// {{LANGUAGE_SPECIFIC}}
// TODO: Add translations for the languages ​​you need and remove any language entries you don't need.
const trans_trans: trans_data_type = {
  'en-US': { // English
    'TEXT_LANG_NAME_IN_ENGLISH': 'English',
    'TEXT_LANGUAGE': 'English',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': 'Cancel',
    'TEXT_YES': 'Yes',
    'TEXT_NO': 'No',
    'TEXT_ABOUT_APP': 'About this app',
    'TEXT_SAMPLE_TEXT': 'Hello, GenericApp.',
    'TEXT_BUTTON': 'Button',
  },
  'ja-JP': { // Japanese
    'TEXT_LANG_NAME_IN_ENGLISH': 'Japanese',
    'TEXT_LANGUAGE': '日本語',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': 'キャンセル',
    'TEXT_YES': 'はい',
    'TEXT_NO': 'いいえ',
    'TEXT_ABOUT_APP': 'バージョン情報',
    'TEXT_SAMPLE_TEXT': 'こんにちは、GenericApp。',
    'TEXT_BUTTON': 'ボタン',
  },
  'zh-CN': { // Chinese (Simplified)
    'TEXT_LANG_NAME_IN_ENGLISH': 'Chinese (Simplified)',
    'TEXT_LANGUAGE': '简体中文',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': '確定',
    'TEXT_CANCEL': '取消',
    'TEXT_YES': '是',
    'TEXT_NO': '否',
    'TEXT_ABOUT_APP': '关于这个应用程序',
    'TEXT_SAMPLE_TEXT': '你好，GenericApp。',
    'TEXT_BUTTON': '按钮',
  },
  'zh-TW': { // Chinese (Traditional)
    'TEXT_LANG_NAME_IN_ENGLISH': 'Chinese (Traditional)',
    'TEXT_LANGUAGE': '繁體中文',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': '確定',
    'TEXT_CANCEL': '取消',
    'TEXT_YES': '是',
    'TEXT_NO': '否',
    'TEXT_ABOUT_APP': '版本信息',
    'TEXT_SAMPLE_TEXT': '你好，GenericApp。',
    'TEXT_BUTTON': '按鈕',
  },
  'ko-KR': { // Korean
    'TEXT_LANG_NAME_IN_ENGLISH': 'Korean',
    'TEXT_LANGUAGE': '한국어',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': '취소',
    'TEXT_YES': '예',
    'TEXT_NO': '아니오',
    'TEXT_ABOUT_APP': '버전 정보',
    'TEXT_SAMPLE_TEXT': '안녕하세요, GenericApp.',
    'TEXT_BUTTON': '버튼',
  },
  'it-IT': { // Italian
    'TEXT_LANG_NAME_IN_ENGLISH': 'Italian',
    'TEXT_LANGUAGE': 'Italiano',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': 'Annulla',
    'TEXT_YES': 'SÌ',
    'TEXT_NO': 'No',
    'TEXT_ABOUT_APP': 'Informazioni sull\'app',
    'TEXT_SAMPLE_TEXT': 'Ciao, GenericApp.',
    'TEXT_BUTTON': 'Pulsante',
  },
  'de-DE': { // German
    'TEXT_LANG_NAME_IN_ENGLISH': 'German',
    'TEXT_LANGUAGE': 'Deutsch',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': 'Abbrechen',
    'TEXT_YES': 'Ja',
    'TEXT_NO': 'Nein',
    'TEXT_ABOUT_APP': 'Über diese App',
    'TEXT_SAMPLE_TEXT': 'Hallo, GenericApp.',
    'TEXT_BUTTON': 'Taste',
  },
  'es-ES': { // Spanish
    'TEXT_LANG_NAME_IN_ENGLISH': 'Spanish',
    'TEXT_LANGUAGE': 'Español',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'OK',
    'TEXT_CANCEL': 'Cancelar',
    'TEXT_YES': 'Sí',
    'TEXT_NO': 'No',
    'TEXT_ABOUT_APP': 'Información de versión',
    'TEXT_SAMPLE_TEXT': 'Hola, GenericApp.',
    'TEXT_BUTTON': 'Botón',
  },
  'ru-RU': { // Russian
    'TEXT_LANG_NAME_IN_ENGLISH': 'Russian',
    'TEXT_LANGUAGE': 'Русский',
    'TEXT_APP_NAME': 'GenericApp',
    'TEXT_OK': 'Хорошо',
    'TEXT_CANCEL': 'Отмена',
    'TEXT_YES': 'Да',
    'TEXT_NO': 'Нет',
    'TEXT_ABOUT_APP': 'Информация о версии',
    'TEXT_SAMPLE_TEXT': 'Привет, GenericApp.',
    'TEXT_BUTTON': 'Кнопка',
  },
};

const LOCAL_STORAGE_LANGUAGE = 'GenericApp_language';

// NOTE: The current language type is stored in local storage.
function trans_remember_language(lang: string) {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lang);
}

function trans_recall_language() {
  let lang = localStorage.getItem(LOCAL_STORAGE_LANGUAGE);
  if(!lang) lang = trans_standardize_language(navigator.language);
  return trans_standardize_language(lang);
}

export function trans_get_text(str_id: string, lang: string | undefined = undefined) {
  if (!lang)
    lang = trans_recall_language();
  if(!lang || !trans_trans[lang])
    lang = 'en-US';
  let x = trans_trans[lang];
  if (!x || !x[str_id]) {
    console.warn(`Missing translation for lang: ${lang}, key: ${str_id}`);
  }
  if (x && x[str_id])
    return x[str_id];
  let y = trans_trans['en-US'];
  if (y && y[str_id])
    return y[str_id];
  return '(undefined)';
}

function dom_set_html_text(id: HTMLElement, text: string) {
  id.textContent = text;
}

function dom_set_select_option_text(id: HTMLSelectElement, value: number | string, text: string) {
  value = value.toString();
  let options = id.options as HTMLOptionsCollection;
  for(let i = 0; i < options.length; ++i){
    let option = options[i] as HTMLOptionElement;
    if(option && option.value == value){
      option.text = text;
      break;
    }
  }
}

function dom_get_select_option_text(id: HTMLSelectElement, value: string | number) {
  value = value.toString();
  let options = id.options as HTMLOptionsCollection;
  for(let i = 0; i < options.length; ++i){
    let option = options[i] as HTMLOptionElement;
    if(option.value == value){
      return option.text;
    }
  }
  return '';
}

function dom_set_image_src(id: HTMLImageElement, src: string) {
  id.src = src;
}

export let trans_current_language = 'en-US';

export function dom_localize(lang: string | null = null) {
  if (!lang)
    lang = trans_recall_language();
  trans_remember_language(lang);
  trans_current_language = lang;

  // Find all elements with data-i18n attribute
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n') as string;
    const text = trans_get_text(key);
    dom_set_html_text(el, text);
  });

  // TODO: localize DOM by using trans_get_text and dom_* functions

  // Populate my-language-select
  const langSelect = document.getElementById('my-language-select') as HTMLSelectElement;
  if (langSelect) {
    for (let i = 0; i < langSelect.options.length; ++i) {
      let option = langSelect.options[i] as HTMLOptionElement;
      if (!option) continue;
      const value = option.value;
      const optLang = trans_standardize_language(value);
      const label = trans_get_text('TEXT_LANGUAGE', optLang) + " | " + trans_get_text('TEXT_LANG_NAME_IN_ENGLISH', optLang);
      dom_set_select_option_text(langSelect, optLang, label);
    }
  }

  langSelect.value = trans_current_language;
  document.documentElement.lang = trans_current_language

  // Notify language to Android
  try {
    android.setLanguage(trans_current_language);
  } catch (err) { }
}

function trans_get_supported_languages() {
  return Object.keys(trans_trans).map(lang => ({
    code: lang as string,
    label: trans_get_text('TEXT_LANGUAGE', lang as string),
    english: trans_get_text('TEXT_LANG_NAME_IN_ENGLISH', lang as string)
  }));
}
