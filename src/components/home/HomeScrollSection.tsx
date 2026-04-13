import { motion } from 'motion/react'
import Image from 'next/image'

import { StackedCardList } from '@/components/common'
import { useHomeScrollAnimation } from '@/hooks/home/useHomeScrollAnimation'
import { SCROLL_SECTION_DATA } from '@/constants/home/scrollSection'

const STAR_SIZE = 100

export default function HomeScrollSection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { sectionRef, lineHeight, starY, weCMCY, visibility } = useHomeScrollAnimation(scrollContainerRef)
  const { star, title, text1, text2, cards } = SCROLL_SECTION_DATA

  return (
    <section ref={sectionRef} className="h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-white"
          style={{ height: lineHeight }}
        />

        <motion.div
          className={`absolute top-0 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${visibility.star ? 'opacity-100' : 'opacity-0'}`}
          style={{ y: starY }}
        >
          <Image
            loading="eager"
            src={star.image}
            alt={star.alt}
            width={STAR_SIZE}
            height={STAR_SIZE}
            className="size-[100px]"
          />
        </motion.div>

        <motion.p
          className={`absolute top-0 left-1/2 md:text-[48px] text-[24px] font-bold leading-[64px] tracking-[-0.48px] md:tracking-[-1.6px] -translate-x-1/2 text-white whitespace-nowrap transition-opacity duration-300 ${visibility.weCMC ? 'opacity-100' : 'opacity-0'}`}
          style={{ y: weCMCY }}
        >
          {title}
        </motion.p>

        <div
          className={`absolute top-1/2 left-[calc(50%)] -translate-y-1/2 md:p-0 pr-5 transition-opacity duration-300 ${visibility.gp1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image loading="eager" src={text1.image} alt={text1.alt} width={520} height={520} />
        </div>

        <p
          className={`absolute top-1/2 right-[calc(50%+40px)] -translate-y-1/2 text-white text-right whitespace-nowrap font-pretendard md:text-[40px] text-[16px] font-medium leading-[24px] md:leading-[50px] tracking-[-0.32px] md:tracking-[-1.6px] transition-opacity duration-300 ${visibility.text1 ? 'opacity-100' : 'opacity-0'}`}
        >
          {text1.text}
        </p>

        <div
          className={`absolute top-1/2 right-[calc(50%)] -translate-y-1/2 md:p-0 pl-5 transition-opacity duration-300 ${visibility.gp2 ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image loading="eager" src={text2.image} alt={text2.alt} width={520} height={520} />
        </div>

        <p
          className={`absolute top-1/2 left-[calc(50%+40px)] -translate-y-1/2 text-white text-left whitespace-nowrap font-pretendard md:text-[40px] text-[16px] font-medium leading-[24px] md:leading-[50px] tracking-[-0.32px] md:tracking-[-1.6px] transition-opacity duration-300 ${visibility.text2 ? 'opacity-100' : 'opacity-0'}`}
        >
          {text2.text}
        </p>
      </div>
    </section>
  )
}
