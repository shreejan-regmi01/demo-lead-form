/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8d33e1',
        lightpurple: '#f5f4fc',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
