import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'

const TITLE = '프로젝트'
const DESCRIPTION = 'CMC 챌린저들이 기획부터 런칭까지 완주한 기수별 프로젝트를 소개합니다.'

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.project })

export default function ProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24">
      <h1 className="text-4xl font-bold">{TITLE}</h1>
      <p className="mt-4 text-lg">{DESCRIPTION}</p>
    </main>
  )
}
