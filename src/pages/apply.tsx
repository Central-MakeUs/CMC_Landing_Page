import Head from 'next/head'
import { Header, Footer } from '@/components/common'
import { ApplyMain } from '@/components/apply'

export default function Apply() {
  return (
    <>
      <Head>
        <title>지원하기 | CMC</title>
      </Head>
      <Header variant="dark" />
      <ApplyMain />
      <Footer />
    </>
  )
}
