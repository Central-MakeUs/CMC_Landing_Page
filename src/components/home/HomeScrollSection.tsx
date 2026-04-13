import { motion } from 'motion/react'
import Image from 'next/image'

import { useHomeScrollAnimation } from '@/hooks/home/useHomeScrollAnimation'
import { SCROLL_SECTION_DATA } from '@/constants/home/scrollSection'

const STAR_SIZE = 100

export default function HomeScrollSection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { sectionRef, lineHeight, starY, weCMCY, visibility } = useHomeScrollAnimation(scrollContainerRef)
  const { star, title, text1, text2 } = SCROLL_SECTION_DATA

  return (
    <section ref={sectionRef} className="h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 수직선: 연속 보간 */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-white"
          style={{ height: lineHeight }}
        />

        {/* 별: y 연속 보간 / opacity CSS */}
        <motion.div
          className={`absolute top-0 left-1/2 -translate-x-1/2 z-999 transition-opacity duration-500 ${visibility.star ? 'opacity-100' : 'opacity-0'}`}
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

        {/* We are CMC: y 연속 보간 / opacity CSS (0.10 ~ 0.38) */}
        <motion.p
          className={`absolute top-0 left-1/2 md:text-[48px] text-[24px] font-bold leading-[64px] tracking-[-0.48px] md:tracking-[-1.6px] -translate-x-1/2 text-white whitespace-nowrap transition-opacity duration-500 ${visibility.weCMC ? 'opacity-100' : 'opacity-0'}`}
          style={{ y: weCMCY }}
        >
          {title}
        </motion.p>

        {/* ── 그룹 1 (gp1 + text1): 동시 등장·소멸 (0.48 ~ 0.68) ── */}
        <div
          className={`absolute top-2/5 left-[calc(50%)] -translate-y-1/2 md:p-0 pr-5 transition-opacity duration-500 ${visibility.gp1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image loading="eager" src={text1.image} alt={text1.alt} width={520} height={520} />
        </div>

        <p
          className={`absolute top-2/5 right-[calc(50%+20px)] xl:right-[calc(50%+40px)] w-fit -translate-y-1/2 text-white text-right whitespace-nowrap font-pretendard md:text-[40px] text-[16px] font-medium leading-[24px] md:leading-[50px] tracking-[-0.32px] md:tracking-[-1.6px] transition-opacity duration-500 ${visibility.text1 ? 'opacity-100' : 'opacity-0'}`}
        >
          {text1.text}
        </p>

        {/* ── 그룹 2 (gp2 + text2): 동시 등장, 이후 계속 표시 (0.78~) ── */}
        <div
          className={`absolute top-3/5 right-[calc(50%)] -translate-y-1/2 md:p-0 pl-5 transition-opacity duration-500 ${visibility.gp2 ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image loading="eager" src={text2.image} alt={text2.alt} width={520} height={520} />
        </div>

        <p
          className={`absolute top-3/5 left-[calc(50%+20px)] xl:left-[calc(50%+40px)] -translate-y-1/2 text-white text-left whitespace-nowrap font-pretendard md:text-[40px] text-[16px] font-medium leading-[24px] md:leading-[50px] tracking-[-0.32px] md:tracking-[-1.6px] transition-opacity duration-500 ${visibility.text2 ? 'opacity-100' : 'opacity-0'}`}
        >
          {text2.text}
        </p>
      </div>
    </section>
  )
}
