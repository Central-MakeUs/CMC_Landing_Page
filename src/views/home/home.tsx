import type { HeadProps } from 'gatsby'

import { FloatingButton, Seo } from '@/components'
import { Main } from '@/layouts'

import { CounterSection, IntroSection, ScrollIndicator, SupportsSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  return (
    <Main>
      <IntroSection />
      <ScrollIndicator />
      <FloatingButton />

      <div className={css.gradient_background}>
        <CounterSection />
        <SupportsSection />
        <div className={css.space} />
      </div>
    </Main>
  )
}

export default HomePage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
