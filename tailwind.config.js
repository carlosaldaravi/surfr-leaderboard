/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01BCD7",
        secondary: "#54595F",
        text: "#7A7A7A",
      },
      gridTemplateColumns: {
        leaderboard: "38px 1fr 80px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
