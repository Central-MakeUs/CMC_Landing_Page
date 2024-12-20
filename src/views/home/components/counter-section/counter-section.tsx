import { StaticImage } from 'gatsby-plugin-image'
import { forwardRef } from 'react'

import { AuraCircle, Br, Section } from '@/components'

import * as css from './counter-section.module.scss'
import { RecruitCard } from '../recruit-card'


export const CounterSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref}>
      <div className={css.space} />
      <div className={css.flex_row}>

        <div className={css.flex_col}>
          <StaticImage src="../../../../images/star.png" alt="" className={css.star} placeholder="blurred" />

          <h1 className={css.head}>
            <span>C</span>onnection <Br mobile desktop/>
            <span>M</span>otivation <Br mobile desktop/>
            <span>C</span>ollaboration
          </h1>

          <h3 className={css.description}>
            CMC는 실력있는 ‘기획자, 디자이너, 개발자’가 <Br mobile desktop/>
            3개월 동안 함께 수익 창출을 위한 <Br mobile desktop/>
            MVP 프로덕트를 제작하는 IT 커뮤니티 입니다.
          </h3>
        </div>
        <RecruitCard />
      </div>
      
      <div className={css.mobile}>
        <AuraCircle size="180%" top="15%" left="-40%" opacity={0.2} />
      </div>
    </Section>
  )
})
