// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  publicDir: 'public',
  output: 'static',
  outDir: './dist',

  build: {
    assets: 'astro',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
