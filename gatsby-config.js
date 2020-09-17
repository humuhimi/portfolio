module.exports = {
  siteMetadata: {
    title: 'ふむひみサイト',
    titleAlt:'ふむひみウェブサイト',
    siteUrl: 'https://humuhimi.com/',
    url:'https://humuhimi.com',
    siteLanguage: 'ja', 
    pathPrefix: '/',
    author: 'humuhimi',
    keyword:'海外移住,日本脱出,サイバー大学,ふむひみ',
    description: 'ふむひみが日々の生活をアウトプットするサイト',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
                siteMetadata {
                  url
                  siteUrl
                }
          }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
        }
      },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://humuhimi.com',
        sitemap: 'https://humuhimi.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }, 
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: 'https://humuhimi.com',
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'json',
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ふむひみウェブサイト',
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
    `gatsby-plugin-i18n`,
  ],
}