import { type HeadProps, navigate } from 'gatsby'
import { useEffect, useRef, useState } from 'react'

import { ScrollRevealContainer, Seo } from '@/components'
import { Main } from '@/layouts'

import { CounterSection, SupportsSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)

  useEffect(() => {
    const updateVideoSource = () => {
      const isMobile = window.innerWidth <= 999

      const video = document.createElement('video')
      const canPlayWebM = video.canPlayType('video/webm') !== ''

      const newSrc = isMobile
        ? canPlayWebM
          ? '/img/mobile_18th_main.webm'
          : '/img/mobile_18th_main.mp4'
        : canPlayWebM
        ? '/img/web_18th_main.webm'
        : '/img/web_18th_main.mp4'

      if (newSrc !== videoSrc) {
        setTimeout(() => {
          setVideoSrc(newSrc)
        }, 1000)
        setIsVideoLoaded(false)
      }
    }

    updateVideoSource()

    window.addEventListener('resize', updateVideoSource)

    return () => window.removeEventListener('resize', updateVideoSource)
  }, [videoSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoSrc) return undefined

    const handleVideoLoad = () => {
      setIsVideoLoaded(true)
    }

    if (video.readyState >= 3) {
      setIsVideoLoaded(true)
    }

    video.addEventListener('canplay', handleVideoLoad)
    video.addEventListener('loadeddata', handleVideoLoad)

    return () => {
      video.removeEventListener('canplay', handleVideoLoad)
      video.removeEventListener('loadeddata', handleVideoLoad)
    }
  }, [videoSrc])

  return (
    <Main>
      {/* <IntroSection /> */}
      {/* <ScrollIndicator onClick={scrollToNextSection} /> */}
      {/* <div className={css.backgroundImg} /> */}
      <div className={css.videoContainer}>
        <video
          className={css.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
          key={videoSrc}
        >
          <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
        <button
          onClick={() => navigate('/apply')}
          className={css.applyButton}
          type="button"
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
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
