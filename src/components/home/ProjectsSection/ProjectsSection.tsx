import Link from 'next/link'

import { DoubleChevronRightIcon } from '@/components/common/DoubleChevronRightIcon'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { ROUTES } from '@/lib/site'

import ProjectCarousel from './ProjectCarousel'

export default function ProjectsSection() {
  return (
    <section
      data-header-theme="light"
      id="projects"
      aria-labelledby="projects-title"
      className="flex flex-col items-center gap-10 bg-gray-50 px-5 py-25 xl:gap-16 xl:px-0 xl:py-40"
    >
      <header className="flex flex-col items-center gap-4 text-center">
        <SectionEyebrow>CMC Projects</SectionEyebrow>
        <h2
          id="projects-title"
          className="text-xl leading-8 font-bold tracking-[0.5px] text-navy-950 lg:text-[32px] lg:leading-[50.4px]"
        >
          CMC에서 함께한
          <br className="lg:hidden" /> 프로젝트를 만나보세요
        </h2>
      </header>

      <ProjectCarousel />

      <Link
        href={ROUTES.project}
        className="flex items-center justify-center gap-4 rounded-full bg-foreground py-3.5 pr-4 pl-7.5 text-base leading-[22.4px] font-semibold tracking-[-0.34px] text-white xl:py-4 xl:text-lg"
      >
        프로젝트 전체보기
        <DoubleChevronRightIcon />
      </Link>
    </section>
  )
}
