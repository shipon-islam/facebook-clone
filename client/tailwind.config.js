module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        recursive: ["Jua", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        round: ["Crete Round", "serif"],
        fenix: ["Fenix", "serif"],

        cintel: ["Cinzel", "serif"],
      },
      keyframes: {
        wave: {
          "0%": { width: "0%" },

          "50%": { width: "100%" },

          "100%": { width: "0%" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
