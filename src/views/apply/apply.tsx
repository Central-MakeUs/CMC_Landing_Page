import type { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { AuraEffect, Br, ScrollRevealContainer, Section, Seo } from '@/components'
import { Main } from '@/layouts'

import * as css from './apply.module.scss'
import { CountdownTimer } from './components/countdown-timer'

const ApplyPage = () => {
  return (
    <Main>
      <ScrollRevealContainer>
        <Section className={css.section}>
          <AuraEffect />

          <div className={css.head}>
            <StaticImage src="../../images/symbol18.png" alt="" className={css.star} placeholder="blurred" />
            <h1 className={css.title}>
              C<div>entral</div> <Br mobile />M<div>akeus</div> <Br mobile />C<div>hallenge</div>
            </h1>
          </div>

          <p className={css.description}>
            CMC는 <Br mobile />
            <span>실력있는</span> '기획자, 디자이너, 개발자'들이 <Br mobile />
            <span>3개월</span> 동안 함께 <Br desktop />
            <span>수익 창출</span>을 위한 <Br mobile />
            <span>MVP 프로덕트</span>를 제작하는 <span>IT 커뮤니티</span>입니다.
          </p>

          <div className={css.card}>
            <CountdownTimer />
          </div>

          <div className={css.space} />
        </Section>
      </ScrollRevealContainer>
    </Main>
  )
}

export default ApplyPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
