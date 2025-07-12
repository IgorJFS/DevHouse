 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./**/*.js"],
   theme: {
     extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
      }
     },
   },
   plugins: [],
 }