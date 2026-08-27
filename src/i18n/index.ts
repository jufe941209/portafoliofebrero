import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { es } from './locales/es'
import { en } from './locales/en'
import type { Locale } from '../hooks/useLocale'

const STORAGE_KEY = 'portfolio-locale'

function detectInitialLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored

  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase()
  return browserLanguage === 'en' ? 'en' : 'es'
}

const initialLocale = detectInitialLocale()

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: initialLocale,
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  interpolation: { escapeValue: false },
  returnObjects: true,
})

document.documentElement.lang = initialLocale

i18n.on('languageChanged', (language) => {
  window.localStorage.setItem(STORAGE_KEY, language)
  document.documentElement.lang = language
})

export default i18n
