// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './JSON/en.json'
import translationJA from './JSON/ja.json'
const resources = {
  en: {
    translation: translationEN
},
  ja: {
    translation: translationJA
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
