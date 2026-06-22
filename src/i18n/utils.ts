import { translations, type Lang } from './translations';
export type { Lang };

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang: Lang = 'pt';

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/');
  const lang = segments.find(s => s in languages);
  return (lang as Lang) ?? defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const parts = key.split('.');
    let node: unknown = translations[lang];
    for (const part of parts) {
      if (typeof node !== 'object' || node === null) return key;
      node = (node as Record<string, unknown>)[part];
    }
    return typeof node === 'string' ? node : key;
  };
}

export function getRelativeLangUrl(url: URL, lang: Lang, base: string): string {
  const path = url.pathname.slice(base.length); // e.g. 'pt/resume/'
  const segments = path.split('/');
  segments[0] = lang;
  return base + segments.join('/');
}
