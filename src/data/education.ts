export interface EducationItem {
  title: string
  period: string
  institution: string
  location: string
}

export const education: EducationItem[] = [
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    period: '2024 – En proceso de certificación',
    institution: 'SENA',
    location: 'Colombia',
  },
  {
    title: 'Técnico en Programación y Desarrollo Web',
    period: '2023',
    institution: 'Universidad Autónoma de Bucaramanga (UNAB)',
    location: 'Colombia',
  },
  {
    title: 'Profesional en Cultura Física, Deporte y Recreación',
    period: '2018',
    institution: 'Universidad Santo Tomás',
    location: 'Bogotá, Colombia',
  },
  {
    title: 'Ciencias del Deporte — Intercambio Internacional y Tesis | Prácticas en Arucas F.C. (3ª División)',
    period: '2016 - 2017',
    institution: 'Universidad de Las Palmas de Gran Canaria',
    location: 'España',
  },
]

export interface CertificationItem {
  title: string
  issuer: string
  year: string
}

export const certifications: CertificationItem[] = [
  { title: 'Certificación en Data Analytics', issuer: 'ITCertificate', year: '2025' },
  { title: 'Certificación Profesional en Big Data', issuer: 'ITCertificate', year: '2025' },
  { title: 'Diplomado en Ciencia de Datos', issuer: 'Talento Tech', year: '2024' },
  { title: 'Desarrollo de Software Intermedio', issuer: 'Misión TIC / Universidad de Los Andes', year: '2024' },
  { title: 'Programación Web Nivel Intermedio', issuer: 'Universidad de Los Andes', year: '2023' },
]

export interface LanguageItem {
  language: string
  level: string
}

export const languages: LanguageItem[] = [
  { language: 'Español', level: 'Nativo' },
  { language: 'Inglés', level: 'B2 Upper-Intermediate — British Council, 2025' },
  { language: 'Inglés', level: 'B1 — Universidad de Las Palmas de Gran Canaria, España, 2017' },
]
