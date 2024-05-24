/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: '#dcdcdc',
      },
      screens: {
        mob: '460px',
        mid: '880px',
      },
    },
  },
  plugins: [],
};
