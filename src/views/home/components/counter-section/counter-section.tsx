import { StaticImage } from 'gatsby-plugin-image'
import { forwardRef } from 'react'

import { AuraCircle, Button, GlassCard, Section } from '@/components'

import { CountdownTimer } from '../countdown-timer'
import * as css from './counter-section.module.scss'

export const CounterSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref}>
      <StaticImage
        src="./images/desktop-title.png"
        alt="Central Makeus Challenge"
        className={css.counter_title_desktop}
        objectFit="contain"
      />
      <StaticImage
        src="./images/mobile-title.png"
        alt="Central Makeus Challenge"
        className={css.counter_title_mobile}
        objectFit="contain"
      />

      <h3 className={css.description}>
        CMC는 <span>실력있는</span> ‘기획자, 디자이너, 개발자’들이 <span>3개월</span> 동안 함께
        <span> 수익 창출</span>을 위한 <span>MVP 프로덕트</span>를 제작하는 <span>IT 커뮤니티</span> 입니다.
      </h3>

      <GlassCard extendClass={css.card}>
        <p className={css.card_title}>15기 모집 시작까지</p>
        <CountdownTimer />
        <Button>알림 받기</Button>

        <div className={css.shine}>
          <StaticImage src="./images/shine-left-top.png" alt="" className={css.shine_left_top} objectFit="contain" />
          <StaticImage src="./images/shine-right-top.png" alt="" className={css.shine_right_top} objectFit="contain" />
          <StaticImage
            src="./images/shine-left-bottom.png"
            alt=""
            className={css.shine_left_bottom}
            objectFit="contain"
          />
          <StaticImage
            src="./images/shine-right-bottom.png"
            alt=""
            className={css.shine_right_bottom}
            objectFit="contain"
          />
        </div>
      </GlassCard>

      <div className={css.desktop_aura}>
        <AuraCircle size="30%" top="-10%" left="18%" opacity={0.2} />
        <AuraCircle size="26%" top="10%" left="60%" opacity={0.17} />
        <AuraCircle size="24%" top="40%" left="10%" opacity={0.12} />
        <AuraCircle size="24%" top="60%" left="56%" opacity={0.15} />
        <AuraCircle size="20%" top="80%" left="30%" opacity={0.1} />
      </div>

      <div className={css.mobile_aura}>
        <AuraCircle size="50%" top="0%" left="-10%" opacity={0.2} />
        <AuraCircle size="60%" top="20%" left="60%" opacity={0.15} />
        <AuraCircle size="40%" top="70%" left="10%" opacity={0.1} />
      </div>
    </Section>
  )
})
