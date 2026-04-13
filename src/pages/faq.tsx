import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { FaqMain } from '@/components/faq'

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ | CMC</title>
        <link rel="preload" as="image" href="/images/faq-bg.webp" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/images/faq-bg-mobile.webp" type="image/webp" media="(max-width: 767px)" />
      </Head>
      <Header activeNav="faq" />
      <FaqMain />
      <Footer />
    </>
  )
}
