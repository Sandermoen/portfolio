module.exports = {
  siteMetadata: {
    title: `Sander Saksenvik Moen`,
    description: `My Portfolio`,
    author: `@sandersmoen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gif`,
        path: `${__dirname}/src/GIFs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          primaryColor: "#feb633",
          accent1: "#423f38",
          accent2: "#eaa62f",
          accent3: "#b37f24",
          background1: "#efedea",
          background2: "#faf9f8",
        },
        dark: {
          primaryColor: "#feb633",
          accent1: "#faf9f8",
          accent2: "#fecb71",
          accent3: "#8e641c",
          background1: "#222831",
          background2: "#232d3a",
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sander Saksenvik Moen`,
        short_name: `Sander`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
