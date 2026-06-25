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
        'bg-base':     '#09090F',
        'bg-surface':  '#111118',
        'bg-elevated': '#1A1A28',
        'violet':      { 400:'#9B8FFF', 500:'#7C6FFF', 600:'#6358E8' },
        'mint':        { 400:'#00D9A5', 500:'#00B88C' },
        'text-primary': '#F0EFF8',
        'text-muted':  '#6B6B88',
        'border':      'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C6FFF 0%, #00D9A5 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
