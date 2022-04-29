module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      max: '9999',
      auto: 'auto'
    },
    minHeight: {
      0: '0',
      40: '10rem',
      full: '100%',
      screen: '100vh'
    },
    extend: {
      colors: {}
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
