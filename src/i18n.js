import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-http-backend'
import enTranslation from './assets/locales/en/translation.json'
import ptTranslation from './assets/locales/pt/translation.json'

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation }
}

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/portfolio/src/assets/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n