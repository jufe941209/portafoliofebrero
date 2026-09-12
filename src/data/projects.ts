import { useLocale, type Locale } from '../hooks/useLocale'

export interface FeaturedProject {
  title: string
  subtitle: string
  url: string
  stack: string[]
  bullets: string[]
  brand: string
  accentFrom: string
  accentTo: string
}

export interface MockPreview {
  brand: string
  accentFrom: string
  accentTo: string
}

export interface CompactProject {
  title: string
  description: string
  longDescription: string
  url: string
  stack?: string[]
  /** Screenshot real, cuando existe. */
  image?: string
  /** Maqueta de navegador cuando no hay screenshot disponible. */
  mock?: MockPreview
}

const featuredProjectByLocale: Record<Locale, FeaturedProject> = {
  es: {
    title: 'NewLife E-Commerce',
    subtitle: 'Proyecto Fullstack End-to-End (Solo Developer)',
    url: 'https://new-life-iota.vercel.app',
    stack: ['React', '.NET 10 / C#', 'SQL Server', 'Azure', 'GitHub Actions CI/CD'],
    bullets: [
      'API RESTful en .NET 10/C# con autenticación JWT, cifrado BCrypt, CORS, recuperación de contraseña por SMTP e integración de pasarela de pago Wompi.',
      'Base de datos SQL Server con 11 tablas y 56+ stored procedures; desplegado en Azure SQL y Azure App Service con CI/CD vía GitHub Actions.',
      'Arquitectura, backend, frontend, base de datos, seguridad y despliegue en la nube — desarrollado 100% solo, en producción y funcional.',
    ],
    brand: 'NEW LIFE',
    accentFrom: '#3ecf6f',
    accentTo: '#146c32',
  },
  en: {
    title: 'NewLife E-Commerce',
    subtitle: 'End-to-End Fullstack Project (Solo Developer)',
    url: 'https://new-life-iota.vercel.app',
    stack: ['React', '.NET 10 / C#', 'SQL Server', 'Azure', 'GitHub Actions CI/CD'],
    bullets: [
      'RESTful API in .NET 10/C# with JWT authentication, BCrypt hashing, CORS, SMTP-based password recovery and Wompi payment gateway integration.',
      'SQL Server database with 11 tables and 56+ stored procedures; deployed on Azure SQL and Azure App Service with CI/CD via GitHub Actions.',
      'Architecture, backend, frontend, database, security and cloud deployment — built 100% solo, live in production and fully functional.',
    ],
    brand: 'NEW LIFE',
    accentFrom: '#3ecf6f',
    accentTo: '#146c32',
  },
}

const compactProjectsByLocale: Record<Locale, CompactProject[]> = {
  es: [
    {
      title: 'Front-end Gastronomía',
      description: 'Frontend de e-commerce gastronómico desarrollado en React.',
      longDescription:
        'Interfaz de e-commerce para un negocio gastronómico: catálogo de productos, navegación por categorías y flujo de compra pensado para pedidos en línea.',
      url: 'https://front-end-gastronomia.vercel.app/',
      stack: ['React', 'JavaScript', 'CSS3'],
      image: '/img/portfolio/gastronomia.webp',
    },
    {
      title: 'Portafolio anterior',
      description: 'Versión previa de este portafolio personal.',
      longDescription:
        'Primera versión en producción de este portafolio: sitio estático con perfil profesional, habilidades, experiencia y formulario de contacto, antes de la migración a React + MUI.',
      url: 'https://portafoliofebrero.vercel.app/',
      stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      image: '/img/portfolio/portafolio-anterior.webp',
    },
    {
      title: 'Prueba Técnica Frontend',
      description: 'Prueba técnica de frontend desarrollada como parte de un proceso de selección.',
      longDescription:
        'Ejercicio de prueba técnica de frontend resuelto como parte de un proceso de selección para una vacante de desarrollo.',
      url: 'https://prueba-tecnica-frontend-beta.vercel.app/',
      mock: { brand: 'UI PRUEBA', accentFrom: '#4338CA', accentTo: '#38BDF8' },
    },
    {
      title: 'Mapa Interactivo de Colombia',
      description: 'Visualización de datos poblacionales por departamento (Colombia, 2018).',
      longDescription:
        'Proyecto educativo de visualización de datos: mapa interactivo de Colombia que muestra la población por departamento a partir de datos de 2018.',
      url: 'https://jufe941209.github.io/actividadmapaJu.github.io/',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      mock: { brand: 'MAPA COLOMBIA', accentFrom: '#facc15', accentTo: '#15803d' },
    },
    {
      title: 'CV Interactivo — Primera versión',
      description: 'Primer portafolio personal (2022): perfil profesional y enlaces de contacto.',
      longDescription:
        'Primer portafolio personal, desarrollado en 2022: perfil profesional, resumen de formación y enlaces de contacto y redes.',
      url: 'https://jufe9412.github.io/Curriculum-Vitae/',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      mock: { brand: 'CV 2022', accentFrom: '#64748b', accentTo: '#1e293b' },
    },
  ],
  en: [
    {
      title: 'Food Delivery Frontend',
      description: 'React-built frontend for a food e-commerce business.',
      longDescription:
        'E-commerce interface for a food business: product catalog, category browsing and a checkout flow designed for online ordering.',
      url: 'https://front-end-gastronomia.vercel.app/',
      stack: ['React', 'JavaScript', 'CSS3'],
      image: '/img/portfolio/gastronomia.webp',
    },
    {
      title: 'Previous Portfolio',
      description: 'Earlier version of this personal portfolio.',
      longDescription:
        'First production version of this portfolio: a static site with a professional profile, skills, experience and a contact form, before the migration to React + MUI.',
      url: 'https://portafoliofebrero.vercel.app/',
      stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      image: '/img/portfolio/portafolio-anterior.webp',
    },
    {
      title: 'Frontend Technical Assessment',
      description: 'Frontend technical assessment completed as part of a hiring process.',
      longDescription:
        'Frontend technical exercise solved as part of a hiring process for a development role.',
      url: 'https://prueba-tecnica-frontend-beta.vercel.app/',
      mock: { brand: 'UI TEST', accentFrom: '#4338CA', accentTo: '#38BDF8' },
    },
    {
      title: 'Interactive Map of Colombia',
      description: 'Population data visualization by department (Colombia, 2018).',
      longDescription:
        'Educational data visualization project: an interactive map of Colombia showing population by department using 2018 data.',
      url: 'https://jufe941209.github.io/actividadmapaJu.github.io/',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      mock: { brand: 'COLOMBIA MAP', accentFrom: '#facc15', accentTo: '#15803d' },
    },
    {
      title: 'Interactive CV — First Version',
      description: 'First personal portfolio (2022): professional profile and contact links.',
      longDescription:
        'First personal portfolio, built in 2022: professional profile, education summary and contact/social links.',
      url: 'https://jufe9412.github.io/Curriculum-Vitae/',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      mock: { brand: 'CV 2022', accentFrom: '#64748b', accentTo: '#1e293b' },
    },
  ],
}

export function useFeaturedProject(): FeaturedProject {
  return featuredProjectByLocale[useLocale()]
}

export function useCompactProjects(): CompactProject[] {
  return compactProjectsByLocale[useLocale()]
}
