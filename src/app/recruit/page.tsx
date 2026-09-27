import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'

const TITLE = '모집 안내'
const DESCRIPTION = 'CMC 신규 기수 모집 일정과 지원 자격, 활동 과정을 안내합니다.'

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.recruit })

export default function RecruitPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24">
      <h1 className="text-4xl font-bold">{TITLE}</h1>
      <p className="mt-4 text-lg">{DESCRIPTION}</p>
    </main>
  )
}
