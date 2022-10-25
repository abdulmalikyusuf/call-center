/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
        RobotoMono: ['Roboto Mono', 'monospace'],
        RobotoSlab: ['Roboto Slab', 'serif'],
        SourceSansPro: ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
