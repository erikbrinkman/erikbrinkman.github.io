export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx", "./utils/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        section: ["Jaapokki Enhance", "sans-serif"],
        details: ["Josefin Sans", "sans-serif"],
        sans: ["Lato", "san-serif"],
      },
      fontSize: {
        name: "min(6rem, 16vw)",
      },
    },
  },
  plugins: [],
};
