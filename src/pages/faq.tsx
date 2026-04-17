import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { FaqMain } from '@/components/faq'

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQ | CMC</title>
      </Head>
      <Header activeNav="faq" />
      <FaqMain />
      <Footer />
    </>
  )
}
