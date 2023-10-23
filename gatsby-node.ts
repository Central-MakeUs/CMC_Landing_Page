import type { CreateSchemaCustomizationArgs, CreateWebpackConfigArgs, GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/images': path.resolve(__dirname, 'src/images'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  })
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      title: String!
      siteUrl: String!
      description: String!
      OGImage: String!
    }

    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }

    type Link {
      android: String!
      ios: String!
    }

    type AppJson implements Node {
      link: Link!
      year: String!
      description: String!
      name: String!
    }
  `)
}
