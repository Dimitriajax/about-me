/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    color: {
      'white': '#FFFFFF',
      'gray-light': '#F6F6F6',
      'gray-dark': '#707070',
      'black': '#424242',
      'green-light': '#47E696',
      'purple-light': '#F7F5FF',
      'purple-dark': '#F1ECFF'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
  ],
}
