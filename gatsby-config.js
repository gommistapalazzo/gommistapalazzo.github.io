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
  ],
}
