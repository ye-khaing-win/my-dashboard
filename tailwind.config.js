/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        aside: '20rem',
        'aside-collapse': '6.225em',
      },
    },
  },
  plugins: [],
};
