/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./**/*.json", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        "epik-yellow": "#eaf40a",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
