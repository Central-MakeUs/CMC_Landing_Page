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
    </Section>
  )
}
