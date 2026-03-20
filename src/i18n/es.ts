const es = {
  // ─── Meta / SEO ────────────────────────────────────────────────────
  meta: {
    title:       'Diego Rios — Full-Stack Developer',
    description: 'Desarrollador Full-Stack especializado en backend, mobile y sistemas distribuidos. APIs con NestJS, apps con Flutter, infraestructura con PostgreSQL y Firebase.',
  },

  // ─── Navbar ────────────────────────────────────────────────────────
  nav: {
    about:    'Sobre mí',
    projects: 'Proyectos',
    services: 'Servicios',
    contact:  'Contacto',
    langLabel: 'EN',
    langHref:  '/en/',
  },

  // ─── Hero ──────────────────────────────────────────────────────────
  hero: {
    title:    'Full-Stack Developer',
    subtitle: 'Backend & Mobile',
    description:
      'Desarrollo APIs escalables, aplicaciones móviles y sistemas integrados para negocios reales.',
    techStack: ['NestJS', 'Flutter', 'PostgreSQL', 'MySQL', 'Prisma', 'Firebase', 'MinIO'],
    cta: {
      primary:   'Ver proyectos',
      primaryHref: '#proyectos',
      secondary:   'Contactar',
      secondaryHref: '#contacto',
    },
  },

  // ─── About ─────────────────────────────────────────────────────────
  about: {
    label:    'Sobre mí',
    title:    'Construyo soluciones reales, no solo código.',
    paragraphs: [
      'Desarrollador con 1.5 años de experiencia construyendo soluciones en backend, mobile y sistemas distribuidos.',
      'He trabajado en ecommerce, sistemas multitenant, integraciones de marketing y aplicaciones móviles en producción.',
      'Me especializo en resolver problemas complejos con arquitecturas escalables y eficientes.',
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────
  projects: {
    label:    'Proyectos',
    title:    'Trabajo seleccionado.',
    subtitle: 'Proyectos reales en producción. Cada uno con un problema concreto y una solución técnica deliberada.',
  },

  // ─── Services ──────────────────────────────────────────────────────
  services: {
    label:    'Servicios',
    title:    'En qué puedo ayudarte.',
    items: [
      {
        number: '01',
        title:  'Desarrollo de APIs',
        description: 'APIs REST robustas y escalables con NestJS, manejo de autenticación, validación y documentación.',
      },
      {
        number: '02',
        title:  'Aplicaciones móviles',
        description: 'Apps multiplataforma con Flutter integradas a backends existentes y servicios en la nube.',
      },
      {
        number: '03',
        title:  'Integraciones',
        description: 'Conexión con plataformas de email, marketing, pasarelas de pago y servicios externos.',
      },
      {
        number: '04',
        title:  'Sistemas SaaS / Multitenant',
        description: 'Arquitecturas multi-cliente con separación de datos, roles y configuración por tenant.',
      },
      {
        number: '05',
        title:  'Optimización de sistemas existentes',
        description: 'Análisis, refactoring y mejora de rendimiento en sistemas legacy o en crecimiento.',
      },
    ],
  },

  // ─── CTA ───────────────────────────────────────────────────────────
  cta: {
    title:    '¿Tienes un proyecto interesante?',
    subtitle: 'Me gusta conectar con gente que construye cosas. Escríbeme.',
    button:   'Ponerse en contacto',
    buttonHref: '#contacto',
  },

  // ─── Contact ───────────────────────────────────────────────────────
  contact: {
    label:    'Contacto',
    title:    'Hablemos.',
    subtitle: 'Ya sea para hablar de un proyecto, una idea, o simplemente conectar.',
    email:    'darp_0703@outlook.com',
    whatsapp: '+504 9886-6603',
    whatsappHref: 'https://wa.me/50498866603',
    github:   'github.com/dandresrp',
    githubHref: 'https://github.com/dandresrp',
    links: {
      email:    'Enviar email',
      whatsapp: 'WhatsApp',
      github:   'GitHub',
    },
    confidentiality:
      'Por confidencialidad, no puedo compartir código fuente de proyectos comerciales, pero puedo explicar arquitectura y decisiones técnicas en una llamada.',
  },

  // ─── Footer ────────────────────────────────────────────────────────
  footer: {
    copy: `© ${new Date().getFullYear()} Diego Rios. Todos los derechos reservados.`,
  },
} as const;

export default es;
export type TranslationKeys = typeof es;
