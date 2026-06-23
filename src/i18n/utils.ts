import { translations, type Lang } from './translations';
export type { Lang };

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang: Lang = 'pt';

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/');
  const lang = segments.find((s) => s in languages);
  return (lang as Lang) ?? defaultLang;
}

export function getRelativeLangUrl(url: URL, lang: Lang, base: string): string {
  const path = url.pathname.slice(base.length); // e.g. 'pt/resume/'
  const segments = path.split('/');
  segments[0] = lang;
  return base + segments.join('/');
}
