const siteMetadata = {
  title: "The localhost blog",
  description: "This is my coding blog",
  image: '/default-site-image.jpg',
  siteUrl: 'https://diogolessa.com',
  siteLanguage: 'en-GB',
  siteLocale: 'en_gb',
  twitterUsername: '@ant1_pattern',
  authorName: 'Diogo Lessa'
}

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 540,
          },
        },
      ],
      plugin: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 540,
          },
        },
      ],
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
  ],
};
