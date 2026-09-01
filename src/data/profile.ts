import { useLocale, type Locale } from '../hooks/useLocale'

interface ProfileContent {
  title: string
  typedRoles: string[]
  degree: string
  freelance: string
  summary: string
  differentiator: string
}

const base = {
  name: 'Henry Julian Fuentes Clavijo',
  phone: '+57 305 465 6044',
  email: 'henjulian11@outlook.com',
  location: 'Bogotá, Colombia',
  avatar: '/img/perfil.jpg',
  photo: '/img/yo.jpg',
  cvUrl: '/cv/Henry-Julian-Fuentes-Clavijo-CV.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/julianfuentesclavijo',
    github: 'https://github.com/jufe941209',
    portfolio: 'https://portafoliojulianfuentesclavijo.vercel.app',
    newlife: 'https://new-life-iota.vercel.app',
  },
}

const content: Record<Locale, ProfileContent> = {
  es: {
    title: 'Desarrollador Fullstack | Angular | React | TypeScript | .NET/C# | IA & Bases de Datos',
    typedRoles: [
      'Desarrollador Fullstack',
      'Desarrollador Angular',
      'Desarrollador React',
      'Desarrollador .NET / C#',
      'Analista de Datos',
      'Entrenador de Alto Rendimiento',
      'Atleta de Alto Rendimiento',
    ],
    degree: 'Profesional',
    freelance: 'Disponible',
    summary: `Desarrollador Fullstack con 2+ años de experiencia en desarrollo — 1+ año en producción en CUN construyendo plataformas Angular institucionales para más de 2.500 usuarios, y 1 año como Desarrollador Fullstack en proyectos freelance con React, Next.js y .NET/C#. Profesional en Cultura Física, Deporte y Recreación (Universidad Santo Tomás) con intercambio académico y tesis en la Universidad de Las Palmas de Gran Canaria, España.`,
    differentiator: `Diferenciador clave: transición deliberada del entrenamiento deportivo de élite al desarrollo de software — demostrando capacidad de aprendizaje excepcional, resiliencia bajo presión y mentalidad de producto centrada en el usuario. Disponible para trabajo remoto, async-first, con equipos internacionales.`,
  },
  en: {
    title: 'Fullstack Developer | Angular | React | TypeScript | .NET/C# | AI & Data',
    typedRoles: [
      'Fullstack Developer',
      'Angular Developer',
      'React Developer',
      '.NET / C# Developer',
      'Data Analyst',
      'High-Performance Coach',
      'High-Performance Athlete',
    ],
    degree: 'Bachelor’s Degree',
    freelance: 'Available',
    summary: `Fullstack Developer with 2+ years of development experience — 1+ year in production at CUN building institutional Angular platforms for 2,500+ users, plus 1 year as a freelance Fullstack Developer on projects with React, Next.js and .NET/C#. Bachelor's degree in Physical Culture, Sport and Recreation (Universidad Santo Tomás), including an academic exchange and thesis at Universidad de Las Palmas de Gran Canaria, Spain.`,
    differentiator: `Key differentiator: a deliberate transition from elite sports coaching to software development — demonstrating exceptional learnability, resilience under pressure and a user-centered product mindset. Available for remote, async-first work with international teams.`,
  },
}

export function useProfile() {
  const locale = useLocale()
  return { ...base, ...content[locale] }
}
