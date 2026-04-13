import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { RecruitMain } from '@/components/recruit'

export default function Recruit() {
  return (
    <>
      <Head>
        <title>모집안내 | CMC</title>
        <link rel="preload" as="image" href="/images/recruit-bg.webp" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/images/recruit-bg-mobile.webp" type="image/webp" media="(max-width: 767px)" />
      </Head>
      <Header activeNav="recruit" />
      <RecruitMain />
      <Footer />
    </>
  )
}
