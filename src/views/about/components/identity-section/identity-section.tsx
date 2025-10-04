import { ReactElement } from 'react'

import { Br, Section } from '@/components'

import * as css from './identity-section.module.scss'

const Title: ReactElement = (
  <div>
    CMC 챌린저들은&nbsp;
    <Br mobile />
    각자가 <span>프로덕트의 &apos;주인공&apos;</span>이 되어
    <Br mobile desktop />
    새로운 길을 향해 도전합니다.
  </div>
)

export const IdentitySection = () => {
  return (
    <Section>
      <Section.Head title={Title} />

      <div className={css.cards}>
        <div className={css.background} />

        <div className={css.card}>
          <p className={css.title}>“ 직장인이신가요? ”</p>
          <p className={css.description}>
            사이드 프로젝트를 통해
            <Br mobile desktop />
            나만의 프로덕트를 제작하고, <Br mobile />
            수익을 창출해보세요
          </p>
        </div>

        <div className={css.divideLine} />

        <div className={css.card}>
          <p className={css.title}>
            “ 대학생 & 취준생
            <Br mobile />
            이신가요? ”
          </p>
          <p className={css.description}>
            실무와 동일한 프로세스로
            <Br mobile desktop />
            프로젝트의 A-Z를 경험해보세요
          </p>
        </div>
      </div>
    </Section>
  )
}
