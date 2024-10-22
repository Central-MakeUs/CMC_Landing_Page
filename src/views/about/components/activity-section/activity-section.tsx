import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

import { Section } from '@/components'

import * as css from './activity-section.module.scss'
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

interface SessionCardProps {
  name: string
  description: string
}

const SessionCard = ({ name, description }: SessionCardProps) => {
  return (
    <figure className={css.card}>
      <StaticImage src="./images/session-launching.png" alt="" objectFit="fill" className={css.card_image} />
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

      <SessionCard name={Cards[currentTab].name} description={Cards[currentTab].description} />

      <div className={css.cardContainer}>
        <div className={css.card1}>
          <StaticImage className={css.image} src="./images/img1.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>연합 해커톤</h2>
            <p className={css.description}>
              대학생 IT 연합 동아리 UMC와 함께 연합 해커톤을 진행하며 동반 성장을 목표로 합니다. 짧은 기간 내에
              프로덕트를 생산해보는 경험을 통해 협업 경험을 쌓아갈 수 있습니다.
            </p>
          </div>
        </div>
        <div className={css.card1} style={{ marginTop: '50px' }}>
          <StaticImage className={css.image} src="./images/img2.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>모각작</h2>
            <p className={css.description}>모각각 설명 추가 예정</p>
          </div>
        </div>
        <div className={css.card1} style={{ marginTop: '-50px' }}>
          <StaticImage className={css.image} src="./images/img3.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>런칭 데이</h2>
            <p className={css.description}>
              기획자와 디자이너와 소통하며 의도를 면밀히 분석하고 반영하여 사용자가 편리하게 접근하고 사용할 수 있는
              플랫폼을 제작합니다.
            </p>
          </div>
        </div>
        <div className={css.card1}>
          <StaticImage className={css.image} src="./images/img4.png" alt="이미지 설명" />
          <div className={css.overlay}>
            <h2 className={css.h2}>데모데이</h2>
            <p className={css.description}>
              CMC에서 제작한 프로덕트 부스를 운영하며 홍보하고, 초기 사용자 모집을 목표로 합니다. VC와 일반 참가자들을
              대상으로 제작한 프로덕트를 선보입니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
