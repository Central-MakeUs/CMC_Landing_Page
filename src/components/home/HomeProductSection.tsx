import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowIcon } from '@/components/common'
import { PRODUCT_SECTION_DATA, type ProductCardData } from '@/constants/home/productSection'

const CARD_WIDTH = 448
const CARD_HALF_WIDTH = 224
const CARD_STEP = 224
const CARD_Y_STEP = 32
const MAX_VISIBLE_OFFSET = 2
const CAROUSEL_INTERVAL = 3000

function getCircularOffset(index: number, activeIndex: number, total: number): number {
  const raw = (((index - activeIndex) % total) + total) % total
  return raw > Math.floor(total / 2) ? raw - total : raw
}

interface ProductCardProps {
  card: ProductCardData
  offset: number
  onClick: () => void
}

function ProductCard({ card, offset, onClick }: ProductCardProps) {
  const absOffset = Math.abs(offset)
  const isCenter = offset === 0
  const isVisible = absOffset <= MAX_VISIBLE_OFFSET

  return (
    <div
      className="absolute top-0 flex flex-col gap-6 overflow-hidden rounded-[40px] border border-white/80 p-8"
      style={{
        left: '50%',
        marginLeft: `-${CARD_HALF_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        zIndex: 10 - absOffset,
        background: 'linear-gradient(to bottom, #0d0f14 3.846%, rgba(49, 80, 224, 0.3) 48.077%, #0d0f14 100%)',
        boxShadow: 'inset 0px 4px 8px 0px rgba(255, 255, 255, 0.25)',
        cursor: isCenter ? 'default' : 'pointer',
        transform: `translateX(${offset * CARD_STEP}px) translateY(${absOffset * CARD_Y_STEP}px)`,
        opacity: isVisible ? 1 - absOffset * 0.3 : 0,
        transition: `transform 0.5s ease-in-out, opacity 0.4s ease-in-out ${absOffset * 0.05}s`,
      }}
      onClick={() => !isCenter && onClick()}
    >
      <div className="relative h-[384px] w-full overflow-hidden rounded-[30px] bg-gray-800">
        {card.image && <Image src={card.image} alt={card.title} fill className="object-cover" />}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[28px] font-bold leading-[1.2] text-white">{card.title}</p>
        <p className="line-clamp-2 text-[18px] leading-[1.4] text-white/70">{card.description}</p>
      </div>
    </div>
  )
}

export default function HomeProductSection() {
  const { title, buttonText, buttonHref, cards } = PRODUCT_SECTION_DATA
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [cards.length])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      <Image
        className="pointer-events-none absolute bottom-0 left-1/2 h-[900px] w-[1475px] -translate-x-1/2"
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
        <h2 className="whitespace-nowrap text-center text-[48px] font-semibold leading-normal tracking-[-0.96px] text-white">
          {title}
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
        {cards.map((card, index) => {
          const offset = getCircularOffset(index, activeIndex, cards.length)
          return (
            <ProductCard
              key={index}
              card={card}
              offset={offset}
              onClick={() => setActiveIndex(index)}
            />
          )
        })}
      </div>

      <motion.div
        className="relative z-10 mt-10 flex justify-center pb-[80px]"
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
