module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-dark': '#16171B',
        background: '#202125',
        'background-light': '#494A4E',
        primary: '#fff',
        secondary: '#F3F3F9',
        'brand-primary': '#7000f8'
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
