import clsx from 'clsx'
import { useState } from 'react'

import { Section } from '../section'
import * as css from './challenger-section.module.scss'
import { Cards, Tab } from './constants'

export const ChallengerSection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.PLAN)

  return (
    <Section className={css.challenger}>
      <Section.Header title="cmc challenger" description={'CMC는 기획자 디자이너 개발자가\n함께 모여 성장합니다'} />
      <div className={css.role}>
        <nav>
          <button
            type="button"
            onClick={() => setCurrentTab(Tab.PLAN)}
            className={clsx({ [css.active_button]: currentTab === Tab.PLAN })}
          >
            Plan
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab(Tab.DESIGN)}
            className={clsx({ [css.active_button]: currentTab === Tab.DESIGN })}
          >
            Design
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab(Tab.CLIENT)}
            className={clsx({ [css.active_button]: currentTab === Tab.CLIENT })}
          >
            Web • iOS • AOS
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab(Tab.SERVER)}
            className={clsx({ [css.active_button]: currentTab === Tab.SERVER })}
          >
            Server
          </button>
        </nav>
        <div className={css.mobile_card}>
          <h3>
            {Cards[currentTab].name}
            {currentTab === Tab.CLIENT && <span> (Web . iOS . AOS)</span>}
          </h3>
          <p>{Cards[currentTab].description}</p>
        </div>
        <div className={css.card_grid}>
          {Object.keys(Cards).map((key) => {
            const card = Cards[key as Tab]
            return (
              <div key={key} className={css.pc_card}>
                <h3>
                  {card.name}
                  {key === Tab.CLIENT && <span> (Web . iOS . AOS)</span>}
                </h3>
                <p>{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
