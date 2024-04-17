import { HeadProps } from 'gatsby'

import { Button, GlassCard, Section, Seo } from '@/components'
import { Main } from '@/layouts'

import { AuraEffect, LightEffect } from './components'
import { RecruitPlans, SessionPlans } from './constants'
import * as css from './recruit.module.scss'

interface PlanItemProps {
  name: string
  date: string
}

const PlanItem = ({ name, date }: PlanItemProps) => {
  return (
    <li className={css.item}>
      <h4 className={css.name}>{name}</h4>
      <p className={css.date}>{date}</p>
    </li>
  )
}

const RecruitPage = () => {
  return (
    <Main className={css.main}>
      <Section>
        <Section.Head title="모집안내" description="15기 일정을 소개합니다" />
        <GlassCard extendClass={css.card}>
          <h3 className={css.title}>CMC 합류 여정</h3>
          <ul>
            {Object.keys(RecruitPlans).map((key) => {
              const plan = RecruitPlans[key]
              return <PlanItem key={key} name={plan.name} date={plan.date} />
            })}
          </ul>
          <Button className={css.button}>CMC 15기에 지원하러 가기</Button>

          <LightEffect />
        </GlassCard>
        <GlassCard extendClass={css.card}>
          <h3 className={css.title}>CMC 정기 세션</h3>
          <ul>
            {Object.keys(SessionPlans).map((key) => {
              const plan = SessionPlans[key]
              return <PlanItem key={key} name={plan.name} date={plan.date} />
            })}
          </ul>
        </GlassCard>
        <div className={css.space} />

        <AuraEffect />
      </Section>
    </Main>
  )
}

export default RecruitPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
