import type { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'

import { ScrollRevealContainer, Seo } from '@/components'
import { Main } from '@/layouts'

import { CounterSection, IntroSection, ScrollIndicator, SupportsSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null)
  const [videoSrc, setVideoSrc] = useState<string>('')

  const scrollToNextSection = () => {
    if (nextSectionRef && nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  useEffect(() => {
    const updateVideoSource = () => {
      const isMobile = window.innerWidth <= 999

      const video = document.createElement('video')
      const canPlayWebM = video.canPlayType('video/webm') !== ''

      if (isMobile) {
        setVideoSrc(canPlayWebM ? '/img/mobile_18th_main.webm' : '/img/mobile_18th_main.mp4')
      } else {
        setVideoSrc(canPlayWebM ? '/img/web_18th_main.webm' : '/img/web_18th_main.mp4')
      }
    }

    updateVideoSource()

    window.addEventListener('resize', updateVideoSource)

    return () => window.removeEventListener('resize', updateVideoSource)
  }, [])

  return (
    <Main>
      {/* <IntroSection /> */}
      {/* <ScrollIndicator onClick={scrollToNextSection} /> */}
      {/* <div className={css.backgroundImg} /> */}
      <div className={css.videoContainer}>
        <video className={css.backgroundVideo} autoPlay muted loop playsInline key={videoSrc}>
          <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
        <button className={css.applyButton} type="button">
          18기 지원하기
        </button>
      </div>
      <div className={css.gradient_background}>
        <ScrollRevealContainer>
          <CounterSection ref={nextSectionRef} />
        </ScrollRevealContainer>

        <ScrollRevealContainer>
          <SupportsSection />
        </ScrollRevealContainer>
        <div className={css.space} />
      </div>
    </Main>
  )
}

export default HomePage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
