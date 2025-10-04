import { ApplyButton, Section } from '@/components'

import * as css from './apply-section.module.scss'

export const ApplySection = () => {
  return (
    <Section>
      <Section.Head title="CMC와 함께 도전하세요" />
      {/*       <p className={css.alert}>
        현재 지원 기간이 아닙니다. 다음 기수 모집이 <Br mobile />
        시작될 때까지 조금만 기다려 주세요.
      </p> */}
      <ApplyButton className={css.button}>
        CMC 18기 지원 알림받기
        <div className={css.button_effect} />
      </ApplyButton>
    </Section>
  )
}
