import { graphql } from 'gatsby'

export const query = graphql`
  query ProjectImg {
    allAppJson {
      nodes {
        logo {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`

export { default } from '../views/about'
export { Head } from '../views/about'
