module.exports = {
  mode: 'jit',
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      colors: {
        gray: {
          900: '#171838'
        },
        teal: {
          500: '#3AA39F'
        },
        rose: {
          500: '#cba5a5',
          600: '#c5a0a0'
        }
      }
    },
  },
  plugins: [],
}
