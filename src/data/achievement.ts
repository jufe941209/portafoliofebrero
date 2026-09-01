import { useLocale, type Locale } from '../hooks/useLocale'

export interface IcfesModuleScore {
  key: string
  label: string
  score: number
  percentileNational: number
  percentileNbc: number
}

export interface IcfesResult {
  examName: string
  year: string
  globalScore: number
  maxScore: number
  percentileNational: number
  percentileNbc: number
  nbcLabel: string
  headline: string
  body: string
  globalScoreLabel: string
  percentileNationalLabel: string
  percentileNbcLabel: string
  modules: IcfesModuleScore[]
}

const icfesByLocale: Record<Locale, IcfesResult> = {
  es: {
    examName: 'Saber TyT (ICFES)',
    year: '2026',
    globalScore: 141,
    maxScore: 200,
    percentileNational: 100,
    percentileNbc: 99,
    nbcLabel: 'Ingeniería de Sistemas, Telemática y Afines',
    headline: 'Uno de los mejores resultados de Colombia',
    body: 'En las pruebas Saber TyT (ICFES) 2026 obtuve un puntaje global de 141/200: superé al 100 % de los estudiantes del país y al 99 % de quienes presentan programas afines a Ingeniería de Sistemas y Telemática. Alcancé el nivel máximo de desempeño en Lectura Crítica, Comunicación Escrita, Razonamiento Cuantitativo y Competencias Ciudadanas, con Inglés B2.',
    globalScoreLabel: 'Puntaje global',
    percentileNationalLabel: 'Percentil nacional',
    percentileNbcLabel: 'Percentil en mi núcleo (NBC)',
    modules: [
      { key: 'reading', label: 'Lectura Crítica', score: 142, percentileNational: 99, percentileNbc: 97 },
      { key: 'writing', label: 'Comunicación Escrita', score: 138, percentileNational: 95, percentileNbc: 94 },
      { key: 'quant', label: 'Razonamiento Cuantitativo', score: 131, percentileNational: 98, percentileNbc: 94 },
      { key: 'citizenship', label: 'Competencias Ciudadanas', score: 139, percentileNational: 99, percentileNbc: 97 },
      { key: 'english', label: 'Inglés (B2)', score: 156, percentileNational: 99, percentileNbc: 97 },
    ],
  },
  en: {
    examName: 'Saber TyT (ICFES)',
    year: '2026',
    globalScore: 141,
    maxScore: 200,
    percentileNational: 100,
    percentileNbc: 99,
    nbcLabel: 'Systems & Telematics Engineering',
    headline: 'One of the top scores in Colombia',
    body: "On the 2026 Saber TyT (ICFES) national exam I scored 141/200 overall — outperforming 100% of test-takers nationwide and 99% of those in Systems & Telematics Engineering programs. I reached the top performance level in Critical Reading, Written Communication, Quantitative Reasoning and Citizenship Competencies, with an English B2 level.",
    globalScoreLabel: 'Overall score',
    percentileNationalLabel: 'National percentile',
    percentileNbcLabel: 'Percentile in my field (NBC)',
    modules: [
      { key: 'reading', label: 'Critical Reading', score: 142, percentileNational: 99, percentileNbc: 97 },
      { key: 'writing', label: 'Written Communication', score: 138, percentileNational: 95, percentileNbc: 94 },
      { key: 'quant', label: 'Quantitative Reasoning', score: 131, percentileNational: 98, percentileNbc: 94 },
      { key: 'citizenship', label: 'Citizenship Competencies', score: 139, percentileNational: 99, percentileNbc: 97 },
      { key: 'english', label: 'English (B2)', score: 156, percentileNational: 99, percentileNbc: 97 },
    ],
  },
}

export function useIcfesResult(): IcfesResult {
  return icfesByLocale[useLocale()]
}
