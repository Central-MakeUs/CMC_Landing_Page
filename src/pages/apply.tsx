import Head from 'next/head'
import { Header, Footer } from '@/components/common'
import { ApplyMain } from '@/components/apply'

export default function Apply() {
  return (
    <>
      <Head>
        <title>지원하기 | CMC</title>
        <link rel="preload" as="image" href="/images/apply-bg.webp" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/images/apply-bg-mobile.webp" type="image/webp" media="(max-width: 767px)" />
      </Head>
      <Header variant="dark" />
      <ApplyMain />
      <Footer />
    </>
  )
}
