/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mon': ['"Montserrat"', 'sans-serif',],
        'bai': ['"Bai Jamjuree"', 'sans-serif',],
      },
      colors: {
        mainColor: '#3F60D3',
      }
    },
  },
  plugins: [],
}