/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#e43204",
      },
      fontFamily: {
        footer_font: ["Edu AU VIC WA NT Hand", "cursive"],
        "primary-font": ["Nunito", "sans-serif"],
        "banner-font": ["Edu AU VIC WA NT Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
