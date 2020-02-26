require("dotenv").config();

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `100 Days of Mindful Movement`,
    description: `Signup to join the 100 Days of Mindful Movement!`,
    author: `drew@imaginedelements.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dimensions: false
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100 Days of Mindful Movement`,
        short_name: `Mindful Movement 100`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `Mindful Movement 100`,
        icon: `src/static/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};