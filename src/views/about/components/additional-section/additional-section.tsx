import { StaticImage } from 'gatsby-plugin-image'

import { Section } from '@/components'

import * as css from './additional-section.module.scss'

export const AdditionalSection = () => {
  return (
    <Section>
      <Section.Head title={`정기 활동 이외에도 진행되는\n추가세션`} />
      <StaticImage src="./images/gift.png" alt="" className={css.image} objectFit="contain" />
      <p
        className={css.text}
      >{`정기세션 이외에도 지속적으로 챌린저들을 위한 여러 세션들을 추가할 예정이에요.\n\n파트별 스터디, 리더진 멘토링 등 앞으로 추가될 다양한 추가 세션을 기대해주세요 :)`}</p>
    </Section>
  )
}
