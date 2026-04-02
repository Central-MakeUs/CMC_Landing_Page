import { ACTIVITY_SECTION_DATA } from '@/constants/home/activitySection'
import Image from 'next/image'
import { useState } from 'react'

export default function HomeActivitySection() {
  const { bgGrapic, cards, star } = ACTIVITY_SECTION_DATA
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative w-full flex flex-col bg-white overflow-hidden">
      <Image
        src={bgGrapic.image}
        alt={bgGrapic.alt}
        width={1040}
        height={1040}
        className="absolute top-0 w-[100vw] right-0"
      />
      <div className="py-40 box-border flex flex-col items-center">
        <h1 className="relative text-black text-[40px] mb-16 font-bold leading-[60px] tracking-[-0.8px]">
          <span className="relative z-10">매 기수 진행되는 정기 활동들</span>
          <Image src={star.image} alt={star.alt} width={80} height={80} className="absolute -top-5 -left-12 z-0" />
        </h1>
        <div className="flex items-start justify-center" onMouseLeave={() => setActiveIndex(0)}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={[
                'group cursor-pointer relative flex-none h-[512px] overflow-hidden bg-[#353743] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)]',
                'transition-[width] duration-300 ease-out',
                activeIndex === idx ? 'w-[512px] z-10' : 'w-[calc((100vw-512px)/4)] z-0',
              ].join(' ')}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={512}
                  height={512}
                  className={[
                    'h-full w-full object-cover transition-transform duration-300',
                    activeIndex === idx ? 'scale-[1.04]' : 'scale-100',
                  ].join(' ')}
                  priority={idx === 0}
                />
              </div>

              <div className="absolute top-8 left-8 right-8 flex flex-col gap-3">
                <p className="font-yapari text-[24px] w-fit text-white pb-3 border-b-[2px] border-white">0{idx + 1}</p>
                <p className="text-white text-[28px] font-medium leading-[40px]">{card.title}</p>
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300"
                style={{ opacity: activeIndex === idx ? 1 : 0 }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <p
                  className="text-white text-[20px] leading-[28px] tracking-[-0.4px] transition-all duration-300 delay-75"
                  style={{
                    opacity: activeIndex === idx ? 1 : 0,
                    transform: activeIndex === idx ? 'translateY(0px)' : 'translateY(16px)',
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
