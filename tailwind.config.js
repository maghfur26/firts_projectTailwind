/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        dark: '#111827',
      },
      screens: {
        'xl': '1320px'
      }
    },

  },
  plugins: [],
}

