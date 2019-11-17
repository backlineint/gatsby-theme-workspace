module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-drupal-markdown-post",
      options: {
        baseUrl: "http://brian-perry-interactive.lndo.site:8000/",
        basePath: "/posts",
      },
    },
  ],
}