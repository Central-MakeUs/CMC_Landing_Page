import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import { motion } from 'motion/react'
import { ArrowIcon } from '@/components/common'
import { PROJECTS, type ProjectEntry } from '@/constants/project'

const CARD_WIDTH = 448
const CARD_STEP = 224 // center-to-center distance = CARD_WIDTH / 2
const CARD_Y_STEP = 32
const MAX_VISIBLE_OFFSET = 2
const CAROUSEL_INTERVAL = 3000

// slide.progress 기준: 인접 슬라이드 = ±0.5 (= CARD_STEP / CARD_WIDTH)
// 정규화하여 ±1 단위로 변환
const PROGRESS_STEP = CARD_STEP / CARD_WIDTH // 0.5

function applySlideEffects(swiper: SwiperType) {
  swiper.slides.forEach((slideEl) => {
    const slide = slideEl as HTMLElement & { progress: number }
    const absOffset = Math.abs(slide.progress / PROGRESS_STEP)
    const isVisible = absOffset <= MAX_VISIBLE_OFFSET + 0.5

    slide.style.transform = `translateY(${absOffset * CARD_Y_STEP}px)`
    slide.style.opacity = String(isVisible ? Math.max(0, 1 - absOffset * 0.3) : 0)
    slide.style.zIndex = String(Math.max(0, Math.round(10 - absOffset)))
    slide.style.pointerEvents = isVisible && absOffset > 0.1 ? 'auto' : absOffset < 0.1 ? 'none' : 'none'
  })
}

function enableTransitions(swiper: SwiperType) {
  const duration = swiper.params.speed as number
  swiper.slides.forEach((slideEl) => {
    const slide = slideEl as HTMLElement
    slide.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`
  })
}

function disableTransitions(swiper: SwiperType) {
  swiper.slides.forEach((slideEl) => {
    ;(slideEl as HTMLElement).style.transition = 'none'
  })
}

interface ProductCardProps {
  card: ProjectEntry
  isActive: boolean
  onActivate: () => void
}

function ProductCard({ card, isActive, onActivate }: ProductCardProps) {
  return (
    <div
      className="flex flex-col gap-6 w-full overflow-hidden rounded-[40px] border border-white/80 p-8 h-full"
      style={{
        background: 'linear-gradient(to bottom, #0d0f14 3.846%, rgba(49, 80, 224, 0.3) 48.077%, #0d0f14 100%)',
        boxShadow: 'inset 0px 4px 8px 0px rgba(255, 255, 255, 0.25)',
        cursor: isActive ? 'default' : 'pointer',
      }}
      onClick={() => !isActive && onActivate()}
    >
      <div className="relative h-[384px] w-full overflow-hidden rounded-[30px] bg-gray-800">
        {card.logo && <Image src={card.logo} alt={card.name} fill className="object-cover" />}
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[28px] font-bold leading-[1.2] text-white">{card.name}</p>
        <p className="line-clamp-2 text-[18px] leading-[1.4] text-white/70">{card.description}</p>
      </div>
    </div>
  )
}

export default function HomeProductSection() {
  const title = 'CMC와 함께한\n프로젝트를 만나보세요'
  const buttonText = '프로젝트 전체보기'
  const buttonHref = '/project'
  const cards = PROJECTS
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="relative w-full overflow-hidden bg-black pb-20">
      <Image
        className="pointer-events-none absolute -bottom-1/3 md:-bottom-1/11 left-1/2 h-[900px] w-[calc(100vw*1.5)] md:w-[1475px] -translate-x-1/2"
        src="/images/home-product-bg.svg"
        alt="home product section orb"
        width={1475}
        height={900}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center pt-[160px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="whitespace-nowrap text-center md:text-[48px] text-[24px] font-semibold md:leading-normal leading-[36px] tracking-[-0.48px] md:tracking-[-0.96px] text-white">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br className="block md:hidden" />{' '}
            </span>
          ))}
        </h2>

        <motion.div
          className="mt-4 flex flex-col items-center"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
        >
          <div className="h-[88px] w-px bg-white" />
          <Image src="/images/home-star.svg" alt="home star" width={50} height={50} className="-mt-6" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mt-10 h-[640px] w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          centeredSlides
          loop
          speed={500}
          spaceBetween={20}
          breakpoints={{
            768: { spaceBetween: -(CARD_WIDTH - CARD_STEP) },
          }}
          loopAdditionalSlides={2}
          autoplay={{ delay: CAROUSEL_INTERVAL, disableOnInteraction: false }}
          watchSlidesProgress
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            applySlideEffects(swiper)
          }}
          onProgress={applySlideEffects}
          onSlideChangeTransitionStart={enableTransitions}
          onTouchStart={disableTransitions}
          style={{ overflow: 'visible', height: '100%' }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="!w-[calc(100vw-40px)] md:!w-[448px]">
              {({ isActive }) => (
                <ProductCard card={card} isActive={isActive} onActivate={() => swiperRef.current?.slideToLoop(index)} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        className="relative z-10 mt-40 flex justify-center md:pb-[80px] pb-[40px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <a
          href={buttonHref}
          className="inline-flex items-center gap-5 rounded-full bg-gray-900 px-8 py-[11px] text-[16px] font-semibold leading-6 tracking-[-0.32px] text-white"
        >
          {buttonText}
          <ArrowIcon size={24} color="white" />
        </a>
      </motion.div>
    </section>
  )
}
