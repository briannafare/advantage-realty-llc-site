import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0C1B2A', light: '#162D45' },
        accent: { DEFAULT: '#C17B4A', hover: '#A8663A', light: '#F5EDE5', dark: '#8B5A35' },
        cream: { DEFAULT: '#FAF7F2', dark: '#F0EBE3' },
        slate: { 750: '#293548' },
        foreground: '#1C1917',
        muted: '#6B7280',
        border: '#E5E1D8',
        surface: { DEFAULT: '#FFFFFF', alt: '#F7F4EE' },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
