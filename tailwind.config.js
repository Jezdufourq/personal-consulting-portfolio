// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [
    require("@tailwindcss/forms")
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    textColor: {
      'primary': '#00f0ff'
    },
    borderColor: {
      'primary': '#00f0ff'
    },
    backgroundColour: {
      'primary': '#00f0ff'
    },
    outline: {
      primary: ['2px solid #00f0ff']
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      lightBlue: colors.lightBlue,
    },
    fontFamily: {
      title: ['Alfa Slab One']
    }
  },
};
