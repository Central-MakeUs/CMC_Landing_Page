import Image from 'next/image'

import arrowRightCircle from '@/assets/images/arrow-right-circle.svg'
import { RecruitApplyLink } from '@/components/common/RecruitApplyLink'
import { getCurrentRecruitPhase } from '@/utils/recruit'

import HeroPoster from './HeroPoster'
import HeroSequence from './HeroSequence'

export default function HeroSection() {
  return (
    <section
      data-header-theme="dark"
      className="relative mt-12 aspect-45/32 overflow-hidden bg-foreground md:mt-0 md:aspect-auto md:min-h-svh"
      aria-labelledby="hero-title"
    >
      <HeroPoster />
      <HeroSequence
        title={
          <h1
            id="hero-title"
            className="sr-only text-[clamp(3.25rem,8.333vw,7.5rem)] leading-none font-bold tracking-[-0.01em] md:not-sr-only"
          >
            <span data-hero-line="lead" className="block">
              PICK YOUR
            </span>
            <span data-hero-line="accent" className="block hero-accent">
              POSSIBILITY
            </span>
          </h1>
        }
        cta={
          <RecruitApplyLink
            initialPhase={getCurrentRecruitPhase()}
            className="group flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-xl font-semibold shadow-[0_0_10px_rgba(255,255,255,0.25)] transition-transform motion-safe:hover:scale-[1.02] motion-safe:focus-visible:scale-[1.02] md:px-8 md:py-4 md:text-4xl"
            labelPrefix="CMC "
          >
            <Image
              className="size-11 transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 md:size-16.5"
              src={arrowRightCircle}
              width={66}
              height={66}
              alt=""
            />
          </RecruitApplyLink>
        }
      />
    </section>
  )
}
