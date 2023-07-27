/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32d281",
        secondary: "#313742",
        blueShade: "#d9f2f9",

      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        verticalBounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        verticalBounce: 'verticalBounce 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
