import { Section } from '@/components'

import * as css from './apply-section.module.scss'

export const ApplySection = () => {
  return (
    <Section>
      <Section.Head title="CMC와 함께 도전하세요" />
      <div className={css.button}>
        <a href="https://forms.gle/LWfsozJbsrhkpyCr5" target="_blank" rel="noreferrer" className={css.button_apply}>
          CMC 15기 지원하기
        </a>
        <div className={css.button_effect} />
      </div>
    </Section>
  )
}
