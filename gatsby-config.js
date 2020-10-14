module.exports = {
  siteMetadata: {
    title: "The localhost blog",
    description: "This is my coding blog",
  },
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
