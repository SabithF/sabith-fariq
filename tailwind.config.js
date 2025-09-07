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
        clashDisplay: ["ClashDisplay", "cursive"],
      },
      colors: {
       "textGray": "#a9a9bd", 
       "textWhite": "#f6f7ff",
       "liveButton": "#B5FF6D",
       "borderGray":"#f3f3f310" 

      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shine: 'shine 3s linear infinite',
      },
       keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
          shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        },
      },

    },
  },
  plugins: [],
}

