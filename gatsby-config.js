const config = require("./config/index");

module.exports = {
  siteMetadata: {
    title: config.website.siteTitle,
    description: config.website.siteDescription,
    twitter: config.website.twitter,
    siteUrl: config.website.siteUrl,
    siteLogo: config.website.siteLogo,
    siteBanner: config.website.siteBanner,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.website.siteTitleAlt,
        short_name: config.website.siteShortName,
        start_url: `/`,
        background_color: config.website.backgroundColor,
        theme_color: config.website.themeColor,
        display: `standalone`,
        icon: config.website.siteLogo, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    // SOURCE FILE SYSTEM -
    // SOURCE JSON
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/json`,
      },
    },
  ],
};
