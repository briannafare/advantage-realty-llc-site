import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sienna: { 50: '#FDF5EF', 100: '#FAE8D8', 200: '#F4CCB0', DEFAULT: '#C2571A', 600: '#A34815', 700: '#7D3710' },
        forest: { 50: '#F0F7F3', 100: '#D4E9DC', 200: '#A8D3B9', DEFAULT: '#3B7A57', 600: '#2F6247', 700: '#244A35' },
        warm: { 50: '#FFFCF9', 100: '#F5F0EA', 200: '#EBE4DA', 300: '#E5DDD4', 800: '#2A2520' },
        fg: '#2A2520',
        muted: '#8A7F76',
        border: '#E5DDD4',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1220px' },
    },
  },
  plugins: [],
};
export default config;
