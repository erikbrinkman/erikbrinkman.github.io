const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./utils/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        section: ["Jaapokki Enhance", "sans-serif"],
        details: ["Josefin Sans", "sans-serif"],
        sans: ["Lato", "san-serif"],
      },
    },
  },
  plugins: [],
};
