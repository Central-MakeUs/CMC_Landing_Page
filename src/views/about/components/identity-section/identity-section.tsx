import { StaticImage } from 'gatsby-plugin-image'
import { ReactNode } from 'react'

import { Section } from '@/components'

import * as css from './identity-section.module.scss'

const Title: ReactNode = (
  <>
    CMC 챌린저들은 각자가 프로덕트의 <span>주인공</span>이 되어
    <br />
    새로운 길을 향해 도전합니다.
  </>
)

interface ItemProps {
  icon: ReactNode
  title: string
  description: string
}

const Card = ({ icon, title, description }: ItemProps) => {
  return (
    <div className={css.card}>
      {icon}
      <p className={css.title}>{title}</p>
      <p className={css.description}>{description}</p>
    </div>
  )
}

export const IdentitySection = () => {
  return (
    <Section>
      <Section.Head title={Title} />
      <div className={css.cards}>
        <Card
          icon={<StaticImage src="./images/light-worker.png" alt="" className={css.icon} />}
          title="직장인이신가요?"
          description={`사이드 프로젝트를 통해\n나만의 프로덕트를 제작하고, 수익을 창출해보세요`}
        />
        <Card
          icon={<StaticImage src="./images/light-student.png" alt="" className={css.icon} />}
          title="대학생 & 취준생이신가요?"
          description={`실무와 동일한 프로세스로\n프로젝트의 A-Z를 경험해보세요`}
        />
      </div>
    </Section>
  )
}
