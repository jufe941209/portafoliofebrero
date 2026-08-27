import { useLocale, type Locale } from '../hooks/useLocale'

export type SkillGroupId =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devops'
  | 'ai-data'
  | 'testing'
  | 'security'
  | 'languages'

export interface SkillGroup {
  id: SkillGroupId
  category: string
  items: string[]
}

// Selección corta para el anillo 3D — el detalle completo va en skillGroups.
// Son nombres de tecnologías: no requieren traducción.
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

const skillGroupsByLocale: Record<Locale, SkillGroup[]> = {
  es: [
    {
      id: 'frontend',
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
      id: 'backend',
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
      id: 'databases',
      category: 'Bases de datos',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Azure SQL'],
    },
    {
      id: 'devops',
      category: 'DevOps y Herramientas',
      items: ['Git', 'GitHub Actions (CI/CD)', 'Docker', 'Azure App Service', 'Vercel', 'Render', 'Postman', 'Jira', 'Plane', 'Scrum'],
    },
    {
      id: 'ai-data',
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
      id: 'testing',
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
      id: 'security',
      category: 'Seguridad',
      items: ['JWT', 'BCrypt', 'CORS', 'Flujos de recuperación de contraseña (SMTP)'],
    },
    {
      id: 'languages',
      category: 'Idiomas',
      items: ['Español (nativo)', 'Inglés B2 Upper-Intermediate (British Council, 2025)'],
    },
  ],
  en: [
    {
      id: 'frontend',
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
      id: 'backend',
      category: 'Backend',
      items: [
        'ASP.NET .NET 10 / C# (RESTful APIs, CORS, Middleware, JWT, BCrypt, Stored Procedures)',
        'Node.js',
        'Python',
        'Java (MVC, Apache, NetBeans)',
        'PHP',
      ],
    },
    {
      id: 'databases',
      category: 'Databases',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Azure SQL'],
    },
    {
      id: 'devops',
      category: 'DevOps & Tools',
      items: ['Git', 'GitHub Actions (CI/CD)', 'Docker', 'Azure App Service', 'Vercel', 'Render', 'Postman', 'Jira', 'Plane', 'Scrum'],
    },
    {
      id: 'ai-data',
      category: 'AI & Data',
      items: [
        'LLM Evaluation',
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
        'ETL & Data Cleaning',
      ],
    },
    {
      id: 'testing',
      category: 'Testing & Documentation',
      items: [
        'Jasmine/Karma (Angular)',
        'Process Flow Diagrams (ADK Systems)',
        'Technical Manuals',
        'User Manuals',
        'Troubleshooting Guides',
        'Delivery Sign-off Reports',
      ],
    },
    {
      id: 'security',
      category: 'Security',
      items: ['JWT', 'BCrypt', 'CORS', 'Password Recovery Flows (SMTP)'],
    },
    {
      id: 'languages',
      category: 'Languages',
      items: ['Spanish (native)', 'English B2 Upper-Intermediate (British Council, 2025)'],
    },
  ],
}

export function useSkillGroups(): SkillGroup[] {
  return skillGroupsByLocale[useLocale()]
}
