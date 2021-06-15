module.exports = {
  mode: "jit",
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1170px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#333333'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
