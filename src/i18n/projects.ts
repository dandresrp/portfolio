import type { Locale } from './ui';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Project {
  id:           string;
  title:        string;
  description:  string;
  tasks:        string[];
  technologies: string[];
  impact?:      string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projectsEs: Project[] = [
  {
    id:          'ecommerce-backend',
    title:       'Ecommerce Backend',
    description: 'Backend para plataforma de ecommerce con integraciones de marketing y gestión de órdenes.',
    tasks: [
      'APIs REST con NestJS para productos, órdenes y usuarios',
      'Integración con plataformas de email marketing (SendGrid, Mailgun)',
      'Manejo de órdenes, inventario y estados de pedido',
      'Autenticación con JWT y control de roles',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'MySQL', 'SendGrid', 'Mailgun'],
    impact:       'Automatización de flujos de marketing y mejora en el tracking de conversiones.',
  },
  {
    id:          'sistema-multitenant',
    title:       'Sistema Multitenant SaaS',
    description: 'Plataforma SaaS con arquitectura multitenant para múltiples clientes en una sola instancia.',
    tasks: [
      'Diseño e implementación de arquitectura multi-tenant',
      'Separación de datos por cliente con Prisma y PostgreSQL',
      'Sistema de roles y permisos por organización',
      'Onboarding automatizado de nuevos tenants',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Prisma'],
    impact:       'Escalabilidad para múltiples clientes con seguridad de datos garantizada entre tenants.',
  },
  {
    id:          'cdn-storage',
    title:       'CDN / Sistema de Almacenamiento',
    description: 'Sistema de almacenamiento de archivos tipo S3 con MinIO para gestión de assets en producción.',
    tasks: [
      'Configuración y administración de servidor MinIO',
      'API de carga, descarga y eliminación de archivos',
      'Integración con el backend principal vía presigned URLs',
      'Gestión de buckets y políticas de acceso',
    ],
    technologies: ['MinIO', 'Node.js', 'NestJS'],
  },
  {
    id:          'app-mobile',
    title:       'Aplicaciones Móviles',
    description: 'Apps móviles multiplataforma (iOS y Android) conectadas a APIs y servicios en la nube.',
    tasks: [
      'Desarrollo de interfaces con Flutter',
      'Integración con APIs REST del backend',
      'Notificaciones push con Firebase Cloud Messaging',
      'Autenticación con Firebase Auth',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id:          'crm-php',
    title:       'CRM en PHP (Sistema Legacy)',
    description: 'Mantenimiento y optimización de sistema CRM construido en PHP con base de datos MySQL.',
    tasks: [
      'Identificación y corrección de bugs críticos',
      'Optimización de consultas SQL lentas',
      'Refactoring de módulos para mejorar mantenibilidad',
      'Documentación de funcionalidades existentes',
    ],
    technologies: ['PHP', 'MySQL'],
  },
];

const projectsEn: Project[] = [
  {
    id:          'ecommerce-backend',
    title:       'Ecommerce Backend',
    description: 'Backend for an e-commerce platform with marketing integrations and order management.',
    tasks: [
      'REST APIs with NestJS for products, orders, and users',
      'Integration with email marketing platforms (SendGrid, Mailgun)',
      'Order management, inventory tracking, and status handling',
      'JWT authentication and role-based access control',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'MySQL', 'SendGrid', 'Mailgun'],
    impact:       'Automated marketing workflows and improved conversion tracking.',
  },
  {
    id:          'sistema-multitenant',
    title:       'Multitenant SaaS System',
    description: 'SaaS platform with multitenant architecture supporting multiple clients in a single instance.',
    tasks: [
      'Design and implementation of multi-tenant architecture',
      'Data isolation per client using Prisma and PostgreSQL',
      'Organization-level roles and permissions system',
      'Automated onboarding for new tenants',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Prisma'],
    impact:       'Scalable multi-client platform with guaranteed data security between tenants.',
  },
  {
    id:          'cdn-storage',
    title:       'CDN / Storage System',
    description: 'S3-compatible file storage system using MinIO for production asset management.',
    tasks: [
      'MinIO server setup and administration',
      'File upload, download, and deletion API',
      'Integration with the main backend via presigned URLs',
      'Bucket management and access policies',
    ],
    technologies: ['MinIO', 'Node.js', 'NestJS'],
  },
  {
    id:          'app-mobile',
    title:       'Mobile Applications',
    description: 'Cross-platform mobile apps (iOS & Android) connected to APIs and cloud services.',
    tasks: [
      'UI development with Flutter',
      'Integration with backend REST APIs',
      'Push notifications with Firebase Cloud Messaging',
      'Authentication with Firebase Auth',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id:          'crm-php',
    title:       'PHP CRM (Legacy System)',
    description: 'Maintenance and optimization of a legacy CRM system built in PHP with a MySQL database.',
    tasks: [
      'Identification and fix of critical bugs',
      'Optimization of slow SQL queries',
      'Module refactoring to improve maintainability',
      'Documentation of existing functionality',
    ],
    technologies: ['PHP', 'MySQL'],
  },
];

// ─── Export ──────────────────────────────────────────────────────────────────

const projectsByLocale: Record<Locale, Project[]> = {
  es: projectsEs,
  en: projectsEn,
};

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale] ?? projectsEs;
}
