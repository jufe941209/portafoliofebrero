import { useLocale, type Locale } from '../hooks/useLocale'

export interface StatItem {
  value: number
  suffix: string
  label: string
}

const statsByLocale: Record<Locale, StatItem[]> = {
  es: [
    { value: 2500, suffix: '+', label: 'Usuarios en plataformas CUN' },
    { value: 300, suffix: '+', label: 'Atletas entrenados' },
    { value: 56, suffix: '+', label: 'Stored procedures (NewLife)' },
    { value: 8, suffix: '+', label: 'Años como entrenador deportivo' },
    { value: 2, suffix: '+', label: 'Años como desarrollador' },
    { value: 2592, suffix: '', label: 'Estudiantes en vivo — CUN 360' },
  ],
  en: [
    { value: 2500, suffix: '+', label: 'Users across CUN platforms' },
    { value: 300, suffix: '+', label: 'Athletes coached' },
    { value: 56, suffix: '+', label: 'Stored procedures (NewLife)' },
    { value: 8, suffix: '+', label: 'Years as a sports coach' },
    { value: 2, suffix: '+', label: 'Years as a developer' },
    { value: 2592, suffix: '', label: 'Live students — CUN 360' },
  ],
}

export function useStats(): StatItem[] {
  return statsByLocale[useLocale()]
}
