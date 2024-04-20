import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Section } from '@/components'
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
  const renderImages = (items: AppData[]) =>
    items.map((app, index) => (
      <GatsbyImage
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        image={getRefinedImage(app.logo?.childImageSharp?.gatsbyImageData)}
        alt=""
        className={css.carouselItem}
        objectPosition="50% top"
      />
    ))

  const middleIndex = Math.floor(apps.length / 2)
  const firstSlideItems = [...apps.slice(0, middleIndex), ...apps.slice(0, 4)]
  const secondSlideItems = [...apps.slice(middleIndex), ...apps.slice(middleIndex, middleIndex + 4)]

  return (
    <Section>
      <Section.Head title={`CMC에서 제작한\n프로덕트를 만나보세요`} />
      <div className={css.carouselContainer}>
        <div className={css.carouselSlide}>{renderImages(firstSlideItems)}</div>
        <div className={css.carouselSlide2}>{renderImages(secondSlideItems)}</div>
      </div>

      <Link to="/project" className={css.moreButton}>
        더 많은 프로덕트 보러가기 →
      </Link>
    </Section>
  )
}
