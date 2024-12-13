/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#000000',
        secondary: "#191C1F",
        third: "#303639",
        light_yellow: '#F0CC0E',
        btn_normal: '#4F4F4F42',
        btn_hover: '#C1C1C142',
        dialog: '#555555',
        slider_normal: '#C1C1C1',
        slider_active: '#F0CC0E',
        profile_nav: '#18181C'
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#77878F",
        third: "#EBC80C",
        fourth: '#C9C9C9',
        lightred: '#FF7070',
        lightgreen: '#8DFFA6',
        btn_reset: '#C1C1C1',
        btn_latest:'#F0CC0E',
      },
      borderColor: {
        primary: '#303639',
        secondary: '#FCFF62',
        third: '#818181',
        profile_nav: '#18181C'
      }
    },
  },
  plugins: [],
};
