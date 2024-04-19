import type { HeadProps } from 'gatsby'
import { useRef } from 'react'

import { Seo } from '@/components'
import { Main } from '@/layouts'

import { CounterSection, IntroSection, ScrollIndicator, SupportsSection } from './components'
import * as css from './home.module.scss'

const HomePage = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null)

  const scrollToNextSection = () => {
    if (nextSectionRef && nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Main>
      <IntroSection />
      <ScrollIndicator onClick={scrollToNextSection} />

      <div className={css.gradient_background}>
        <CounterSection ref={nextSectionRef} />
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
