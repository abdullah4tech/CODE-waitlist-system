/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins"
      },
      backgroundColor: {
        "darkmode": "#23233a",
        "darkmode_secondary": "#2a2a42"
      }
    },
  },
  plugins: [],
}

