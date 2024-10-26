import clsx from 'clsx'
import { HeadProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

import { ScrollRevealContainer, Section, Seo, AuraEffect } from '@/components'
import { Main } from '@/layouts'

import { Cards, Tab } from './constants'
import * as css from './faq.module.scss'

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

const FaqPage = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.DOCUMENT)

  return (
    <Main className={css.main}>
      <ScrollRevealContainer>
        <Section className={css.section}>

          <AuraEffect />

          <Section.Head title="FAQ" />

          <nav>
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

          <ul className={css.cards}>
            {Cards[currentTab].qnas.map((qna) => (
              <li key={qna.question} className={css.card}>
                <p className={css.question}>{qna.question}</p>
                <p className={css.answer}>{qna.answer}</p>
              </li>
            ))}
          </ul>

          <div className={css.sns_group}>
            <a
              href="https://www.instagram.com/cmc__official/"
              target="_blank"
              rel="noreferrer"
              className={css.sns_button}
            >
              <StaticImage
                src="./images/sns-insta.png"
                alt="CMC 인스타 스토리 확인하러 가는 버튼"
                className={css.sns_icon}
              />
              
              <StaticImage
                src="./images/sns-insta-blue.png"
                alt="CMC 인스타 스토리 확인하러 가는 버튼"
                className={css.sns_icon_mobile}
              />
              CMC 인스타 스토리 확인
            </a>
            <a href="http://pf.kakao.com/_xcwDJT" target="_blank" rel="noreferrer" className={css.sns_button}>
              <StaticImage src="./images/sns-kakao.png" alt="CMC 카카오톡 문의하기 버튼" className={css.sns_icon_kakao} />
              <StaticImage src="./images/sns-kakao-blue.png" alt="CMC 카카오톡 문의하기 버튼" className={css.sns_icon_kakao_mobile} objectFit='contain'/>
              카카오톡 문의
            </a>
          </div>

          <div className={css.space} />
        </Section>
      </ScrollRevealContainer>
    </Main>
  )
}

export default FaqPage

export const Head = ({ location: { pathname } }: HeadProps) => {
  return <Seo pathname={pathname} />
}
