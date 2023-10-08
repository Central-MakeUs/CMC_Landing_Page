import { FloatingButton } from '@/components'

import { ChallengerSection, FeaturesSection, IdentitySection, IntroSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  return (
    <main>
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

export const Head = () => <title>CMC</title>
