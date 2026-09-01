import { useLocale, type Locale } from '../hooks/useLocale'

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  achievement?: string
}

const experienceByLocale: Record<Locale, ExperienceItem[]> = {
  es: [
    {
      role: 'Desarrollador Frontend',
      company: 'CUN - Corporación Unificada Nacional de Educación Superior',
      location: 'Bogotá, Colombia',
      period: 'Abril 2025 – Actualidad',
      bullets: [
        'Desarrollé interfaces Angular escalables con Atomic Design y Angular Material para plataformas en producción con más de 2.500 usuarios activos.',
        'Diseñé prototipos UX/UI end-to-end en Figma para módulos académicos y administrativos — desde wireframes hasta entregas finales con actas firmadas ante directores de área.',
        'Integré APIs RESTful en múltiples microservicios institucionales; produje documentación técnica, manuales de usuario, manuales de caza de fallas y diagramas de procesos ADK para más de 5 plataformas web (60+ módulos).',
        'Participé en ciclos de desarrollo ágil con Plane y Scrum — sprint planning y Git en equipos multidisciplinarios.',
        'Diseñé diagramas de flujo de procesos para sistemas ADK especificando queries, stored procedures y flujos de agentes para operaciones institucionales.',
      ],
      achievement:
        'LOGRO: Presentador principal de CUN 360 — plataforma insignia de la institución — en transmisión en vivo por YouTube ante 2.592 estudiantes nuevos, sustentada ante todas las rectorías y vicerrectorías.',
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
        'Desarrollé interfaces Angular + TypeScript para e-commerce y gestión de tareas en un equipo internacional remoto async-first.',
        'Lideré un equipo ágil de 5 desarrolladores — sprint planning, Jira, revisión de pull requests en Git y entrega puntual de todos los hitos.',
        'Entregué 2 proyectos frontend completos en simulación laboral internacional.',
      ],
    },
    {
      role: 'Entrenador Deportivo Profesional — Nivel Institucional e Internacional',
      company: 'CAFAM | Ride Now | Club Real Leones | Smart Fit | UNP | Fútbol Libre Fénix',
      location: 'Bogotá, Colombia',
      period: 'Junio 2018 - Abril 2025 (8+ años)',
      bullets: [
        'Impartí programas de entrenamiento en instituciones del Estado colombiano vía CAFAM: Gimnasio de la Presidencia de la República, Procuraduría General, Contraloría General, Personería, Colpensiones y UNP.',
        'Entrené a más de 300 atletas en ciclismo, natación, triatlón, atletismo y fútbol — planes periodizados, pruebas fisiológicas (FTP, VO2max, evaluaciones antropométricas) y adaptación basada en datos.',
        'Preparé triatletas de élite para Ironman Cozumel (México) y el Triatlón de Vichy (Francia), como encargado de la preparación física, ciclística y de natación.',
        'Carrera internacional: intercambio y tesis en Universidad de Las Palmas de Gran Canaria, España (2019) | Prácticas en Arucas F.C. (3ª División, España).',
      ],
    },
  ],
  en: [
    {
      role: 'Frontend Developer',
      company: 'CUN - Corporación Unificada Nacional de Educación Superior',
      location: 'Bogotá, Colombia',
      period: 'April 2025 – Present',
      bullets: [
        'Built scalable Angular interfaces using Atomic Design and Angular Material for production platforms serving 2,500+ active users.',
        'Designed end-to-end UX/UI prototypes in Figma for academic and administrative modules — from wireframes to final deliverables signed off by area directors.',
        'Integrated RESTful APIs across multiple institutional microservices; produced technical documentation, user manuals, troubleshooting guides and ADK process diagrams for 5+ web platforms (60+ modules).',
        'Took part in agile development cycles using Plane and Scrum — sprint planning and Git workflows within multidisciplinary teams.',
        'Designed process flow diagrams for ADK systems, specifying queries, stored procedures and agent workflows for institutional operations.',
      ],
      achievement:
        "ACHIEVEMENT: Lead presenter for CUN 360 — the institution's flagship platform — livestreamed on YouTube to 2,592 incoming students and defended before every rectory and vice-rectory.",
    },
    {
      role: 'Fullstack Developer — Freelance',
      company: 'Independent Projects',
      location: 'Bogotá, Colombia',
      period: 'April 2022 – Present',
      bullets: [
        'NewLife E-Commerce (new-life-iota.vercel.app): full fullstack platform — React, .NET 10/C# RESTful API with JWT, BCrypt, CORS, email-based (SMTP) password recovery and Wompi payment gateway integration. SQL Server (11 tables, 56+ stored procedures). CI/CD with GitHub Actions to Azure App Service. Database hosted on Azure SQL.',
        'Complete authentication system: sign-up, login, JWT sessions, BCrypt password hashing and automatic email-based recovery.',
        'Data visualization dashboards and ETL pipelines using Python (Pandas, Matplotlib, Seaborn), Power BI, Looker Studio and Tableau.',
        'PHP platform deployed on Render with Docker and GitHub-based CI.',
        'Sole end-to-end developer: architecture, backend, frontend, database, security, CI/CD and cloud deployment.',
      ],
    },
    {
      role: 'Frontend Developer — International Work Simulation',
      company: 'No Country',
      location: 'Argentina (Remote — 3 time zones)',
      period: 'May 2024 – August 2024',
      bullets: [
        'Built Angular + TypeScript interfaces for e-commerce and task management on a remote, async-first international team.',
        'Led an agile team of 5 developers — sprint planning, Jira, Git pull request reviews and on-time delivery of every milestone.',
        'Delivered 2 complete frontend projects as part of the international work simulation.',
      ],
    },
    {
      role: 'Professional Sports Coach — Institutional & International Level',
      company: 'CAFAM | Ride Now | Club Real Leones | Smart Fit | UNP | Fútbol Libre Fénix',
      location: 'Bogotá, Colombia',
      period: 'June 2018 – April 2025 (8+ years)',
      bullets: [
        "Delivered training programs at Colombian government institutions through CAFAM: the Presidential Palace Gym, the Attorney General's Office, the Comptroller General, the Ombudsman's Office, Colpensiones and UNP.",
        'Coached 300+ athletes in cycling, swimming, triathlon, athletics and football — periodized training plans, physiological testing (FTP, VO2max, anthropometric assessments) and data-driven adaptation.',
        'Prepared elite triathletes for Ironman Cozumel (Mexico) and the Vichy Triathlon (France), overseeing strength, cycling and swimming conditioning.',
        'International career: academic exchange and thesis at Universidad de Las Palmas de Gran Canaria, Spain (2019) | Internship at Arucas F.C. (Spanish 3rd Division).',
      ],
    },
  ],
}

export function useExperience(): ExperienceItem[] {
  const locale = useLocale()
  return experienceByLocale[locale]
}
