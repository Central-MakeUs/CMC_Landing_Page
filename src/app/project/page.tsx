import { ProjectGallery } from '@/components/project/ProjectGallery'
import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'

const TITLE = '프로젝트'
const DESCRIPTION = 'CMC 챌린저들이 기획부터 런칭까지 완주한 기수별 프로젝트를 소개합니다.'

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.project })

export default function ProjectPage() {
  return (
    // 그라데이션 높이를 시안 섹션 높이(모바일 1738, 웹 2030)로 고정한다.
    // 콘텐츠 높이에 맞추면 기수 필터·더보기에 따라 배경색이 바뀐다. 그 아래는 bg-blue-75로 이어진다.
    <main
      data-header-theme="dark"
      className="flex-1 bg-blue-75 bg-[linear-gradient(180deg,var(--blue-400)_0%,var(--blue-375)_15.202%,var(--blue-75)_100%)] bg-[length:100%_1738px] bg-no-repeat px-5 py-40 lg:bg-[length:100%_2030px] lg:py-50"
    >
      <section
        aria-labelledby="projects-heading"
        className="mx-auto flex w-full max-w-300 flex-col items-center gap-6 lg:gap-14"
      >
        <h1
          id="projects-heading"
          className="font-display text-2xl leading-[33.6px] font-semibold text-navy-900 lg:text-4xl"
        >
          CMC Projects
        </h1>
        <ProjectGallery />
      </section>
    </main>
  )
}
