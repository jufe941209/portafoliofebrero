export type JourneyTrack = 'sport' | 'tech'

export interface JourneyMilestone {
  year: string
  title: string
  detail: string
  track: JourneyTrack
}

// La narrativa completa (con bullets) vive en experience.ts / education.ts.
// Esto es la línea de tiempo condensada que muestra las dos carreras en paralelo.
export const journey: JourneyMilestone[] = [
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
    detail: 'Tecnólogo en Análisis y Desarrollo de Software (SENA) y desarrollo frontend en Angular para No Country, en un equipo distribuido en tres husos horarios.',
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
]
