export interface SkillGroup {
  category: string
  items: string[]
}

// Selección corta para el anillo 3D — el detalle completo va en skillGroups.
export const featuredTech = [
  'Angular',
  'React',
  'TypeScript',
  '.NET / C#',
  'SQL Server',
  'Azure',
  'Docker',
  'GitHub Actions',
  'MongoDB',
  'Python',
  'Figma',
  'Next.js',
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'Angular (RxJS, HttpClient, Angular Material, Atomic Design)',
      'React',
      'Next.js (SSR + API Routes)',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'MUI (Material UI)',
      'Figma',
    ],
  },
  {
    category: 'Backend',
    items: [
      'ASP.NET .NET 10 / C# (APIs RESTful, CORS, Middleware, JWT, BCrypt, Stored Procedures)',
      'Node.js',
      'Python',
      'Java (MVC, Apache, NetBeans)',
      'PHP',
    ],
  },
  {
    category: 'Bases de datos',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Azure SQL'],
  },
  {
    category: 'DevOps y Herramientas',
    items: [
      'Git',
      'GitHub Actions (CI/CD)',
      'Docker',
      'Azure App Service',
      'Vercel',
      'Render',
      'Postman',
      'Jira',
      'Plane',
      'Scrum',
    ],
  },
  {
    category: 'IA y Datos',
    items: [
      'Evaluación de LLMs',
      'RLHF',
      'AI Quality Assurance',
      'Power BI',
      'Looker Studio',
      'Tableau',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'PseInt',
      'ETL y Limpieza de Datos',
    ],
  },
  {
    category: 'Testing y Documentación',
    items: [
      'Jasmine/Karma (Angular)',
      'Diagramas de Flujo de Procesos (Sistemas ADK)',
      'Manuales Técnicos',
      'Manuales de Usuario',
      'Manuales Caza fallas',
      'Actas de Entrega',
    ],
  },
  {
    category: 'Seguridad',
    items: ['JWT', 'BCrypt', 'CORS', 'Flujos de recuperación de contraseña (SMTP)'],
  },
  {
    category: 'Idiomas',
    items: ['Español (nativo)', 'Inglés B2 Upper-Intermediate (British Council, 2025)'],
  },
]
