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
        'bg-base':     '#F9F9F8',
        'bg-surface':  '#FFFFFF',
        'bg-elevated': '#F1F1F0',
        'accent':      '#8C7E6C',
        'text-primary': '#1D1D1F',
        'text-muted':  '#6E6E73',
        'text-faint':  '#8E8E93',
        'border':      'rgba(0,0,0,0.06)',
        'border-hover':'rgba(0,0,0,0.12)',
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
