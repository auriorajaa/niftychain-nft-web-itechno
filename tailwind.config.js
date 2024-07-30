/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/*.{html,js}", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#A374D5',
        'light-sand': '#FFFBBE',
      },
      fontFamily: {
        'englebert': ['Englebert', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')({
    charts: true,
  }), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'),],
}
