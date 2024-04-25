import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: '/CMC_Landing_Page',
  siteMetadata: {
    title: 'CMC',
    description: '우리만의 룰을 세워 세상을 바꾸는 조직, CMC',
    siteUrl: 'https://cmc.makeus.in/',
    OGImage: './src/images/OGImage.png',
  },
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  trailingSlash: 'never',
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cmc.makeus.in/',
        sitemap: 'https://cmc.makeus.in/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
          options: {
            props: {
              className: 'my-class',
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logo-images',
        path: './src/data/logo',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'G-N6KW5CY5YH',
        head: false,
        anonymize: true,
      },
    },
  ],
}

export default config
