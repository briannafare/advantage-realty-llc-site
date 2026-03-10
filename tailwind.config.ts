import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sage: { 50: '#F4F8F6', 100: '#E1EDE7', 200: '#C3DBD0', 300: '#8FBDAB', 400: '#5A9A82', DEFAULT: '#3D6B5E', 600: '#2F5349', 700: '#264139', 800: '#1E332D' },
        coral: { 50: '#FEF6F3', 100: '#FDE8E0', 200: '#FACFC1', DEFAULT: '#E8795A', 400: '#D9603D', 500: '#C04A2A' },
        fg: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      borderRadius: { '2xl': '16px', '3xl': '24px', '4xl': '32px' },
    },
  },
  plugins: [],
};
export default config;
