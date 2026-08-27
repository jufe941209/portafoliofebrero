import { useLocale, type Locale } from '../hooks/useLocale'

export type JourneyTrack = 'sport' | 'tech'

export interface JourneyMilestone {
  year: string
  title: string
  detail: string
  track: JourneyTrack
}

// La narrativa completa (con bullets) vive en experience.ts / education.ts.
// Esto es la línea de tiempo condensada que muestra las dos carreras en paralelo.
const journeyByLocale: Record<Locale, JourneyMilestone[]> = {
  es: [
    {
      year: '2013',
      title: 'Inicio de la formación en Cultura Física, Deporte y Recreación',
      detail: 'Universidad Santo Tomás, Bogotá.',
      track: 'sport',
    },
    {
      year: '2016',
      title: 'Intercambio académico en España',
      detail: 'Universidad de Las Palmas de Gran Canaria — tesis y prácticas en Arucas F.C. (3ª división).',
      track: 'sport',
    },
    {
      year: '2018',
      title: 'Entrenador deportivo profesional',
      detail: 'Más de 300 atletas de ciclismo, natación, triatlón y fútbol en CAFAM, Ride Now y Club Real Leones.',
      track: 'sport',
    },
    {
      year: '2019',
      title: 'Preparación de triatletas de alto rendimiento',
      detail: 'Ironman Cozumel (México) y Triatlón de Vichy (Francia).',
      track: 'sport',
    },
    {
      year: '2022',
      title: 'Inicio formal en el desarrollo de software',
      detail: 'Técnico en Programación y Desarrollo Web — UNAB, compaginado con la actividad de entrenamiento deportivo.',
      track: 'tech',
    },
    {
      year: '2024',
      title: 'Formación técnica y experiencia internacional remota',
      detail:
        'Tecnólogo en Análisis y Desarrollo de Software (SENA) y desarrollo frontend en Angular para No Country, en un equipo distribuido en tres husos horarios.',
      track: 'tech',
    },
    {
      year: '2025',
      title: 'Desarrollador Frontend en CUN',
      detail: 'Plataformas Angular para más de 2.500 usuarios activos; presentador principal de CUN 360 ante 2.592 estudiantes.',
      track: 'tech',
    },
    {
      year: '2025-2026',
      title: 'NewLife E-Commerce en producción',
      detail: 'Plataforma fullstack con React y .NET/C#, desarrollada de manera individual de principio a fin.',
      track: 'tech',
    },
  ],
  en: [
    {
      year: '2013',
      title: 'Began studies in Physical Culture, Sport and Recreation',
      detail: 'Universidad Santo Tomás, Bogotá.',
      track: 'sport',
    },
    {
      year: '2016',
      title: 'Academic exchange in Spain',
      detail: 'Universidad de Las Palmas de Gran Canaria — thesis and internship at Arucas F.C. (3rd division).',
      track: 'sport',
    },
    {
      year: '2018',
      title: 'Professional sports coach',
      detail: '300+ cycling, swimming, triathlon and football athletes coached at CAFAM, Ride Now and Club Real Leones.',
      track: 'sport',
    },
    {
      year: '2019',
      title: 'Coaching high-performance triathletes',
      detail: 'Ironman Cozumel (Mexico) and the Vichy Triathlon (France).',
      track: 'sport',
    },
    {
      year: '2022',
      title: 'Formal start in software development',
      detail: 'Technical Diploma in Web Programming and Development — UNAB, balanced alongside ongoing coaching work.',
      track: 'tech',
    },
    {
      year: '2024',
      title: 'Technical training and remote international experience',
      detail:
        'Associate Degree in Software Analysis and Development (SENA) and Angular frontend development for No Country, on a team spread across three time zones.',
      track: 'tech',
    },
    {
      year: '2025',
      title: 'Frontend Developer at CUN',
      detail: 'Angular platforms serving 2,500+ active users; lead presenter for CUN 360 in front of 2,592 students.',
      track: 'tech',
    },
    {
      year: '2025-2026',
      title: 'NewLife E-Commerce in production',
      detail: 'Fullstack platform built with React and .NET/C#, developed solo from start to finish.',
      track: 'tech',
    },
  ],
}

export function useJourney(): JourneyMilestone[] {
  return journeyByLocale[useLocale()]
}
