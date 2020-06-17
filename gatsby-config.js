module.exports = {
  siteMetadata: {
    title: 'ふむひみのサイト',
    author: 'humuhimi',
    description: 'ふむひみが日々の生活をアウトプットするサイト',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'json',
        path: `${__dirname}/json/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'humuhimi-web-site',
        description:"サイバー大学4年生のふむひみが英語・中国語・プログラミング言語を使った生活を垂れ流すサイト",
        short_name: 'ふむひみサイト',
        start_url: '/',
        background_color: '#4db6ac',
        theme_color: '#18ffff',
        display: 'standalone',
        icon: 'src/images/humuhimi.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}