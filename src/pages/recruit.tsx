import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { RecruitMain } from '@/components/recruit'

export default function Recruit() {
  return (
    <>
      <Head>
        <title>모집안내 | CMC</title>
      </Head>
      <Header activeNav="recruit" />
      <RecruitMain />
      <Footer />
    </>
  )
}
