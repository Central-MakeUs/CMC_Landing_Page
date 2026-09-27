import { SITE_DESCRIPTION } from '@/lib/site'

// 홈은 layout의 기본 metadata(title: CMC, canonical: /)를 그대로 사용한다.
export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24">
      <h1 className="text-4xl font-bold">CMC</h1>
      <p className="mt-4 text-lg">{SITE_DESCRIPTION}</p>
    </main>
  )
}
