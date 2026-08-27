import { useTranslation } from 'react-i18next'

export type Locale = 'es' | 'en'

export function useLocale(): Locale {
  const { i18n } = useTranslation()
  return i18n.language.startsWith('en') ? 'en' : 'es'
}
