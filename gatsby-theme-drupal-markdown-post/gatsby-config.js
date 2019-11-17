// Can there be a meaningful default for baseURL? An example Drupal site perhaps?
module.exports = ({ baseUrl, basePath = "/" }) => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: baseUrl,
      },
    },
  ],
})