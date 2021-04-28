module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJF5C_TSdCPxMRcsQmuiXuKt0"],
        apiKey: "",
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
          "", // Google Analytics / GA
         ],
      },
    },
  ],
}
