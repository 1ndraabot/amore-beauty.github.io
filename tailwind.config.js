/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Poppins" : ['Poppins']
      },

      colors : {
        "putih" : '#ffffff',
        "pink-base" : '#FE2171',
        "pink-bg" : '#FF7CAF',
      }
    },
  },
  plugins: [],
}