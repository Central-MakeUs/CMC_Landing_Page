import { ENTRY_SECTION_DATA } from '@/constants/home/entrySection'
import { motion, useAnimation } from 'motion/react'
import Image from 'next/image'

export default function HomeEntrySection({
  text1Controls,
  text2Controls,
  text3Controls,
}: {
  text1Controls: ReturnType<typeof useAnimation>
  text2Controls: ReturnType<typeof useAnimation>
  text3Controls: ReturnType<typeof useAnimation>
}) {
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
        className="w-auto h-40vw block top-0 right-0 absolute z-1"
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
        <motion.div className="ml-[8vw]" initial={{ x: '-60px', opacity: 0 }} animate={text1Controls}>
          <Image src={text1.image} className="w-[48vw] max-w-[621px] h-auto" alt={text1.alt} width={600} height={80} />
        </motion.div>
        <motion.div className="flex items-center gap-4" initial={{ x: '-60vw', opacity: 0 }} animate={text2Controls}>
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
          initial={{ x: '-60px', opacity: 0 }}
          animate={text3Controls}
        >
          <div className="relative w-[43vw] max-w-[644px] cursor-pointer group">
            <Image
              src={text3.image}
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
              onClick={() => {
                alert('test')
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
