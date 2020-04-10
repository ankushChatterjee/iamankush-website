module.exports = {
  siteMetadata: {
    title: 'Ankush Chatterjee',
    description: 'Software Developer',
    author: 'Ankush @tweetsByAnkush',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ankush Chatterjee',
        short_name: 'iamankush',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#1e90ff',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
      
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3005,
        production: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
