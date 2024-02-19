/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1152",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary: "#FF7757",
        surface: "#FFD2C7",
        secoundary: "#331811",
        secoundarySurface: "#61291C",
        placeholder: "#767E86",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display"],
      rubik: ["Rubik"],
    },
  },
  plugins: [],
};
