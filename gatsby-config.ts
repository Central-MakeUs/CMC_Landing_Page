import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: '/CMC_Landing_Page',
  siteMetadata: {
    title: 'CMC',
    description: '우리만의 룰을 세워 세상을 바꾸는 조직, CMC',
    siteUrl: 'https://central.makeus.in',
    OGImage: './src/images/OGImage.png',
  },
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
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
  ],
}

export default config