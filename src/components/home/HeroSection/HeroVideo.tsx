'use client'

import { useEffect, useRef } from 'react'

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

/** 영상이 재생되지 않는 환경(모바일, 로딩 지연·실패)에서 콘텐츠를 보여주기까지 기다리는 시간 */
const NO_PLAYBACK_REVEAL_DELAY = 2000

type HeroVideoProps = Readonly<{
  /** 영상이 끝났거나, 재생할 수 없다고 판단됐을 때 호출된다. 여러 번 호출될 수 있다. */
  onPlaybackComplete: () => void
}>

/**
 * Hero 배경 영상. 한 번만 재생하고 마지막 프레임에서 멈춘다.
 * - 재생이 시작되면 영상이 끝날 때(ended) 콘텐츠를 보여준다.
 * - 재생이 시작되지 않으면 NO_PLAYBACK_REVEAL_DELAY 뒤에 보여준다.
 * - 모바일(768px 미만)은 맞는 source가 없어 영상을 받지 않고 뒤의 HeroPoster만 보인다.
 * - poster 속성을 쓰지 않는다. 첫 프레임 전까지 투명해서 뒤에 깔린 HeroPoster가 보인다.
 * - 화면 밖에 있으면 멈추고, '동작 줄이기' 설정이면 재생하지 않는다.
 */
export default function HeroVideo({ onPlaybackComplete }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (shouldReduceMotion) {
      video.pause()
      onPlaybackComplete()
      return
    }

    // JS가 늦게 붙어 ended 이벤트를 놓친 경우
    if (video.ended) {
      onPlaybackComplete()
      return
    }

    // 재생이 시작되면 대기 타이머를 취소하고 ended를 기다린다.
    const fallbackTimer = window.setTimeout(onPlaybackComplete, NO_PLAYBACK_REVEAL_DELAY)
    const cancelFallback = () => window.clearTimeout(fallbackTimer)
    video.addEventListener('playing', cancelFallback)
    // autoPlay로 하이드레이션 전에 이미 재생 중인 경우
    if (!video.paused) cancelFallback()

    // 화면 밖이면 멈춘다. 이미 끝난 영상은 다시 재생하지 않는다(play()는 끝난 영상을 처음부터 재생한다).
    const observer = new IntersectionObserver(([entry]) => {
      if (video.ended) return

      if (entry.isIntersecting) {
        void video.play().catch(() => onPlaybackComplete())
      } else {
        video.pause()
      }
    })
    observer.observe(video)

    return () => {
      cancelFallback()
      video.removeEventListener('playing', cancelFallback)
      observer.disconnect()
    }
  }, [onPlaybackComplete, shouldReduceMotion])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      onEnded={onPlaybackComplete}
      // 재생 도중 발생한 오류
      onError={onPlaybackComplete}
    >
      {/* 파일을 불러오지 못한 오류(404 등)는 <video>가 아니라 <source>에서 발생한다. */}
      <source
        media="(min-width: 768px)"
        src="/videos/landing-video.mp4"
        type="video/mp4"
        onError={onPlaybackComplete}
      />
    </video>
  )
}
