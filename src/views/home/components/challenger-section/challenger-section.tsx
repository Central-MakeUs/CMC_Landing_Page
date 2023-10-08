import clsx from 'clsx'
import { useState } from 'react'

import { Section } from '../section'
import * as css from './challenger-section.module.scss'

enum Tab {
  PLAN = 'Plan',
  DESIGN = 'Design',
  CLIENT = 'Client',
  SERVER = 'Server',
}

const cards: Record<Tab, { name: string; description: string }> = {
  Plan: {
    name: 'Planner',
    description:
      '사용자의 니즈와 비즈니스 목표를 고려하여 서비스의\n전략을 수립하고 설계합니다. 또한 PM으로써\n관리 프로세스를 주도하며 조율하는 역할을 수행합니다.',
  },
  Design: {
    name: 'Designer',
    description:
      '사용자가 편안하게 사용 가능한 화면을 디자인 함으로써,\n사용자에게 최적의 시각적, 기능적 경험을 제공합니다.',
  },
  Client: {
    name: 'Client Developer',
    description: '디자이너와 서버 개발자간 긴밀한 협력을 통해 최상의\n프로덕트를 구현하기 위한 코드를 구현합니다.',
  },
  Server: {
    name: 'Server Developer',
    description: '기획자와 클라이언트 개발자와의 협력을 통해 최상의\n성능을 발휘하는 코드를 구현합니다.',
  },
}

export const ChallengerSection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.PLAN)

  return (
    <Section className={css.challenger}>
      <Section.Header title="cmc challenger" description={'CMC는 기획자 디자이너 개발자가\n함께 모여 성장합니다'} />
      <div className={css.role}>
        <nav>
          <button type="button" className={clsx({ [css.active_button]: currentTab === Tab.PLAN })}>
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
        <div className={css.card}>
          <h3>
            {cards[currentTab].name}
            {currentTab === Tab.CLIENT && <span> (Web . iOS . AOS)</span>}
          </h3>
          <p>{cards[currentTab].description}</p>
        </div>
        <div className={css.card_grid}>
          <div>ho</div>
          <div>ho</div>
          <div>ho</div>
          <div>ho</div>
        </div>
      </div>
    </Section>
  )
}
