import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translations/en'
import de from './translations/de';

const resources = {
    en: { translation: en },
    de: { translation: de },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "de",
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        },
    });

export default i18n;
