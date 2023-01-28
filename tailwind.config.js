/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      linearGradient:{
        'linear1':'linear-gradient(to right,rgb(0, 0, 0) 0%,rgb(35, 34, 34) 50%, rgb(180, 178, 178) 50%,rgb(180, 178, 178)  100%)',
      },
    },
  },
  plugins: [],
}