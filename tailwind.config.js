/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      }
    },
  },
  plugins: [],
}

