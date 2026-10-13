'use client'

import { useEffect, useRef, useState } from 'react'

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/utils/cn'

/** 재생 시작 또는 버퍼링을 기다리는 최대 시간. 재생이 이어지면 타이머를 취소한다. */
const NO_PLAYBACK_REVEAL_DELAY = 2000

type HeroVideoProps = Readonly<{
  /** 영상이 끝났거나, 재생할 수 없다고 판단됐을 때 호출된다. 여러 번 호출될 수 있다. */
  onRevealReady: () => void
}>

/**
 * Hero 배경 영상. 한 번만 재생하고 마지막 프레임에서 멈춘다.
 * - 재생이 시작되면 영상이 끝날 때(ended) 콘텐츠를 보여준다.
 * - 재생이 시작되지 않으면 NO_PLAYBACK_REVEAL_DELAY 뒤에 보여준다.
 * - 재생 도중 버퍼링이 같은 시간 이상 지속되면 콘텐츠를 보여준다.
 * - poster 속성을 쓰지 않는다. 재생 전까지 영상을 숨겨 뒤에 깔린 HeroPoster를 보여준다.
 *   자동재생이 막혔을 때 iOS가 띄우는 재생 버튼도 함께 가려진다.
 * - 화면 밖에 있으면 멈추고, '동작 줄이기' 설정이면 재생하지 않는다.
 */
export default function HeroVideo({ onRevealReady }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = usePrefersReducedMotion()
  // 한 번 재생된 뒤에는 버퍼링이나 일시정지 중에도 숨기지 않는다.
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (shouldReduceMotion) {
      video.pause()
      onRevealReady()
      return
    }

    // JS가 늦게 붙어 종료 또는 오류 이벤트를 놓친 경우
    if (video.ended || video.error) {
      // 끝난 영상은 마지막 프레임을 보여준다.
      if (video.ended) setHasStarted(true)
      onRevealReady()
      return
    }

    let isActive = true
    let fallbackTimer: number | undefined
    const cancelFallback = () => {
      window.clearTimeout(fallbackTimer)
      fallbackTimer = undefined
    }
    const waitForPlayback = () => {
      // 같은 버퍼링 중 이벤트가 반복돼도 대기 시간을 늘리지 않는다.
      fallbackTimer ??= window.setTimeout(() => {
        fallbackTimer = undefined
        onRevealReady()
      }, NO_PLAYBACK_REVEAL_DELAY)
    }
    const handlePlaying = () => {
      cancelFallback()
      setHasStarted(true)
    }
    const handleBuffering = () => {
      // 네트워크가 멈춰도 버퍼가 충분하거나 화면 밖에서 일시정지한 경우에는 연출을 유지한다.
      if (!video.paused && !video.ended && video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
        waitForPlayback()
      }
    }

    waitForPlayback()
    video.addEventListener('playing', handlePlaying)
    video.addEventListener('waiting', handleBuffering)
    video.addEventListener('stalled', handleBuffering)
    video.addEventListener('pause', cancelFallback)
    // autoPlay로 하이드레이션 전에 이미 정상 재생 중인 경우
    if (!video.paused && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      handlePlaying()
    }

    // 화면 밖이면 멈춘다. 이미 끝난 영상은 다시 재생하지 않는다(play()는 끝난 영상을 처음부터 재생한다).
    const observer = new IntersectionObserver(([entry]) => {
      if (video.ended) return

      if (entry.isIntersecting) {
        if (video.paused || video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) waitForPlayback()
        void video.play().catch((error: unknown) => {
          // 화면을 벗어나며 pause()가 play()를 중단한 경우(AbortError)와 정리된 Effect의 응답은 무시한다.
          if (!isActive || (error instanceof DOMException && error.name === 'AbortError')) return
          onRevealReady()
        })
      } else {
        cancelFallback()
        video.pause()
      }
    })
    observer.observe(video)

    return () => {
      isActive = false
      cancelFallback()
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('waiting', handleBuffering)
      video.removeEventListener('stalled', handleBuffering)
      video.removeEventListener('pause', cancelFallback)
      observer.disconnect()
    }
  }, [onRevealReady, shouldReduceMotion])

  return (
    <video
      ref={videoRef}
      className={cn('absolute inset-0 h-full w-full object-cover', !hasStarted && 'opacity-0')}
      autoPlay
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      onEnded={onRevealReady}
      // 재생 도중 발생한 오류
      onError={onRevealReady}
    >
      {/* 파일을 불러오지 못한 오류(404 등)는 <video>가 아니라 <source>에서 발생한다. */}
      <source
        media="(min-width: 768px)"
        src="/videos/landing-video-desktop.mp4"
        type="video/mp4"
        onError={onRevealReady}
      />
      <source src="/videos/landing-video-mobile.mp4" type="video/mp4" onError={onRevealReady} />
    </video>
  )
}
