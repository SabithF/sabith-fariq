/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montaga: ["Montaga", "sans-serif"],
        monteCarlo: ["MonteCarlo", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
       "textGray": "#a9a9bd", 
       "textWhite": "#f6f7ff",
       "liveButton": "#B5FF6D" 

      }
    },
  },
  plugins: [],
}

