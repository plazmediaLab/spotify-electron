const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto '
      },
      boxShadow: {
        container: '0px 3px 20px 1px rgba(0,0,0,1), 0px 3px 5px 0px rgba(0,0,0,0.35)'
      },
      colors: {
        amber: colors.amber,
        'warm-gray': colors.warmGray,
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
        },
        green: {
          50: '#f2fbf8',
          100: '#e6f7f1',
          200: '#c0ebdd',
          300: '#99dfc8',
          400: '#4dc89e',
          500: '#01b075',
          600: '#019e69',
          700: '#018458',
          800: '#016a46',
          900: '#005639'
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
