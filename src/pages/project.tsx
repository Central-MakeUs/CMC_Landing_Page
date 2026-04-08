import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { ProjectMain } from '@/components/project'

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>프로젝트 | CMC</title>
      </Head>
      <Header activeNav="project" />
      <ProjectMain />
      <Footer />
    </>
  )
}
