import type { es } from './es'

export const en: typeof es = {
  nav: {
    profile: 'Professional Profile',
    journey: 'Journey',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
    openMenu: 'Open menu',
  },
  common: {
    downloadCv: 'Download CV',
    backToTop: 'Back to top',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    portfolio: 'Portfolio',
    contact: 'Contact',
    previous: 'Previous',
    next: 'Next',
  },
  language: {
    switchTo: 'Switch to {{language}}',
    es: 'Spanish',
    en: 'English',
  },
  hero: {
    greeting: "I'm a",
    highlights: ['Angular', 'React', '.NET / C#', 'AI & Data'],
  },
  profile: {
    title: 'Professional Profile',
    heading: 'Fullstack Developer & High-Performance Coach',
    facts: {
      github: 'GitHub',
      degree: 'Degree',
      availability: 'Availability',
      mode: 'Work mode',
      modeValue: 'Remote, async-first',
    },
  },
  journey: {
    title: 'From Elite Sport to Code',
    subtitle:
      'Two disciplines with the same demands: preparation, work discipline and continuous improvement. Here they are on a single timeline.',
    trackSport: 'Sports career',
    trackTech: 'Tech career',
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Frontend, backend, databases, DevOps, AI & data, testing and security stack.',
  },
  experience: {
    title: 'Professional Experience',
    work: 'Work Experience',
    education: 'Education',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Cloud-deployed projects, built independently end-to-end.',
    other: 'Other Projects',
    featuredBadge: 'Featured Project',
    viewProject: 'View Project',
    viewDetails: 'View Details',
    viewLive: 'View Live Project',
    technologies: 'Technologies',
    close: 'Close',
    featuredMockFeatures: ['Catalog', 'Role-based Login', 'Delivery Portal', 'Admin Panel'],
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Continuous training in data, AI and software development.',
    languages: 'Languages',
  },
  contact: {
    title: 'Contact',
    subtitle:
      "Have a project or an opportunity in mind? Reach out — this form actually works, and your message lands straight in my inbox.",
    trustBadge: 'Active channel — I reply personally within 24 hours',
    intro:
      "Tell me about your project, a role you have in mind, or just say hi — I read every message and reply myself, not a bot.",
    directEmail: 'Direct Email',
    directEmailValue: 'The form delivers your message straight to my inbox, instantly.',
    timezone: 'Time Zone',
    timezoneValue: 'Colombia (GMT-5) — available to coordinate with international teams.',
    tags: ['Remote', 'Freelance', 'Full-time', 'Async-first'],
    form: {
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      reassurance: "📩 Your message goes straight to my inbox — no middlemen.",
      success: 'Message sent successfully! It just landed in my inbox — I will reply soon.',
      errorPrefix: "There was a problem confirming delivery. If your message didn't arrive, email me directly at",
      missingKey: 'The form has no send key configured yet — please try again later.',
    },
  },
  cv: {
    back: 'Back to Portfolio',
    print: 'Print / Save as PDF',
  },
}
