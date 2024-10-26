import clsx from 'clsx'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useEffect, useRef } from 'react'

import * as css from './carousel-slider.module.scss'

interface Props {
  logos: IGatsbyImageData[]
  width?: number | string
  reverse?: boolean
}

/**
 * 로고들을 캐러셀 형식으로 표시하는 CarouselSlider 컴포넌트입니다. 자동 무한루프 방식으로 동작하며 필요에 따라 방향을 반대로 할 수 있습니다.
 *
 * @component
 * @param {IGatsbyImageData[]} logos 로고 이미지 배열
 * @param {number | string} width 캐러샐의 각 아이템의 너비 (기본값: 10%)
 * @param {boolean} reverse true인 경우 캐러샐은 반대 방향으로 슬라이드됩니다. (기본값: false)
 *
 * @example
 * <Carousel logos={imageArr} /> // 순방향
 * <Carousel logos={imageArr} reverse /> // 역방향
 */
export const CarouselSlider = ({ logos, width = '8%', reverse = false }: Props) => {
  const extendSlideItems = [...logos, ...logos.slice(0, 4)] // 끊김 없는 루프 효과를 위해 시야에 보이는 개수인 4개의 항목을 끝에 추가합니다.
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      // 로고 데이터의 길이와 지정된 너비에 따라 동적으로 캐러셀 스타일을 조정합니다.
      carouselRef.current.style.setProperty('--slide-item-length', `${logos.length}`)
      carouselRef.current.style.setProperty('--slide-item-width', `${width}`)
    }
  }, [logos.length, width])

  return (
    <div ref={carouselRef} className={clsx(css.carousel_container, { [css.carousel_container__reverse]: reverse })}>
      {extendSlideItems.map((logo, idx) => (
        <GatsbyImage
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={css.carousel_item}
          image={logo}
          alt="프로덕트 로고 이미지"
          objectPosition="50% top"
          loading="eager"
        />
      ))}
    </div>
  )
}
