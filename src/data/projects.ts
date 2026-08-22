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

export const featuredProject: FeaturedProject = {
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
}

export const compactProjects: CompactProject[] = [
  {
    title: 'Front-end Gastronomía',
    description: 'Frontend de e-commerce gastronómico desarrollado en React.',
    longDescription:
      'Interfaz de e-commerce para un negocio gastronómico: catálogo de productos, navegación por categorías y flujo de compra pensado para pedidos en línea.',
    url: 'https://front-end-gastronomia.vercel.app/',
    stack: ['React', 'JavaScript', 'CSS3'],
    image: '/img/portfolio/gastronomia.png',
  },
  {
    title: 'Portafolio anterior',
    description: 'Versión previa de este portafolio personal.',
    longDescription:
      'Primera versión en producción de este portafolio: sitio estático con perfil profesional, habilidades, experiencia y formulario de contacto, antes de la migración a React + MUI.',
    url: 'https://portafoliofebrero.vercel.app/',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    image: '/img/portfolio/portafolio-anterior.png',
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
]
