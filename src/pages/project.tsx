import { graphql } from 'gatsby'

export const query = graphql`
  query Project {
    allAppJson {
      nodes {
        link {
          android
          ios
        }
        id
        description
        year
        name
        logo {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export { default } from '../views/project'
export { Head } from '../views/project'
