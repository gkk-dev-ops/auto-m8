/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FB923C",
        'base-dark': "#424242",
        'base-light': {
          100: "#EEEEEE",
          200: "#D9D9D9",
        }
      }
    },
  },
  plugins: [],
}

