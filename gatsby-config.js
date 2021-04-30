module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJF5C_TSdCPxMRcsQmuiXuKt0"],
        apiKey: process.env.GATSBY_GOOGLE_PLACES,
        language: "it-IT", // optional, defaults to en-US
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_ANALYTICS, // Google Analytics / GA
         ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Icon Site',
        short_name: 'iconsite',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        icon: 'src/imgs/favicon.png',
      },
    }
  ],
}
