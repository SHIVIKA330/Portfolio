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
        'bg-base':     '#E2ECF5',
        'bg-surface':  'rgba(255, 255, 255, 0.45)',
        'bg-elevated': 'rgba(255, 255, 255, 0.65)',
        'accent':      '#4A607A',
        'text-primary': '#1A2938',
        'text-muted':  '#506175',
        'text-faint':  '#7A8C9E',
        'border':      'rgba(255, 255, 255, 0.45)',
        'border-hover':'rgba(255, 255, 255, 0.8)',
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
