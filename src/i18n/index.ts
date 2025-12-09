import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './translations/tr.json';
import en from './translations/en.json';
import de from './translations/de.json';
import bg from './translations/bg.json';

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  bg: {
    translation: bg,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // default language
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
