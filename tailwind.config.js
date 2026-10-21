/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}",],
  theme: {
    extend: {
      colors: {
        background: '#17191E',
        surface: '#20232A',
        elevated: '#252A33',
        primary: '#F3F4F6',
        secondary: '#9CA3AF',
        muted: '#858D9A',
        border: '#343840',
        accent: '#6B91D8',
        success: '#43B581',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      screens: {
        'max-mdLap': { 'max': '996px' },
        'max-tab': { 'max': '778px' },
        'max-mdPhone': { 'max': '550px' },
        'max-phone': { 'max': '426px' },
      }
    },
  },
  plugins: [],
}
