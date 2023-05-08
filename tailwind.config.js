/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bokemonbar':"url('public/assets/wp8797760.jpg')",
        'bokemon':"url('/public/assets/wallhaven-496qpk.jpg')"
      }
    },
  },
  plugins: [],
}

