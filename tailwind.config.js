/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      rufina: ["Rufina"],
      poppins: ["Poppins"],
      merriweather: ["Merriweather Sans"],
    },
    extend: {
      animation: {
        wush: "wush 0.3s linear forwards",
        navItem: "navItem 0.3s linear forwards",
        listItemShow: "listItemShow 0.2s linear forwards",
      },
    },
  },
  plugins: [],
};
