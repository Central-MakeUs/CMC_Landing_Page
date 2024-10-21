import { StaticImage } from 'gatsby-plugin-image'
import { forwardRef, ReactElement } from 'react'

import { ApplyButton, AuraCircle, Br, GlassCard, Section } from '@/components'

import * as css from './counter-section.module.scss'


export const CounterSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref}>
      <div className={css.space} />
      <div className={css.flex_row}>

        <div>
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

        <div>
          <div className={css.card}>
            <StaticImage src="./images/card.png" alt="card" className={css.card_img} />
            <div className={css.card_text}>
              <h2 className={css.card_h}>CMC 16기 다음 여정에 <Br />참여해주세요</h2>
              <p className={css.card_p}>
                아직 모집기간이 아니에요!<Br />
                알림 설정을 해주시면 <Br />
                다음 모집 알림을 전달드릴게요!
              </p>
            </div>
          </div>

          <ApplyButton className={css.button}>
            모집알림 신청하기
            <StaticImage src="./images/button-sign.png" alt="click" className={css.button_icon} />
          </ApplyButton>
        </div>

      </div>
    </Section>
  )
})
