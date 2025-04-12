import { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { ScrollRevealContainer, Section, Seo } from '@/components'
import { Main } from '@/layouts'

import { PlanCard } from './components'
import { RecruitPlans, SessionPlans } from './constants'
import * as css from './recruit.module.scss'

const RecruitPage = () => {
  return (
    <Main className={css.main}>
      <ScrollRevealContainer>
        <div className={css.background}>
          <StaticImage src="../../images/recruit_background.png" alt="" className={css.desktop} />
          <StaticImage src="../../images/recruit_background_mobile.png" alt="" className={css.mobile} />
        </div>
        <Section className={css.section}>
          {/* <AuraEffect /> */}

          <Section.Head title="Join Us!" description="16기 일정을 소개합니다" />
          <div className={css.schedule}>
            <div className={css.bg1}>
              <StaticImage src="../../images/recruit_bg.png" alt="" />
            </div>
            <div className={css.bg2}>
              <StaticImage src="../../images/recruit_bg2.png" alt="" />
            </div>
            <PlanCard title="CMC 합류 여정" plans={RecruitPlans} showButton />
            <PlanCard title="CMC 정기 세션" plans={SessionPlans} />
          </div>
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
