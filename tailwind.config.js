/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

