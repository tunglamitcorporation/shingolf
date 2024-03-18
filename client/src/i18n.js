// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './JSON/en.json'
import translationJA from './JSON/ja.json'
import translationVIE from './JSON/vie.json'
import translationKOR from './JSON/kor.json'
const resources = {
  en: {
    translation: translationEN
},
  ja: {
    translation: translationJA
},
  vie: {
    translation: translationVIE
  },
  kor: {
    translation: translationKOR
  }
}

i18n
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en', // Default language
    // keySeparator: '.', // Remove dots in key names
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
