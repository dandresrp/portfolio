import type { TranslationKeys } from './es';

const en: TranslationKeys = {
  // ─── Meta / SEO ────────────────────────────────────────────────────
  meta: {
    title:       'Diego Rios — Full-Stack Developer',
    description: 'Full-Stack Developer specialized in backend, mobile, and distributed systems. APIs with NestJS, apps with Flutter, infrastructure with PostgreSQL and Firebase.',
  },

  // ─── Navbar ────────────────────────────────────────────────────────
  nav: {
    about:    'About',
    projects: 'Projects',
    services: 'Services',
    contact:  'Contact',
    langLabel: 'ES',
    langHref:  '/',
  },

  // ─── Hero ──────────────────────────────────────────────────────────
  hero: {
    title:    'Full-Stack Developer',
    subtitle: 'Backend & Mobile',
    description:
      'I build scalable APIs, mobile applications, and integrated systems for real businesses.',
    techStack: ['NestJS', 'Flutter', 'PostgreSQL', 'MySQL', 'Prisma', 'Firebase', 'MinIO'],
    cta: {
      primary:      'View projects',
      primaryHref:  '#projects',
      secondary:    'Get in touch',
      secondaryHref: '#contact',
    },
  },

  // ─── About ─────────────────────────────────────────────────────────
  about: {
    label:    'About',
    title:    'I build real solutions, not just code.',
    paragraphs: [
      'Developer with 1.5 years of experience building backend, mobile, and distributed systems solutions.',
      'I have worked on e-commerce platforms, multitenant systems, marketing integrations, and mobile apps in production.',
      'I specialize in solving complex problems with scalable and efficient architectures.',
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────
  projects: {
    label:    'Projects',
    title:    'Selected work.',
    subtitle: 'Real production projects. Each one with a concrete problem and a deliberate technical solution.',
  },

  // ─── Services ──────────────────────────────────────────────────────
  services: {
    label:    'Services',
    title:    'How I can help you.',
    items: [
      {
        number: '01',
        title:  'API Development',
        description: 'Robust and scalable REST APIs with NestJS, covering authentication, validation, and documentation.',
      },
      {
        number: '02',
        title:  'Mobile Applications',
        description: 'Cross-platform apps with Flutter integrated with existing backends and cloud services.',
      },
      {
        number: '03',
        title:  'Integrations',
        description: 'Connections to email platforms, marketing tools, payment gateways, and third-party services.',
      },
      {
        number: '04',
        title:  'SaaS / Multitenant Systems',
        description: 'Multi-client architectures with data isolation, roles, and per-tenant configuration.',
      },
      {
        number: '05',
        title:  'System Optimization',
        description: 'Analysis, refactoring, and performance improvements for legacy or growing systems.',
      },
    ],
  },

  // ─── CTA ───────────────────────────────────────────────────────────
  cta: {
    title:      'Have a project in mind?',
    subtitle:   'I am available for freelance projects. Let\'s work together.',
    button:     'Contact me',
    buttonHref: '#contact',
  },

  // ─── Contact ───────────────────────────────────────────────────────
  contact: {
    label:    'Contact',
    title:    'Let\'s talk.',
    subtitle: 'I can help with your next project or improve your current system.',
    email:    'darp_0703@outlook.com',
    whatsapp: '+504 9886-6603',
    whatsappHref: 'https://wa.me/50498866603',
    github:   'github.com/dandresrp',
    githubHref: 'https://github.com/dandresrp',
    links: {
      email:    'Send email',
      whatsapp: 'WhatsApp',
      github:   'GitHub',
    },
    confidentiality:
      'For confidentiality reasons, I cannot share source code from commercial projects, but I can explain architecture and technical decisions on a call.',
  },

  // ─── Footer ────────────────────────────────────────────────────────
  footer: {
    copy: `© ${new Date().getFullYear()} Diego Rios. All rights reserved.`,
  },
};

export default en;
