import { getImageProps } from 'next/image'

import desktopPoster from '@/assets/images/hero-poster-desktop.webp'
import mobilePoster from '@/assets/images/hero-poster-mobile.webp'

/**
 * Hero 영상 뒤에 깔리는 첫 프레임 이미지
 * - 영상은 첫 프레임이 준비될 때까지 투명해서, 그동안 이 이미지가 보인다.
 * - 화면별 영상의 첫 프레임이라 영상으로 바뀌는 순간이 보이지 않는다.
 * - <video poster>는 이미지를 하나만 받을 수 있어 <picture>로 화면별 이미지를 고른다.
 * - 페이지의 LCP 후보라 바로 받도록 fetchPriority="high"와 loading="eager"를 준다.
 */
export default function HeroPoster() {
  const common = { alt: '', sizes: '100vw', fetchPriority: 'high', loading: 'eager' } as const
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktopPoster })
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: mobilePoster })

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      <source srcSet={mobileSrcSet} />
      {/* 장식 이미지. alt는 rest에도 있지만 lint가 스프레드 안을 보지 못해 명시한다. */}
      <img {...rest} alt="" className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  )
}
