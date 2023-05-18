const colors = require('tailwindcss/colors')
const formKitTailwind = require('@formkit/themes/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './formkit.config.js'],
  plugins: [formKitTailwind],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#51a0bd',
          500: '#4e9bb7',
        },
        dark: {
          primary: '#191A23',
          secondary: '#1d1e2b',
        },
        secondary: colors.amber[500],
        info: {
          DEFAULT: '#7EBCD0',
          light: '#D2E8EE',
        },
        success: {
          DEFAULT: '#66a542',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#E37466',
          light: '#F7D9D5',
        },
      },
    },
  },
  darkMode: 'class',
}
