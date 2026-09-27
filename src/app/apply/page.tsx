import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'

const TITLE = '지원하기'
const DESCRIPTION = 'CMC 신규 기수 지원 방법과 지원서 제출 안내입니다.'

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.apply })

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24">
      <h1 className="text-4xl font-bold">{TITLE}</h1>
      <p className="mt-4 text-lg">{DESCRIPTION}</p>
    </main>
  )
}
