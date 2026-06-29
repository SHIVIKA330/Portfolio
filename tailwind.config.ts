import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':     '#0A0A0B',
        'bg-surface':  '#111113',
        'bg-elevated': '#1A1A1D',
        'accent':      '#C5A880',
        'text-primary': '#F5F5F7',
        'text-muted':  '#86868B',
        'text-faint':  '#48484A',
        'border':      'rgba(255,255,255,0.06)',
        'border-hover':'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
