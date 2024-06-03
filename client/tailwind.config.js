/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['"Exo 2"', 'sans-serif'], // Add this line
    },
    container: {
      padding: {
        DEFAULT: "15px"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        body: "#1d1f23",
        primary: "#151618",
        accent: {
          DEFAULT: "#f6cd46",
          hover: "#e1b72e",
        },
      },
      backgroundImage: {
        "mainSlider": "url('img/main-slider_bg.png')",
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        }
      },
    },
  },
  plugins: [],
}