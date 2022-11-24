/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      main_bg: "#fff",
      primary_bg: "#66717F",
      secondary_bg: "#28353E",
      primary_color: "#1FA0EF",
      secondary_color: "#848F95",
      title_color: "#66717F",
      black: "#29313D",
      white: "#fff",
      green: "#21D997",
      blue: "#5093F3",
      red: "#E54953",
      yellow: "#D9A94A",
      "purple-100": "#f3e8ff",
      "pink-100": "#fce7f3",
      "cyan-100": "#cffafe",
    },
    fontFamily: {
      primary: ["Hind Siliguri", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "320px",

        sm: "576px",

        md: "768px",

        lg: "992px",

        xl: "1200px",

        "2xl": "1400px",

        "3xl": "1620px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
