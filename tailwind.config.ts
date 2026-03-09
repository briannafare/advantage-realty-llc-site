import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E3A5F', light: '#2D5A8E' },
        secondary: '#3B82C4',
        accent: { DEFAULT: '#D4915C', hover: '#C07A45', light: '#F5E6D8' },
        background: '#FAFAF7',
        surface: { DEFAULT: '#FFFFFF', alt: '#F5F2ED' },
        foreground: '#1C1C1C',
        muted: '#5A6577',
        border: '#E5E1DA',
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
};
export default config;
