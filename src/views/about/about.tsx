import type { HeadProps, PageProps } from 'gatsby'

import { Seo } from '@/components'
import { Main } from '@/layouts'

import * as css from './about.module.scss'
import {
  ActivitySection,
  AdditionalSection,
  ApplySection,
  ChallengerSection,
  FeatureSection,
  IdentitySection,
  ProductSection,
} from './components'

const AboutPage = ({
  data: {
    allAppJson: { nodes: apps },
  },
}: PageProps<Queries.ProjectImgQuery>) => {
  return (
    <Main className={css.main}>
      <FeatureSection />
      <IdentitySection />
      <ChallengerSection />
      <ActivitySection />
      <AdditionalSection />
      <ProductSection apps={apps} />
      <ApplySection />
      <div className={css.space} />
    </Main>
  )
}

export default AboutPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
