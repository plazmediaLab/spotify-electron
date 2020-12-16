const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        container: '0px 3px 20px 1px rgba(0,0,0,1), 0px 3px 5px 0px rgba(0,0,0,0.35)'
      },
      colors: {
        amber: colors.amber,
        'background-dark': '#16171B',
        background: '#202125',
        'background-middlelight': '#2E2F32',
        'background-light': '#494A4E',
        primary: '#fff',
        secondary: '#F3F3F9',
        'secondary-dark': '#93939B',
        brand: {
          50: '#f8f2ff',
          100: '#f1e6fe',
          200: '#dbbffd',
          300: '#c699fc',
          400: '#9b4dfa',
          500: '#7000f8',
          600: '#6500df',
          700: '#5400ba',
          800: '#430095',
          900: '#37007a'
        }
      },
      padding: {
        small: '0.125rem'
      },
      margin: {
        small: '0.125rem'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active']
    }
  },
  plugins: []
};
