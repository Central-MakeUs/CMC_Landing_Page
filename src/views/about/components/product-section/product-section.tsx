import { navigate } from 'gatsby'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'

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

const ArrowImage = () => {
  return (
    <svg
      className={css.arrow_image}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.3828 5.65936C14.8938 5.34807 15.5598 5.50975 15.8711 6.02068C16.2607 6.66011 17.0425 7.72741 18.0742 8.75896C19.1127 9.79713 20.3378 10.732 21.6064 11.2023C21.9981 11.3477 22.2713 11.7051 22.3086 12.1213C22.3162 12.2062 22.3107 12.2901 22.2988 12.3722C22.2989 12.3774 22.2998 12.3826 22.2998 12.3879C22.2998 12.9665 21.8464 13.4365 21.2754 13.467C20.5026 13.9729 19.4959 14.72 18.5332 15.5353C17.3165 16.5658 16.303 17.5949 15.876 18.3078C15.5684 18.8207 14.9028 18.9871 14.3896 18.6799C13.8765 18.3724 13.7093 17.7068 14.0166 17.1935C14.6433 16.1475 15.9048 14.9221 17.1328 13.882C17.2964 13.7434 17.4619 13.606 17.6279 13.4709H2.58301C1.98468 13.4709 1.5 12.9862 1.5 12.3879C1.50009 11.7896 1.98474 11.3049 2.58301 11.3049H17.6523C17.2555 10.9748 16.8835 10.6326 16.542 10.2912C15.3856 9.13504 14.4987 7.93084 14.0215 7.14764C13.7102 6.63673 13.872 5.9707 14.3828 5.65936Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const ProductSection = ({ apps }: Props) => {
  const logos = apps.map((app) => getRefinedImage(app.logo?.childImageSharp?.gatsbyImageData))
  const middleIndex = Math.floor(apps.length / 2)
  const firstRow = logos.slice(0, middleIndex)
  const secondRow = logos.slice(middleIndex)

  return (
    <Section>
      <div className={css.container}>
        <ScrollRevealContainer className={css.center}>
          <Section.Head title={<></>} />
          <h2 className={css.h2}>
            CMC에서 제작한 <Br mobile />
            프로덕트를 만나보세요
          </h2>
        </ScrollRevealContainer>

        <div className={css.carouselContainer}>
          <div className={css.desktopCarousel}>
            <CarouselSlider logos={logos} width="6%" />
          </div>

          <div className={css.mobileCarousel}>
            <CarouselSlider logos={firstRow} width="15%" />
          </div>

          <div className={css.mobileCarousel}>
            <CarouselSlider logos={secondRow} width="15%" reverse />
          </div>
        </div>

        <button type="button" onClick={() => navigate('/project')} className={css.moreButton}>
          <p>더 많은 프로덕트 보러가기</p>
          <ArrowImage />
        </button>
      </div>
    </Section>
  )
}
