// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [
    require("@tailwindcss/forms"),
    require('@neojp/tailwindcss-line-clamp-utilities')
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
  },
  variants: {
    extend: {
      translate: ["motion-reduce"],
    },
    lineClamp: ['responsive']
  },
};
