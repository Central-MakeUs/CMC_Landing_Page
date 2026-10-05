import Link from 'next/link'

import { ROUTES } from '@/lib/site'

// 404 응답에는 Next.js가 noindex를 자동으로 넣는다.
export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start px-5 py-24">
      <h1 className="text-4xl font-bold">페이지를 찾을 수 없어요</h1>
      <p className="mt-4 text-lg">주소가 바뀌었거나 삭제된 페이지입니다.</p>
      <Link href={ROUTES.home} className="mt-8 underline underline-offset-4">
        홈으로 가기
      </Link>
    </main>
  )
}
