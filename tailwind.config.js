/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
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
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [],
};
