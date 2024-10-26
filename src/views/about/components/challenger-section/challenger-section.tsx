import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

import { Br, Section } from '@/components'

import * as css from './challenger-section.module.scss'
import { Cards, Tab } from './constants'

interface ButtonProps {
  isActive: boolean
  label: string
  onClick: () => void
}

const Button = ({ isActive, label, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={clsx(css.button, { [css.button_active]: isActive })}>
      {label}
    </button>
  )
}

interface ClientCardProps {
  clientType: string
  description: string
  techStack: string
}

const ClientCard = ({ clientType, description, techStack }: ClientCardProps) => {
  return (
    <div className={css.client_card}>
      <p className={css.client_title}>{clientType}</p>
      <p className={css.client_description}>{description}</p>
      <p className={css.client_caption}>{techStack}</p>
    </div>
  )
}

interface CardProps {
  type: Tab
  title: string
  description: string
}

const Card = ({ type, title, description }: CardProps) => {
  return (
    <div className={css.card}>
      <div className={css.card_desktop}>
        {type === Tab.PLAN && <StaticImage src="./images/symbol.png" alt="" className={css.icon_desktop} />}
        {type === Tab.DESIGN && <StaticImage src="./images/symbol.png" alt="" className={css.icon_desktop} />}
        {type === Tab.CLIENT && <StaticImage src="./images/symbol.png" alt="" className={css.icon_desktop} />}
        {type === Tab.SERVER && <StaticImage src="./images/symbol.png" alt="" className={css.icon_desktop} />}
      </div>
      <div className={css.detail}>
        <div className={css.card_mobile}>
          {type === Tab.PLAN && <StaticImage src="./images/symbol.png" alt="" className={css.icon_mobile} />}
          {type === Tab.DESIGN && <StaticImage src="./images/symbol.png" alt="" className={css.icon_mobile} />}
          {type === Tab.CLIENT && <StaticImage src="./images/symbol.png" alt="" className={css.icon_mobile} />}
          {type === Tab.SERVER && <StaticImage src="./images/symbol.png" alt="" className={css.icon_mobile} />}
          <h4>
            CMC에서의 <Br mobile />
            {title}는?
          </h4>
        </div>
        <p className={css.detail_description}>{description}</p>
        {type === Tab.CLIENT && (
          <div className={css.card_client}>
            <ClientCard
              clientType="iOS, AOS"
              description="한 명의 개발자가 하나의 어플을 담당하여 네이티브 앱을 제작하고 배포하는 경험을 할 수 있습니다."
              techStack="사용 기술 : AOS - Kotlin / IOS - Swift"
            />
            <ClientCard
              clientType="Web"
              description="두 명의 개발자가 함께 크로스플랫폼 앱을 만들고 배포하는 경험을 할 수 있습니다."
              techStack="사용 기술 : React & React Native"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export const ChallengerSection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.PLAN)

  return (
    <Section className={css.main}>
      <Section.Head
        title="CMC는 이렇게 도전합니다."
        description={
          <>
            각 분야의 전문가 5명이 하나의 팀을 이뤄&nbsp;
            <Br mobile />
            3개월 동안 전문적인 기술과 노하우를 바탕으로&nbsp;
            <Br mobile />
            프로덕트를 제작합니다.
          </>
        }
      />
      <p className={css.sub_title}>
        PM & Planner (1명) / Designer (1명) /<Br mobile /> Client (2명) / Server (1명)
      </p>
      <p className={css.caption}>※ web은 2명, ios 1명 & aos 1명은 짝지어서 런칭하게 됩니다.</p>

      <div className={css.buttons}>
        {Object.keys(Cards).map((key) => {
          const card = Cards[key as Tab]
          return (
            <>
              <Button
                key={key}
                label={card.name}
                isActive={currentTab === key}
                onClick={() => setCurrentTab(key as Tab)}
              />
              <div className={clsx(css.cards_mobile, { [css.card_active]: currentTab === key })}>
                <Card type={key as Tab} title={card.name} description={card.description} />
              </div>
            </>
          )
        })}
      </div>

      <div className={css.cards_desktop}>
        <Card type={currentTab} title={Cards[currentTab].name} description={Cards[currentTab].description} />
      </div>
    </Section>
  )
}
