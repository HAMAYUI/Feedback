/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    }
  },
  plugins: [],
}
