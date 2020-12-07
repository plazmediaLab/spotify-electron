module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-dark': '#181719',
        background: '#27242C',
        'background-light': '#3D3A41',
        primary: '#fff',
        secondary: '#F3F3F9'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
