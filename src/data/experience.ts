export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  achievement?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Desarrollador Frontend',
    company: 'CUN - Corporación Unificada Nacional de Educación Superior',
    location: 'Bogotá, Colombia',
    period: 'Abril 2025 – Actualidad',
    bullets: [
      'Desarrollé interfaces Angular escalables con Atomic Design y Angular Material para plataformas en producción con más de 2.500 usuarios activos.',
      'Diseñé prototipos UX/UI end-to-end en Figma para módulos académicos y administrativos — desde wireframes hasta entregas finales con actas firmadas ante directores de área.',
      'Integré APIs RESTful en múltiples microservicios institucionales; produje documentación técnica, manuales de usuario, manuales caza fallas y diagramas de procesos ADK para más de 5 plataformas web (60+ módulos).',
      'Participé en diferentes ciclos de desarrollo ágil con Plane y Scrum — sprint planning y Git en equipos multidisciplinarios.',
      'Diseñé diagramas de flujo de procesos para sistemas ADK especificando queries, stored procedures y flujos de agentes para operaciones institucionales.',
    ],
    achievement:
      'LOGRO: Presentador principal de CUN 360 — plataforma insignia de la institución — en transmisión en vivo por YouTube ante 2.592 estudiantes nuevos y sustentada ante todas las rectorías y vicerrectorías.',
  },
  {
    role: 'Desarrollador Fullstack — Freelance',
    company: 'Proyectos Independientes',
    location: 'Bogotá, Colombia',
    period: 'Abril 2022 – Actualidad',
    bullets: [
      'NewLife E-Commerce (new-life-iota.vercel.app): plataforma fullstack completa — React, .NET 10/C# API RESTful con JWT, BCrypt, CORS, recuperación de contraseña por email (SMTP) e integración de pasarela de pago Wompi. SQL Server (11 tablas, 56+ stored procedures). CI/CD con GitHub Actions hacia Azure App Service. Base de datos en Azure SQL.',
      'Sistema de autenticación completo: registro, login, sesión JWT, cifrado de contraseñas con BCrypt y recuperación automática por correo electrónico.',
      'Dashboards de visualización de datos y pipelines ETL con Python (Pandas, Matplotlib, Seaborn), Power BI, Looker Studio y Tableau.',
      'Plataforma PHP desplegada en Render con Docker y CI basado en GitHub.',
      'Desarrollador único end-to-end: arquitectura, backend, frontend, base de datos, seguridad, CI/CD y despliegue en la nube.',
    ],
  },
  {
    role: 'Desarrollador Frontend — Simulación Laboral Internacional',
    company: 'No Country',
    location: 'Argentina (Remoto - 3 husos horarios)',
    period: 'Mayo 2024 - Agosto 2024',
    bullets: [
      'Desarrollé interfaces Angular + TypeScript para e-commerce y gestión de tareas en equipo internacional remoto async-first.',
      'Lideré equipo ágil de 5 desarrolladores — sprint planning, Jira, revisión de pull requests en Git y entrega puntual de todos los hitos.',
      'Entregué 2 proyectos frontend completos en simulación laboral internacional.',
    ],
  },
  {
    role: 'Entrenador Deportivo Profesional — Nivel Institucional e Internacional',
    company: 'CAFAM | Ride Now | Club Real Leones | Smart Fit | UNP | Fútbol Libre Fenix',
    location: 'Bogotá, Colombia',
    period: 'Junio 2018 - Abril 2025 (8+ años)',
    bullets: [
      'Impartí programas de entrenamiento en instituciones del Estado colombiano vía CAFAM: Gimnasio de la Presidencia de la República, Procuraduría General, Contraloría General, Personería, Colpensiones y UNP.',
      'Entrenador de 300+ atletas en ciclismo, natación, triatlón, atletismo y fútbol — planes periodizados, pruebas fisiológicas (FTP, VO2max, evaluaciones antropométricas) y adaptación basada en datos.',
      'Preparé triatletas de elite para Ironman Cozumel (México) y Triatlón de Vichy (Francia), a cargo de la preparación física, ciclística y de natación.',
      'Carrera internacional: intercambio y tesis en Universidad de Las Palmas de Gran Canaria, España (2019) | Prácticas en Arucas F.C. (3ª División, España).',
    ],
  },
]
