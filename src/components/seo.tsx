import { graphql, useStaticQuery } from 'gatsby'
import type { PropsWithChildren } from 'react'

type SeoProps = {
  title?: string
  description?: string
  heroImage?: string
  pathname: string
}

type SeoQuery = {
  file: {
    publicURL: string
  }
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

export const Seo = ({ title, description, heroImage, pathname, children }: PropsWithChildren<SeoProps>) => {
  const data = useStaticQuery<SeoQuery>(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      file(relativePath: { eq: "OGImage.png" }) {
        publicURL
      }
    }
  `)

  const { title: defaultTitle, description: defaultDescription, siteUrl } = data.site.siteMetadata
  //   TODO: 이미지 넣고 주석 제거
  //   const { publicURL: defaultImage } = data.file

  const isHome = pathname === '/'

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${isHome ? '' : pathname}`,
    // TODO: 이미지 넣기!
    // image: `${siteUrl}${heroImage || defaultImage}`,
    image: `${siteUrl}${heroImage}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      {/* <meta property="og:image" content={seo.image} /> */}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta property="twitter:image" content={seo.image} /> */}
      {children}
    </>
  )
}
