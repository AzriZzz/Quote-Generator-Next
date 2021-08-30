module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vibrantBlue: {
          DEFAULT: '#17a2b8'
        },
        borderBlue: {
          DEFAULT: '#06BDC1'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
