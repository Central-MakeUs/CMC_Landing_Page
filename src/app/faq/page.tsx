import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'

const TITLE = '자주 묻는 질문'
const DESCRIPTION = 'CMC 지원과 활동에 대해 자주 묻는 질문을 모았습니다.'

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.faq })

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24">
      <h1 className="text-4xl font-bold">{TITLE}</h1>
      <p className="mt-4 text-lg">{DESCRIPTION}</p>
    </main>
  )
}
