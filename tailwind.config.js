/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raya: "raya, sans-serif",
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
