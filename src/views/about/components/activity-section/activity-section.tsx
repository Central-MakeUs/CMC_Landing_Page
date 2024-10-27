import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

import { Section } from '@/components'

import * as css from './activity-section.module.scss'
import { Cards, Tab } from './constants'

import img1 from './images/img1.png'

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

interface SessionCardProps {
  name: string
  description: string
  imageSrc: string
}

const SessionCard = ({ name, description, imageSrc }: SessionCardProps) => {
  return (
    <figure className={css.card}>
      <img src={imageSrc} alt={name} className={css.card_image} />
      <figcaption>
        <p className={css.card_name}>{name}</p>
        <p className={css.card_description}>{description}</p>
      </figcaption>
    </figure>
  )
}

export const ActivitySection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.MENTORING)

  return (
    <Section className={css.main}>
      <Section.Head title="매 기수 진행되는 정기 활동들" />
      <nav className={css.nav}>
        <ul className={css.main_buttons}>
          {Object.keys(Cards).map((key) => {
            const card = Cards[key as Tab]
            return (
              <li key={key}>
                <Button isActive={key === currentTab} label={card.name} onClick={() => setCurrentTab(key as Tab)} />
              </li>
            )
          })}
        </ul>
      </nav>

      <SessionCard
        name={Cards[currentTab].name}
        description={Cards[currentTab].description}
        imageSrc={Cards[currentTab].imageSrc}
      />

      <div className={css.cardContainer}>
        <div className={css.card1}>
          <img className={css.image} src="./images/img1.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>연합 해커톤</h2>
            <p className={css.description}>
              CMC 정기세션 이전 진행되는 세션으로 단시간 내 IT 프로덕트를 설계하고, 구현하는 경험을 가집니다.
            </p>
          </div>
        </div>
        <div className={css.card1} style={{ marginTop: '50px' }}>
          <StaticImage className={css.image} src="./images/img2.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>모각작</h2>
            <p className={css.description}>
              모든 파트가 함께 모여 현재까지의 프로젝트 진척도를 점검합니다. 또한 챌린저 간 진행되는 UT를 통해 프로덕트
              사용성을 객관적으로 평가하고 이를 반영하여 보완합니다.
            </p>
          </div>
        </div>
        <div className={css.card1} style={{ marginTop: '-50px' }}>
          <StaticImage className={css.image} src="./images/img3.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>런칭 데이</h2>
            <p className={css.description}>
              데모데이 개최 이전에 CMC 전체 챌린저들을 대상으로 런칭된 프로덕트를 소개합니다. 해당 세션을 통해 프로덕트
              구현 과정과 추후 프로덕트 방향성에 대해 공유합니다.
            </p>
          </div>
        </div>
        <div className={css.card1}>
          <StaticImage className={css.image} src="./images/img4.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>데모데이</h2>
            <p className={css.description}>
              VC와 일반 참가자들을 대상으로 부스를 운영하며 지금까지 제작한 프로덕트를 소개하고 홍보합니다. 데모데이를
              통해 초기 사용자를 모집하고, 런칭된 프로덕트의 시장성을 검증합니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
