/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        primary:'#163C67',
        secondary : '#64748b',
        dark:'#0f172a',
    },
    screens: {
      '2xl': '1320px',
    },
  },
},
  plugins: [],
}
