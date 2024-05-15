import { Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { Br, CarouselSlider, ScrollRevealContainer, Section } from '@/components'
import { getRefinedImage } from '@/utils'

import * as css from './product-section.module.scss'

interface AppData {
  readonly logo: {
    readonly childImageSharp: {
      readonly gatsbyImageData: IGatsbyImageData
    } | null
  } | null
}

interface Props {
  apps: readonly AppData[]
}

export const ProductSection = ({ apps }: Props) => {
  const logos = apps.map((app) => getRefinedImage(app.logo?.childImageSharp?.gatsbyImageData))
  const middleIndex = Math.floor(apps.length / 2)
  const firstRow = logos.slice(0, middleIndex)
  const secondRow = logos.slice(middleIndex)

  return (
    <Section>
      <ScrollRevealContainer className={css.center}>
        <Section.Head
          title={
            <>
              CMC에서 제작한 <Br mobile />
              프로덕트를 만나보세요
            </>
          }
        />
      </ScrollRevealContainer>
      <div className={css.carouselContainer}>
        <CarouselSlider logos={firstRow} />
        <CarouselSlider logos={secondRow} reverse />
      </div>

      <Link to="/project" className={css.moreButton}>
        더 많은 프로덕트 보러가기 →
      </Link>
    </Section>
  )
}
