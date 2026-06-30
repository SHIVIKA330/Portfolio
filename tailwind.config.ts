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
        'bg-base':     '#F7F4D5',
        'bg-surface':  'rgba(255, 255, 255, 0.55)',
        'bg-elevated': 'rgba(255, 255, 255, 0.85)',
        'accent':      '#D3968C',
        'text-primary': '#0A3323',
        'text-muted':  '#105666',
        'text-faint':  '#839958',
        'border':      'rgba(10, 51, 35, 0.1)',
        'border-hover':'rgba(10, 51, 35, 0.2)',
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
