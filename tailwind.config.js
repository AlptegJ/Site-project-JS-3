/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner3: "url('/src/assets/banner3.png)",
      },
      colors: {
        red: {
          950: "#DD0623",
        },
      },
    },
  },
  plugins: [],
};
