/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./**/*.json", "./**/*.js", "./**/*.css"],
  theme: {
    extend: {
      colors: {
        "epik-yellow": "#eaf40a",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        header: ["basic_commercial_n7", "sans-serif"],
        body: ["basic_commercial_n4", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
