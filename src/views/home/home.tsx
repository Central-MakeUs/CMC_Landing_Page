import type { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FloatingButton, Seo } from '@/components'

import { ChallengerSection, FeaturesSection, IdentitySection, IntroSection } from './components'
import * as css from './home.module.scss'
import BottomArrow from './images/bottom-arrow.svg'

const HomePage = () => {
  return (
    <main>
      <section className={css.image_container}>
        <StaticImage src="./images/desktop-main.png" alt="CMC" className={css.desktop_main} />
        <StaticImage src="./images/mobile-main.png" alt="CMC" className={css.mobile_main} />
      </section>
      <div className={css.mobile_button}>
        <BottomArrow />
      </div>
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
