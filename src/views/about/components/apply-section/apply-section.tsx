import { Button, Section } from '@/components'

import * as css from './apply-section.module.scss'

export const ApplySection = () => {
  return (
    <Section>
      <Section.Head title="CMC와 함께 도전하세요" />
      <Button className={css.button}>
        CMC 15기 지원하기
        <div className={css.button_effect} />
      </Button>
    </Section>
  )
}
