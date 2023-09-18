import type { CreateWebpackConfigArgs, GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  })
}
