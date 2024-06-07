/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Utara: ['Utara', 'sans-serif'], // Define your custom font family
      },
    },
  },
  plugins: [],
}