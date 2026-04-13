import Head from 'next/head'

import { Footer, Header } from '@/components/common'
import { ProjectMain } from '@/components/project'

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>프로젝트 | CMC</title>
        <link rel="preload" as="image" href="/images/project-bg.webp" type="image/webp" media="(min-width: 768px)" />
        <link rel="preload" as="image" href="/images/project-bg-mobile.webp" type="image/webp" media="(max-width: 767px)" />
      </Head>
      <Header activeNav="project" />
      <ProjectMain />
      <Footer />
    </>
  )
}
