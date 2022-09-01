/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'main_bg' : "#05141C",
      'primary_bg'  : "#66717F",
      'secondary_bg'  : "#28353E",
      'primary_color' : "#1FA0EF",
      'secondary_color' : "#848F95",
      'title_color' : "#66717F",
      "black" : "##29313D", 
      'white': '#fff',
      'green' : "#21D997",
      'blue'  : "#5093F3",
      'red' : "#D17274",
      'yellow'  : "#D9A94A"
    },
    fontFamily: {
      primary: ['Hind Siliguri', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
