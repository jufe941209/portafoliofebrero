import { useLocale, type Locale } from '../hooks/useLocale'

export interface EducationItem {
  title: string
  period: string
  institution: string
  location: string
}

export interface CertificationItem {
  title: string
  issuer: string
  year: string
  variant?: 'default' | 'achievement'
}

export interface LanguageItem {
  language: string
  level: string
}

const educationByLocale: Record<Locale, EducationItem[]> = {
  es: [
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
  ],
  en: [
    {
      title: 'Associate Degree in Software Analysis and Development',
      period: '2024 – Certification in progress',
      institution: 'SENA',
      location: 'Colombia',
    },
    {
      title: 'Technical Diploma in Web Programming and Development',
      period: '2023',
      institution: 'Universidad Autónoma de Bucaramanga (UNAB)',
      location: 'Colombia',
    },
    {
      title: "Bachelor's Degree in Physical Culture, Sport and Recreation",
      period: '2018',
      institution: 'Universidad Santo Tomás',
      location: 'Bogotá, Colombia',
    },
    {
      title: 'Sports Science — International Exchange & Thesis | Internship at Arucas F.C. (3rd Division)',
      period: '2016 – 2017',
      institution: 'Universidad de Las Palmas de Gran Canaria',
      location: 'Spain',
    },
  ],
}

const certificationsByLocale: Record<Locale, CertificationItem[]> = {
  es: [
    {
      title: 'Saber TyT (ICFES) — Puntaje 141/200',
      issuer: 'Percentil 100 nacional · Percentil 99 en Ingeniería de Sistemas y Telemática',
      year: '2026',
      variant: 'achievement',
    },
    { title: 'Certificación en Data Analytics', issuer: 'ITCertificate', year: '2025' },
    { title: 'Certificación Profesional en Big Data', issuer: 'ITCertificate', year: '2025' },
    { title: 'Diplomado en Ciencia de Datos', issuer: 'Talento Tech', year: '2024' },
    { title: 'Desarrollo de Software Intermedio', issuer: 'Misión TIC / Universidad de Los Andes', year: '2024' },
    { title: 'Programación Web Nivel Intermedio', issuer: 'Universidad de Los Andes', year: '2023' },
  ],
  en: [
    {
      title: 'Saber TyT (ICFES) — Score 141/200',
      issuer: '100th percentile nationally · 99th percentile in Systems & Telematics Engineering',
      year: '2026',
      variant: 'achievement',
    },
    { title: 'Data Analytics Certification', issuer: 'ITCertificate', year: '2025' },
    { title: 'Professional Big Data Certification', issuer: 'ITCertificate', year: '2025' },
    { title: 'Data Science Diploma', issuer: 'Talento Tech', year: '2024' },
    { title: 'Intermediate Software Development', issuer: 'Misión TIC / Universidad de Los Andes', year: '2024' },
    { title: 'Intermediate-Level Web Programming', issuer: 'Universidad de Los Andes', year: '2023' },
  ],
}

const languagesByLocale: Record<Locale, LanguageItem[]> = {
  es: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'B2 Upper-Intermediate — British Council, 2025' },
    { language: 'Inglés', level: 'B1 — Universidad de Las Palmas de Gran Canaria, España, 2017' },
  ],
  en: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'B2 Upper-Intermediate — British Council, 2025' },
    { language: 'English', level: 'B1 — Universidad de Las Palmas de Gran Canaria, Spain, 2017' },
  ],
}

export function useEducation(): EducationItem[] {
  return educationByLocale[useLocale()]
}

export function useCertifications(): CertificationItem[] {
  return certificationsByLocale[useLocale()]
}

export function useLanguages(): LanguageItem[] {
  return languagesByLocale[useLocale()]
}
