import { StaticImage } from 'gatsby-plugin-image'
import { ReactElement, ReactNode } from 'react'
import background_desktop from './images/background_desktop.png'
import background_mobile from './images/background_mobile.png'

import { Br, Section } from '@/components'

import * as css from './identity-section.module.scss'

const Title: ReactElement = (
  <>
    CMC 챌린저들은&nbsp;
    <Br mobile />
    각자가 <span>프로덕트의 &apos;주인공&apos;</span>이 되어
    <Br mobile desktop />
    새로운 길을 향해 도전합니다.
  </>
)

interface ItemProps {
  icon: ReactNode
  title: string
  description: ReactElement
}

const Card = ({ icon, title, description }: ItemProps) => {
  return (
    <div className={css.card}>
      {/* {icon} */}
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
        <StaticImage
          className={css.backgroundImg}
          src="./images/background_desktop.png"
          alt=""
          style={{ position: 'absolute' }}
        ></StaticImage>
        <StaticImage className={css.backgroundImgMobile} src="./images/background_mobile.png" alt=""></StaticImage>
        <Card
          icon={<StaticImage src="./images/light-worker.png" alt="" className={css.icon} />}
          title="직장인이신가요?"
          description={
            <>
              사이드 프로젝트를 통해
              <Br mobile desktop /> 나만의 프로덕트를 제작하고, <Br mobile />
              수익을 창출해보세요
            </>
          }
        />
        <Card
          icon={<StaticImage src="./images/light-student.png" alt="" className={css.icon} />}
          title="대학생 & 취준생이신가요?"
          description={
            <>
              실무와 동일한 프로세스로
              <Br />
              프로젝트의 A-Z를 경험해보세요
            </>
          }
        />
      </div>
    </Section>
  )
}
