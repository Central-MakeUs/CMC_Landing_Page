import type { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FloatingButton, Seo } from '@/components'

import { ChallengerSection, FeaturesSection, IdentitySection, IntroSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  return (
    <main>
      <section className={css.image_container}>
        <StaticImage src="./images/main.png" alt="CMC" />
      </section>
      <IntroSection />
      <IdentitySection />
      <ChallengerSection />
      <FeaturesSection />
      <FloatingButton />
      <div className={css.space} />
    </main>
  )
}

export default HomePage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
