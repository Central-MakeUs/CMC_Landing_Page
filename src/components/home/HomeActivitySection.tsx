import { ACTIVITY_SECTION_DATA } from '@/constants/home/activitySection'
import { cn } from '@/utils/cn'
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
        <h1 className="relative text-black text-[24px] md:text-[40px] mb-16 font-bold md:leading-[60px] leading-[36px] tracking-[-0.48px] md:tracking-[-0.8px]">
          <span className="relative z-10">매 기수 진행되는 정기 활동들</span>
          <Image src={star.image} alt={star.alt} width={80} height={80} className="absolute -top-5 -left-12 z-0" />
        </h1>

        {/* Mobile: grid-cols-1 / Desktop: flex-row with hover expand */}
        <div
          className="grid grid-cols-1 w-full px-5 md:px-0 md:flex md:flex-row md:items-start md:justify-center md:w-auto"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx

            return (
              <div
                key={idx}
                className={cn(
                  'cursor-pointer relative flex-none overflow-hidden bg-[#353743] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)]',
                  // Mobile: full width, fixed height
                  'h-[320px] w-full',
                  // Desktop: variable width + height with transition
                  'md:h-[512px] md:transition-[width] md:duration-300 md:ease-out',
                  isActive ? 'md:w-[512px] md:z-10' : 'md:w-[calc((100vw-512px)/4)] md:z-0',
                )}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={512}
                    height={512}
                    className={cn(
                      'h-full w-full object-cover transition-transform duration-300',
                      // Mobile: always zoomed
                      'scale-[1.04]',
                      // Desktop: zoom only when active
                      isActive ? 'md:scale-[1.04]' : 'md:scale-100',
                    )}
                    priority={idx === 0}
                  />
                </div>

                <div className="absolute top-8 left-8 right-8 flex flex-col gap-3">
                  <p className="font-yapari md:text-[24px] text-[22px] w-fit text-white pb-3 border-b-[2px] border-white">
                    0{idx + 1}
                  </p>
                  <p className="text-white md:text-[28px] text-[22px] font-medium leading-[40px]">{card.title}</p>
                </div>

                {/* Gradient overlay: always visible on mobile, conditional on desktop */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300',
                    'opacity-100',
                    isActive ? 'md:opacity-100' : 'md:opacity-0',
                  )}
                />

                {/* Description: always visible on mobile, conditional on desktop */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p
                    className={cn(
                      'text-white md:text-[20px] text-[16px] md:leading-[28px] leading-[24px] tracking-[-0.32px] md:tracking-[-0.4px] transition-all duration-300 delay-75',
                      'opacity-100 translate-y-0',
                      isActive ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-4',
                    )}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
