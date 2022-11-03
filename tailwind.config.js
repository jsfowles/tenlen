/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#f7f7f7",
        green: "#6eb930",
        greenDark: "#008600",
        cyan: "#37d6e1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
