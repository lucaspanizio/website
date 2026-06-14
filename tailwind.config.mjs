/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Accent (azul) — destaque principal
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          600: '#2563eb',
          700: '#1d4ed8',
        },

        // Success (emerald) — seção Impacto & Resultados
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          600: '#059669',
          700: '#047857',
        },

        // Ink — hierarquia de texto
        ink: {
          title:  '#0f172a', // slate-900
          strong: '#334155', // slate-700
          body:   '#475569', // slate-600
          muted:  '#64748b', // slate-500
          subtle: '#94a3b8', // slate-400
        },

        // Surface — fundos e superfícies
        surface: {
          DEFAULT: '#ffffff',
          tint:    '#f8fafc', // slate-50
          dim:     '#f1f5f9', // slate-100
          dark:    '#0f172a', // slate-900
          darker:  '#1e293b', // slate-800
        },

        // Edge — bordas e divisores
        edge: {
          faint:   '#f1f5f9', // slate-100
          DEFAULT: '#e2e8f0', // slate-200
          soft:    '#cbd5e1', // slate-300
        },
      },
      fontSize: {
        xxs: 'var(--text-xxs)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
