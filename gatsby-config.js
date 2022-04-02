require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    defaultTitle: `Ivan Atias`,
    defaultTitleTemplate: `%s · Frontend Developer, UI Designer & Digital Marketer`,
    defaultDescription: `This is Ivan Atias' Personal Portfolio. Frontend Developer, UI Designer and Digital Marketer. Know more about him!`,
    siteUrl: `https://www.ivanatias.dev`,
    defaultKeyWords: [
      `Frontend`,
      `Developer`,
      `UI`,
      `Designer`,
      `Marketing`,
      `ReactJS`,
      `GatsbyJS`,
      `NextJS`,
    ],
    lang: `en`,
    // defaultImage: Put an Image for Ivan Atias Website's  link sharing
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9w8imhap",
        dataset: "production",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ivan Atias Portfolio`,
        short_name: `Ivan Atias`,
        start_url: `/`,
        background_color: `#040510`,
        theme_color: `#040510`,
        display: `standalone`,
        icon: `src/images/Logo.svg`,
      },
    },
  ],
};
