/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-green": "#07c051",
        "secondary-green": "#06421e",
        accent: "#9381ff",
        "text-color": "#2b2727",
        white: "#FFFFFF",
        "light-gray": "#f1f5f9",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
