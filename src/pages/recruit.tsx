import Head from 'next/head'

import { Footer, Header } from '@/components/common'

export default function Recruit() {
  return (
    <>
      <Head>
        <title>모집안내 | CMC</title>
      </Head>
      <Header activeNav="recruit" />
      <main className="w-full bg-primary-light-01">
        <picture>
          <source srcSet="/images/recruit-bg.webp" type="image/webp" />
          <img
            src="/images/recruit-bg.png"
            alt=""
            className="block h-auto w-full max-w-none"
            decoding="async"
            aria-hidden
          />
        </picture>
      </main>
      <Footer />
    </>
  )
}
