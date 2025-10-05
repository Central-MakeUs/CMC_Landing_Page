import { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { ScrollRevealContainer, Seo } from '@/components'
import { Main } from '@/layouts'

import { PlanCard } from './components'
import { RecruitPlans, SessionPlans } from './constants'
import * as css from './recruit.module.scss'

const RecruitPage = () => {
  return (
    <Main className={css.main}>
      <ScrollRevealContainer>
        <div className={css.background} />
        <div className={css.contents}>
          <StaticImage src="./images/symbol18.png" alt="" className={css.img} placeholder="blurred" />
          <h2 className={css.title}>Join Us!</h2> <p className={css.subTitle}>18기 일정을 소개합니다</p>
          <div className={css.schedule}>
            <PlanCard title="CMC 합류 여정" plans={RecruitPlans} showButton />
            <PlanCard title="CMC 정기 세션" plans={SessionPlans} />
            <StaticImage src="./images/18th_mark.png" alt="" className={css.stamp} />
          
            <div className={css.link}>https://cmc.makeus.in/</div>
          </div>
        </div>
      </ScrollRevealContainer>
    </Main>
  )
}

export default RecruitPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
