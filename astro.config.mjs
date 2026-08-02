import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://panizio.is-a.dev',
  publicDir: 'public',
  output: 'static',
  outDir: './dist',

  build: {
    assets: 'astro',
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
