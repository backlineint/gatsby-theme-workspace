module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://brian-perry-interactive.lndo.site:8000/`,
      },
    },
  ],
}