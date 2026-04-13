import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

import { ArrowIcon } from '@/components/common'
import { PROJECTS, type ProjectEntry } from '@/constants/project'
import { useInViewOnce } from '@/hooks/useInViewOnce'

// ─── 상수 ────────────────────────────────────────────────────────────────────
const BASE_CARD_WIDTH = 448
const BASE_CARD_STEP = 224 // 중앙간 거리 (overlap 효과)
const CARD_GAP_XL = 16 // xl 5장 레이아웃 간격
const CARDS_XL = 5
const CARD_Y_STEP = 32 // offset 1당 Y 이동 (pyramid 효과)
const MAX_VISIBLE_OFFSET = 2
const CAROUSEL_INTERVAL = 3000
const TRANSITION_MS = 500

// ─── 유틸 ────────────────────────────────────────────────────────────────────
// offset을 [-N/2, N/2] 범위로 정규화 (shortest-path 루프)
function normalizeOffset(raw: number, total: number): number {
  const mod = ((raw % total) + total) % total
  return mod > total / 2 ? mod - total : mod
}

// ─── ProductCard ─────────────────────────────────────────────────────────────
interface ProductCardProps {
  card: ProjectEntry
  isActive: boolean
}

function ProductCard({ card, isActive }: ProductCardProps) {
  return (
    <div
      className="flex flex-col gap-6 w-full max-w-[448px] overflow-hidden rounded-[40px] border border-white/80 p-8 h-[548px]"
      style={{
        background: 'linear-gradient(to bottom, #0d0f14 3.846%, rgba(49, 80, 224, 0.3) 48.077%, #0d0f14 100%)',
        boxShadow: 'inset 0px 4px 8px 0px rgba(255, 255, 255, 0.25)',
        cursor: isActive ? 'default' : 'pointer',
      }}
    >
      <div className="relative w-full overflow-hidden rounded-[30px] aspect-square bg-gray-800">
        {card.logo && <Image src={card.logo} alt={card.name} fill className="object-cover" />}
      </div>
      <div className="flex flex-col gap-4 xl:gap-2">
        <p className="text-[28px] font-bold leading-[1.2] text-white">{card.name}</p>
        <p className="line-clamp-2 text-[18px] leading-[1.4] text-white/70">{card.description}</p>
      </div>
    </div>
  )
}

// ─── HomeProductSection ───────────────────────────────────────────────────────
export default function HomeProductSection() {
  const total = PROJECTS.length

  // 캐러셀 상태: 단조 증가하는 정수 → 모듈러 연산으로 루프 처리
  const [position, setPosition] = useState(0)

  // 반응형 카드 크기
  const [cardWidth, setCardWidth] = useState(BASE_CARD_WIDTH)
  const [cardStep, setCardStep] = useState(BASE_CARD_STEP)

  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)

  const { ref: titleRef, inView: titleInView } = useInViewOnce<HTMLDivElement>(0.3)
  const { ref: lineRef, inView: lineInView } = useInViewOnce<HTMLDivElement>(0)
  const { ref: buttonRef, inView: buttonInView } = useInViewOnce<HTMLDivElement>(0)

  // ── 반응형 레이아웃 계산 ──────────────────────────────────────────────────
  useEffect(() => {
    const updateLayout = () => {
      const w = carouselRef.current?.offsetWidth
      if (!w) return

      if (w >= 1280) {
        // xl: 5장 균등 배치
        const cw = Math.floor((w - (CARDS_XL - 1) * CARD_GAP_XL) / CARDS_XL)
        setCardWidth(cw)
        setCardStep(cw + CARD_GAP_XL)
      } else if (w >= 768) {
        // desktop: 3장 overlap 효과
        setCardWidth(BASE_CARD_WIDTH)
        setCardStep(BASE_CARD_STEP)
      } else {
        // mobile: 1장 full-width 슬라이드
        const cw = w - 40 // 좌우 20px 여백
        setCardWidth(cw)
        setCardStep(w) // step = 컨테이너 폭 → 옆 카드 완전히 숨김
      }
    }

    updateLayout()
    const ro = new ResizeObserver(updateLayout)
    if (carouselRef.current) ro.observe(carouselRef.current)
    return () => ro.disconnect()
  }, [])

  // ── 자동 재생 ────────────────────────────────────────────────────────────
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setPosition((p) => p + 1), CAROUSEL_INTERVAL)
  }, [])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoplay])

  // ── 이동 ─────────────────────────────────────────────────────────────────
  const navigate = useCallback(
    (delta: number) => {
      setPosition((p) => p + delta)
      startAutoplay() // 인터랙션 시 타이머 리셋
    },
    [startAutoplay],
  )

  const handleCardClick = (i: number) => {
    const offset = normalizeOffset(i - position, total)
    if (offset === 0) return // 이미 활성 카드
    navigate(offset)
  }

  // ── 터치 스와이프 ─────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) navigate(dx > 0 ? -1 : 1)
  }

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute -bottom-30 md:-bottom-1/11 left-1/2 h-[900px] w-[calc(100vw*1.5)] md:w-[1475px] -translate-x-1/2">
        <Image
          className="h-full w-full"
          src="/images/home-product-bg.svg"
          alt="home product section orb"
          width={1475}
          height={900}
        />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-[linear-gradient(to_right,#0d0f14_0%,transparent_100%)]" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-[linear-gradient(to_left,#0d0f14_0%,transparent_100%)]" />
      </div>

      {/* 타이틀 */}
      <div
        ref={titleRef}
        className={`relative z-10 flex flex-col items-center pt-[160px] ${titleInView ? '[animation:fade-in-up_0.7s_ease-out_both]' : 'opacity-0'}`}
      >
        <h2 className="whitespace-nowrap text-center md:text-[48px] text-[24px] font-semibold md:leading-normal leading-[36px] tracking-[-0.48px] md:tracking-[-0.96px] text-white">
          {'CMC와 함께한\n프로젝트를 만나보세요'.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br className="block md:hidden" />{' '}
            </span>
          ))}
        </h2>
        <div
          ref={lineRef}
          className={`mt-4 flex flex-col items-center origin-top ${lineInView ? '[animation:grow-down_0.5s_ease-out_0.4s_both]' : 'opacity-0'}`}
        >
          <div className="h-[88px] w-px bg-white" />
          <Image src="/images/home-star.svg" alt="home star" width={50} height={50} className="-mt-6" />
        </div>
      </div>

      {/* 캐러셀 */}
      <div
        ref={carouselRef}
        className="relative z-10 mt-10 h-[600px] xl:h-[640px] w-full max-w-6xl mx-auto overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {PROJECTS.map((card, i) => {
          const offset = normalizeOffset(i - position, total)
          const absOffset = Math.abs(offset)
          const isVisible = absOffset <= MAX_VISIBLE_OFFSET + 0.5
          const isActive = offset === 0

          return (
            <div
              key={card.name}
              className="absolute top-0 h-full"
              style={{
                width: cardWidth,
                left: '50%',
                marginLeft: -(cardWidth / 2),
                // GPU 합성 레이어에서 처리 (transform + opacity)
                transform: `translateX(${offset * cardStep}px) translateY(${absOffset * CARD_Y_STEP}px)`,
                opacity: isVisible ? Math.max(0, 1 - absOffset * 0.3) : 0,
                zIndex: Math.max(0, 10 - Math.round(absOffset)),
                transition: `transform ${TRANSITION_MS}ms ease-in-out, opacity ${TRANSITION_MS}ms ease-in-out`,
                willChange: 'transform, opacity',
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              onClick={() => handleCardClick(i)}
            >
              <ProductCard card={card} isActive={isActive} />
            </div>
          )
        })}
      </div>

      {/* 하단 버튼 */}
      <div
        ref={buttonRef}
        className={`relative z-10 mt-10 flex justify-center md:pb-[80px] pb-[40px] ${buttonInView ? '[animation:fade-in-up_0.6s_ease-out_0.9s_both]' : 'opacity-0'}`}
      >
        <a
          href="/project"
          className="inline-flex items-center gap-5 rounded-full bg-gray-900 px-8 py-[11px] text-[16px] font-semibold leading-6 tracking-[-0.32px] text-white"
        >
          프로젝트 전체보기
          <ArrowIcon size={24} color="white" />
        </a>
      </div>
    </section>
  )
}
