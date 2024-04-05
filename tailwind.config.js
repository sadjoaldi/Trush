/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
        primary1: "#8CE2D0",
        primary2: "#DA291C",
        primary3: "#FAFAFA",
        primary4: "#FFFFFF",
        primary5: "#0A0E0D",
        secondary1: "#EAEAEA",
        secondary2: "#B3B3B3",
        secondary3: "#8E8E8E",
        secondary4: "#00875A",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
