import { HeadProps } from 'gatsby'

import {  ScrollRevealContainer, Section, Seo } from '@/components'
import { Main } from '@/layouts'

import { AuraEffect, PlanCard } from './components'
import { RecruitPlans, SessionPlans } from './constants'
import * as css from './recruit.module.scss'

const RecruitPage = () => {
  return (
    <Main className={css.main}>
      <ScrollRevealContainer>
        <Section className={css.section}>
        
          <AuraEffect />

          <Section.Head title="Join Us!" description="16기 일정을 소개합니다" />
          <PlanCard title="CMC 합류 여정" plans={RecruitPlans} showButton />
          <PlanCard title="CMC 정기 세션" plans={SessionPlans} />
          <div className={css.space} />
        </Section>
      </ScrollRevealContainer>
    </Main>
  )
}

export default RecruitPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
