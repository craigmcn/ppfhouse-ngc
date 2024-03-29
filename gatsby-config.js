const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PPF House',
    description:
      'PPF House: news and events, animation, art and design, comics, music.',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'static', 'img'),
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
        name: 'pages',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: path.join(__dirname, 'src', 'img'),, 'src', '
    //     name: 'images',
    //   },
    // },
    {
      resolve: `gatsby-plugin-redirect-to`,
      options: {
        redirectInBrowser: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: path.join(__dirname, 'src', 'cms', 'cms.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.scss'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
