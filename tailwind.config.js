/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        customRed: "#DA1A32",
        customGray: "#E0E0E0"
      },
      backgroundImage: {
        bannerBG: "url('/src/assets/banner-bg.png')",
      }
    },
  },
  plugins: [],
}