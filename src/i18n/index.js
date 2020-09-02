import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

import en from './locales/en.json';
import pl from './locales/pl.json';
import de from './locales/de.json';
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: { translation: en },
  pl: { translation: pl },
  de: { translation: de },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(LanguageDetector)
  .init({
    resources,
    lng: Cookies.get('lang') || 'en',
    fallbackLng: 'en',
    debug: true, //!

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
