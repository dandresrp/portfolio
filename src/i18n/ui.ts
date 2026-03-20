import es from './es';
import en from './en';

export type Locale = 'es' | 'en';

const translations = { es, en } as const;

/**
 * Returns the full translation object for the given locale.
 * Falls back to Spanish if an unsupported locale is provided.
 *
 * Usage inside an Astro component:
 *   const t = getTranslation(locale);
 *   t.hero.title
 */
export function getTranslation(locale: string): typeof es {
  return translations[locale as Locale] ?? translations.es;
}

/**
 * Narrows an unknown string to a valid Locale.
 * Useful when reading Astro.currentLocale which returns string | undefined.
 */
export function toLocale(value: string | undefined): Locale {
  if (value === 'en') return 'en';
  return 'es';
}
