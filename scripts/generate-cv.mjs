import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'cv')
mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, 'Henry-Julian-Fuentes-Clavijo-CV.pdf')

const COLORS = {
  brand: '#4338CA',
  accent: '#0EA5E9',
  text: '#111827',
  muted: '#4B5563',
  line: '#E5E7EB',
}

const doc = new PDFDocument({ size: 'A4', margins: { top: 42, bottom: 42, left: 48, right: 48 } })
doc.pipe(createWriteStream(outPath))

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right

function header() {
  doc.rect(0, 0, doc.page.width, 108).fill(COLORS.brand)
  doc
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
    .fontSize(22)
    .text('HENRY JULIAN FUENTES CLAVIJO', 48, 30)
  doc
    .font('Helvetica')
    .fontSize(11)
    .fillColor('#E0E7FF')
    .text('Desarrollador Fullstack | Angular | React | TypeScript | .NET/C# | IA & Bases de Datos', 48, 58)
  doc
    .fontSize(9.5)
    .fillColor('#C7D2FE')
    .text(
      '+57 305 465 6044  |  henjulian11@outlook.com  |  Bogotá, Colombia',
      48,
      78,
    )
  doc.text(
    'linkedin.com/in/julianfuentesclavijo  |  github.com/jufe941209  |  portafoliofebrero.vercel.app  |  new-life-iota.vercel.app',
    48,
    92,
  )
  doc.y = 128
  doc.fillColor(COLORS.text)
}

function sectionTitle(title) {
  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.brand).text(title.toUpperCase())
  const y = doc.y + 2
  doc.moveTo(48, y).lineTo(48 + pageWidth, y).lineWidth(1.5).strokeColor(COLORS.accent).stroke()
  doc.moveDown(0.6)
  doc.fillColor(COLORS.text)
}

function paragraph(text) {
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.text).text(text, { width: pageWidth, align: 'justify' })
  doc.moveDown(0.4)
}

function bullet(text, opts = {}) {
  doc
    .font('Helvetica')
    .fontSize(9.7)
    .fillColor(COLORS.text)
    .text(`•  ${text}`, { width: pageWidth, indent: 0, ...opts })
  doc.moveDown(0.15)
}

function skillLine(category, items) {
  doc.font('Helvetica-Bold').fontSize(9.7).fillColor(COLORS.brand).text(`${category}: `, {
    continued: true,
    width: pageWidth,
  })
  doc.font('Helvetica').fillColor(COLORS.text).text(items)
  doc.moveDown(0.25)
}

function jobHeader(role, company, location, period) {
  doc.moveDown(0.3)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(COLORS.text).text(role)
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor(COLORS.muted).text(`${company} | ${location}`)
  doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.accent).text(period)
  doc.moveDown(0.3)
}

header()

sectionTitle('Perfil profesional')
paragraph(
  'Desarrollador Fullstack con 2+ años de experiencia en desarrollo — 1+ año en producción en CUN construyendo plataformas Angular institucionales para más de 2.500 usuarios, y 1 año como Desarrollador Fullstack en proyectos freelance con React, Next.js y .NET/C#. Profesional en Cultura Física, Deporte y Recreación (Universidad Santo Tomás) con intercambio académico y tesis en la Universidad de Las Palmas de Gran Canaria, España.',
)
paragraph(
  'Diferenciador clave: transición deliberada del entrenamiento deportivo de elite al desarrollo de software — demostrando learnability excepcional, resiliencia bajo presión y mentalidad de producto centrada en el usuario. Disponible para trabajo remoto, async-first, con equipos internacionales.',
)

sectionTitle('Habilidades técnicas')
skillLine(
  'Frontend',
  'Angular (RxJS, HttpClient, Angular Material, Atomic Design), React, Next.js (SSR + API Routes), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, MUI, Figma',
)
skillLine(
  'Backend',
  'ASP.NET .NET 10 / C# (APIs RESTful, CORS, Middleware, JWT, BCrypt, Stored Procedures), Node.js, Python, Java (MVC, Apache, NetBeans), PHP',
)
skillLine('Bases de datos', 'SQL Server, MySQL, PostgreSQL, Oracle, MongoDB, Azure SQL')
skillLine(
  'DevOps y Herramientas',
  'Git, GitHub Actions (CI/CD), Docker, Azure App Service, Vercel, Render, Postman, Jira, Plane, Scrum',
)
skillLine(
  'IA y Datos',
  'Evaluación de LLMs, RLHF, AI Quality Assurance, Power BI, Looker Studio, Tableau, Pandas, NumPy, Matplotlib, Seaborn, PseInt, ETL y Limpieza de Datos',
)
skillLine(
  'Testing y Documentación',
  'Jasmine/Karma (Angular), Diagramas de Flujo de Procesos (Sistemas ADK), Manuales Técnicos, Manuales de Usuario, Manuales Caza fallas, Actas de Entrega',
)
skillLine('Seguridad', 'JWT, BCrypt, CORS, Flujos de recuperación de contraseña (SMTP)')
skillLine('Idiomas', 'Español (nativo) | Inglés B2 Upper-Intermediate (British Council, 2025)')

sectionTitle('Proyecto destacado')
doc.font('Helvetica-Bold').fontSize(11).fillColor(COLORS.text).text('NewLife E-Commerce — Proyecto Fullstack End-to-End (Solo Developer)')
doc
  .font('Helvetica-Oblique')
  .fontSize(9.3)
  .fillColor(COLORS.muted)
  .text('React | .NET 10 / C# | SQL Server | Azure | GitHub Actions CI/CD | new-life-iota.vercel.app')
doc.moveDown(0.3)
bullet(
  'API RESTful en .NET 10/C# con autenticación JWT, cifrado BCrypt, CORS, recuperación de contraseña por SMTP e integración de pasarela de pago Wompi.',
)
bullet(
  'Base de datos SQL Server con 11 tablas y 56+ stored procedures; desplegado en Azure SQL y Azure App Service con CI/CD vía GitHub Actions.',
)
bullet('Arquitectura, backend, frontend, base de datos, seguridad y despliegue en la nube — desarrollado 100% solo, en producción y funcional.')

doc.addPage()
doc.fillColor(COLORS.text)

sectionTitle('Experiencia laboral')

jobHeader(
  'Desarrollador Frontend',
  'CUN - Corporación Unificada Nacional de Educación Superior',
  'Bogotá, Colombia',
  'Abril 2025 – Actualidad',
)
bullet('Desarrollé interfaces Angular escalables con Atomic Design y Angular Material para plataformas en producción con más de 2.500 usuarios activos.')
bullet('Diseñé prototipos UX/UI end-to-end en Figma para módulos académicos y administrativos — desde wireframes hasta entregas finales con actas firmadas ante directores de área.')
bullet('Integré APIs RESTful en múltiples microservicios institucionales; produje documentación técnica, manuales de usuario, manuales caza fallas y diagramas de procesos ADK para más de 5 plataformas web (60+ módulos).')
bullet('Participé en diferentes ciclos de desarrollo ágil con Plane y Scrum — sprint planning y Git en equipos multidisciplinarios.')
bullet('Diseñé diagramas de flujo de procesos para sistemas ADK especificando queries, stored procedures y flujos de agentes para operaciones institucionales.')
doc.moveDown(0.15)
doc
  .font('Helvetica-Bold')
  .fontSize(9.3)
  .fillColor(COLORS.brand)
  .text(
    'LOGRO: Presentador principal de CUN 360 — plataforma insignia de la institución — en transmisión en vivo por YouTube ante 2.592 estudiantes nuevos y sustentada ante todas las rectorías y vicerrectorías.',
    { width: pageWidth },
  )
doc.fillColor(COLORS.text)

jobHeader('Desarrollador Fullstack — Freelance', 'Proyectos Independientes', 'Bogotá, Colombia', 'Abril 2022 – Actualidad')
bullet('NewLife E-Commerce (new-life-iota.vercel.app): plataforma fullstack completa — React, .NET 10/C# API RESTful con JWT, BCrypt, CORS, recuperación de contraseña por email (SMTP) e integración de pasarela de pago Wompi. SQL Server (11 tablas, 56+ stored procedures). CI/CD con GitHub Actions hacia Azure App Service.')
bullet('Sistema de autenticación completo: registro, login, sesión JWT, cifrado de contraseñas con BCrypt y recuperación automática por correo electrónico.')
bullet('Dashboards de visualización de datos y pipelines ETL con Python (Pandas, Matplotlib, Seaborn), Power BI, Looker Studio y Tableau.')
bullet('Plataforma PHP desplegada en Render con Docker y CI basado en GitHub.')
bullet('Desarrollador único end-to-end: arquitectura, backend, frontend, base de datos, seguridad, CI/CD y despliegue en la nube.')

jobHeader('Desarrollador Frontend — Simulación Laboral Internacional', 'No Country', 'Argentina (Remoto - 3 husos horarios)', 'Mayo 2024 - Agosto 2024')
bullet('Desarrollé interfaces Angular + TypeScript para e-commerce y gestión de tareas en equipo internacional remoto async-first.')
bullet('Lideré equipo ágil de 5 desarrolladores — sprint planning, Jira, revisión de pull requests en Git y entrega puntual de todos los hitos.')
bullet('Entregué 2 proyectos frontend completos en simulación laboral internacional.')

jobHeader(
  'Entrenador Deportivo Profesional — Nivel Institucional e Internacional',
  'CAFAM | Ride Now | Club Real Leones | Smart Fit | UNP | Fútbol Libre Fenix',
  'Bogotá, Colombia',
  'Junio 2018 - Abril 2025 (8+ años)',
)
bullet('Impartí programas de entrenamiento en instituciones del Estado colombiano vía CAFAM: Gimnasio de la Presidencia de la República, Procuraduría General, Contraloría General, Personería, Colpensiones y UNP.')
bullet('Entrenador de 300+ atletas en ciclismo, natación, triatlón, atletismo y fútbol — planes periodizados, pruebas fisiológicas (FTP, VO2max, evaluaciones antropométricas) y adaptación basada en datos.')
bullet('Preparé triatletas de elite para Ironman Cozumel (México) y Triatlón de Vichy (Francia), a cargo de la preparación física, ciclística y de natación.')
bullet('Carrera internacional: intercambio y tesis en Universidad de Las Palmas de Gran Canaria, España (2019) | Prácticas en Arucas F.C. (3ª División, España).')

sectionTitle('Educación')
bullet('Tecnólogo en Análisis y Desarrollo de Software — SENA | 2024 – En proceso de certificación')
bullet('Técnico en Programación y Desarrollo Web — Universidad Autónoma de Bucaramanga (UNAB) | 2023')
bullet('Profesional en Cultura Física, Deporte y Recreación — Universidad Santo Tomás, Bogotá | 2018')
bullet('Ciencias del Deporte — Intercambio Internacional y Tesis | Prácticas en Arucas F.C. (3ª División) — Universidad de Las Palmas de Gran Canaria, España | 2016-2017')

sectionTitle('Certificaciones')
bullet('Certificación en Data Analytics — ITCertificate, 2025')
bullet('Certificación Profesional en Big Data — ITCertificate, 2025')
bullet('Diplomado en Ciencia de Datos — Talento Tech, 2024')
bullet('Desarrollo de Software Intermedio — Misión TIC / Universidad de Los Andes, 2024')
bullet('Programación Web Nivel Intermedio — Universidad de Los Andes, 2023')

sectionTitle('Idiomas')
bullet('Español: Nativo')
bullet('Inglés: B2 Upper-Intermediate — British Council, 2025 | B1 — Universidad de Las Palmas de Gran Canaria, España, 2017 | Experiencia profesional semibilingüe')

doc.end()

console.log(`CV generado en: ${outPath}`)
