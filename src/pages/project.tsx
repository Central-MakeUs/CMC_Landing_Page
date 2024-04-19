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
        rank
        logo {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`

export { default } from '../views/project'
export { Head } from '../views/project'
