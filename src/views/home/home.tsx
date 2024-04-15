import type { HeadProps } from 'gatsby'

import { FloatingButton, Seo } from '@/components'

import { ChallengerSection, FeaturesSection, IdentitySection, IntroSection } from './components'
import * as css from './home.module.scss'
import BottomArrow from './images/bottom-arrow.svg'

const HomePage = () => {
  return (
    <main className={css.main}>
      <IntroSection />
      <div className={css.mobile_button}>
        <BottomArrow />
      </div>
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
