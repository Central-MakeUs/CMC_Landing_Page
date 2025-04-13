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
        <div className={css.background}>
          <StaticImage src="../../images/recruit_background.png" alt="" className={css.desktop} />
          <StaticImage src="../../images/recruit_background_mobile.png" alt="" className={css.mobile} />
        </div>
        <div className={css.contents}>
          <StaticImage src="../../images/symbol17.png" alt="" className={css.img} placeholder="blurred" />
          <h2 className={css.title}>JOIN US!</h2> <p className={css.subTitle}>16기 일정을 소개합니다</p>
          <div className={css.schedule}>
            <PlanCard title="CMC 합류 여정" plans={RecruitPlans} showButton />
            <PlanCard title="CMC 정기 세션" plans={SessionPlans} />
            <StaticImage src="../../images/stamp1.png" alt="" className={css.stamp} />
            <div className={css.explanation}>
              * 상기 일정은 변동될 수 있으며, 자세한 일정은 OT에서 안내드릴 예정입니다.
            </div>
            <div className={css.link}>HTTPS://CMC.MAKEUS.IN/</div>
          </div>
        </div>
        <div className={css.space} />
      </ScrollRevealContainer>
    </Main>
  )
}

export default RecruitPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
