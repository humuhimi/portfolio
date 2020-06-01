module.exports = {
  siteMetadata: {
    title: 'ふむひみのサイト',
    author: 'humuhimi',
    description: 'ふむひみが日々の生活をアウトプットするサイト',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'humuhimi-web-site',
        short_name: 'ふむひみサイト',
        start_url: '/',
        background_color: '#4db6ac',
        theme_color: '#18ffff',
        display: 'minimal-ui',
        icon: 'src/images/humuhimi.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}