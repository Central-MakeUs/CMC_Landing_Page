import { ENTRY_SECTION_DATA } from '@/constants/home/entrySection'
import { APPLY_DATA, isApplyEnded } from '@/constants/apply'
import { motion, useAnimation } from 'motion/react'
import Image from 'next/image'

import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/utils/cn'

type TextControls = {
  entered: boolean
  text1Controls: ReturnType<typeof useAnimation>
  text2Controls: ReturnType<typeof useAnimation>
  text3Controls: ReturnType<typeof useAnimation>
}

// ─── 데스크탑 ─────────────────────────────────────────────────────────────────

function DesktopEntrySection({ entered, text1Controls, text2Controls, text3Controls }: TextControls) {
  const { mainImage, asideImage, symbol_plan, symbol_server, symbol_design, symbol_client, text1, text2, text3 } =
    ENTRY_SECTION_DATA

  return (
    <div className="w-full top-0 relative h-[calc(100dvh-var(--spacing-header))] overflow-hidden mt-header max-w-[1920px] mx-auto">
      <Image
        loading="eager"
        src={mainImage.image}
        alt={mainImage.alt}
        width={1440}
        height={900}
        className="w-full h-auto block bottom-0 absolute z-2"
      />
      <Image
        loading="eager"
        src={asideImage.image}
        alt={asideImage.alt}
        width={400}
        height={900}
        className="w-auto h-[80vw] md:h-40vw block top-0 right-0 absolute z-1"
      />
      <Image
        loading="eager"
        src={symbol_plan.image}
        alt={symbol_plan.alt}
        width={80}
        height={80}
        className="size-[10vw] block bottom-[24vw] right-[30vw] absolute z-2"
      />
      <Image
        loading="eager"
        src={symbol_design.image}
        alt={symbol_design.alt}
        width={80}
        height={80}
        className="size-[12vw] block bottom-[21vw] right-[10vw] absolute z-2"
      />
      <Image
        loading="eager"
        src={symbol_server.image}
        alt={symbol_server.alt}
        width={80}
        height={80}
        className="size-[15vw] block bottom-[5vw] right-[40vw] absolute z-2"
      />
      <Image
        loading="eager"
        src={symbol_client.image}
        alt={symbol_client.alt}
        width={80}
        height={80}
        className="w-[20vw] block bottom-[0.8vw] right-[16vw] absolute z-2"
      />
      <div className="absolute top-header left-0 flex flex-col gap-[clamp(0px, 1vw, 52px)] z-3">
        <motion.div className="ml-[8vw]" initial={entered ? false : { x: '-60px', opacity: 0 }} animate={text1Controls}>
          <Image src={text1.image} className="w-[48vw] max-w-[621px] h-auto" alt={text1.alt} width={600} height={80} />
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={entered ? false : { x: '-60vw', opacity: 0 }}
          animate={text2Controls}
        >
          <Image
            src={text2.image}
            className="w-[52vw] max-w-[906px] h-auto mt-[1.5vw] shadow-xl"
            alt={text2.alt}
            width={695}
            height={80}
          />
        </motion.div>
        <motion.div
          className="flex items-center mt-[2.5vw]"
          initial={entered ? false : { x: '-60px', opacity: 0 }}
          animate={text3Controls}
        >
          <a
            href={APPLY_DATA.getButtonHref(isApplyEnded())}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'relative cursor-pointer group block ',
              !isApplyEnded() ? 'w-[54vw]' : 'w-[43vw] max-w-[644px]',
            )}
          >
            <Image
              src={!isApplyEnded() ? text3.deactivatedImage : text3.image}
              className="w-full h-auto group-hover:opacity-0 group-active:opacity-0"
              alt={text3.alt}
              width={695}
              height={80}
            />
            <Image
              src={text3.pressedImage}
              className="w-full h-auto absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              alt={text3.alt}
              width={695}
              height={80}
            />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

// ─── 모바일 ──────────────────────────────────────────────────────────────────

function MobileEntrySection({ entered, text1Controls, text2Controls, text3Controls }: TextControls) {
  const { mobileImage, text1, text2, text3, symbol_plan, symbol_design, symbol_server, symbol_client } =
    ENTRY_SECTION_DATA
  // TODO: 모바일 뷰 구현
  return (
    <div className="w-full relative h-[calc(100dvh-var(--spacing-header-mobile))] overflow-hidden mt-header-mobile bg-linear-to-tr from-black via-black to-primary-light-03/30">
      <div className="absolute top-header left-0 flex flex-col gap-[clamp(0px, 1vw, 52px)] z-3">
        <motion.div className="ml-[8vw]" initial={entered ? false : { x: '-60px', opacity: 0 }} animate={text1Controls}>
          <Image src={text1.image} className="w-[68vw] max-w-[621px] h-auto" alt={text1.alt} width={600} height={80} />
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={entered ? false : { x: '-60vw', opacity: 0 }}
          animate={text2Controls}
        >
          <Image
            src={text2.image}
            className="w-[84vw] max-w-[906px] h-auto mt-[3vw] shadow-xl"
            alt={text2.alt}
            width={695}
            height={80}
          />
        </motion.div>
        <motion.div
          className="flex items-center mt-[4.5vw]"
          initial={entered ? false : { x: '-60px', opacity: 0 }}
          animate={text3Controls}
        >
          <a
            href={APPLY_DATA.getButtonHref(isApplyEnded())}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'relative cursor-pointer group block z-14',
              !isApplyEnded() ? 'w-[82vw] ' : 'w-[73vw] max-w-161',
            )}
          >
            <Image
              src={!isApplyEnded() ? text3.deactivatedImage : text3.image}
              className="w-full h-auto group-hover:opacity-0 group-active:opacity-0"
              alt={text3.alt}
              width={695}
              height={80}
            />
            <Image
              src={!isApplyEnded() ? text3.pressedDeactivatedImage : text3.pressedImage}
              className="w-full h-auto absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              alt={text3.alt}
              width={695}
              height={80}
            />
          </a>
        </motion.div>
      </div>
      <Image
        loading="eager"
        src={symbol_plan.image}
        alt={symbol_plan.alt}
        width={80}
        height={80}
        className="size-[20vw] block bottom-[34vw] right-[54vw] absolute z-10"
      />
      <Image
        loading="eager"
        src={symbol_design.image}
        alt={symbol_design.alt}
        width={80}
        height={80}
        className="size-[28vw] block bottom-[29vw] right-[10vw] absolute z-10"
      />
      <Image
        loading="eager"
        src={symbol_server.image}
        alt={symbol_server.alt}
        width={80}
        height={80}
        className="size-[28vw] block bottom-[5vw] right-[26vw] absolute z-10"
      />
      <Image
        loading="eager"
        src={symbol_client.image}
        alt={symbol_client.alt}
        width={80}
        height={80}
        className="w-[42vw] block bottom-[58vw] right-[23vw] absolute z-10"
      />
      <Image
        loading="eager"
        src={mobileImage.image}
        alt={mobileImage.alt}
        width={1440}
        height={900}
        className="w-full h-auto block bottom-0 absolute z-2"
      />
    </div>
  )
}

// ─── HomeEntrySection ─────────────────────────────────────────────────────────

export default function HomeEntrySection({ entered, text1Controls, text2Controls, text3Controls }: TextControls) {
  const isMobile = useIsMobile()

  // hydration 전: 배경색만 표시하여 잘못된 환경의 자산이 로드되지 않도록 대기
  if (isMobile === null) {
    return (
      <div className="w-full bg-black mt-header-mobile md:mt-header h-[calc(100dvh-var(--spacing-header-mobile))] md:h-[calc(100dvh-var(--spacing-header))]" />
    )
  }

  if (isMobile) {
    return (
      <MobileEntrySection
        entered={entered}
        text1Controls={text1Controls}
        text2Controls={text2Controls}
        text3Controls={text3Controls}
      />
    )
  }

  return (
    <DesktopEntrySection
      entered={entered}
      text1Controls={text1Controls}
      text2Controls={text2Controls}
      text3Controls={text3Controls}
    />
  )
}
