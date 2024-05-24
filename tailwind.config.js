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
        lg: '930px',
      },
    },
  },
  plugins: [],
};
