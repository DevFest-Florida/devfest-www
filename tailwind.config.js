/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GoogleSans: ["GoogleSans", "sans"],
        sans: ["GoogleSans", ...defaultTheme.fontFamily.sans],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        Blue500: "#4285f4",
        Red500: "#ea4335",
        Yellow500: "#fbbc04",
        Green500: "#34a853",
        Grey200: "#e8eaed",
        Grey900: "#202124",
        LightBlue: "#BBDEFB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
