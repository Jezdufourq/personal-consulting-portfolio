const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Jeremiah Dufourq`,
    description: `Personal portfolio consulting website for Jeremiah Dufourq`,
    author: `@jezdufourq`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -50,
        duration: 1000,
      },
    },
  ],
};
