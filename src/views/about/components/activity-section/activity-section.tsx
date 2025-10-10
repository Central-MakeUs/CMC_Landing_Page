import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'

import { Br, Section } from '@/components'

import * as css from './activity-section.module.scss'

interface CardProps {
  number: string
  chapter: string
  title: string
  description: React.ReactNode
  image: React.ReactNode
  isReverse?: boolean
}

const NumberBackground = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 204" fill="none">
      <path d="M9 9L18 0H82H100V18V82V204H82H18H0L0 82V18L9 9Z" fill="#040508" />
    </svg>
  )
}

const MobileCenterGraphic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 329 1544"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M15.4375 0.5L0.5 14.7139V1543H328V0.5H15.4375Z"
        stroke="url(#paint0_linear_200_3693)"
        strokeOpacity="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_200_3693"
          x1="0.146994"
          y1="827.933"
          x2="328.414"
          y2="827.933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#669ECD" />
          <stop offset="1" stopColor="#8791A1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const Card = ({ number, chapter, title, description, image, isReverse }: CardProps) => {
  return (
    <div className={clsx(css.card, isReverse && css.cardReverse)}>
      <div className={clsx(css.cardInner, isReverse && css.cardInnerReverse)}>
        <div className={css.numberBox}>
          <span className={clsx(css.number, isReverse && css.numberReverse)}>{number}</span>
          <div className={clsx(css.dottedLine, isReverse && css.dottedLineReverse)}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={clsx(css.numberBackground, isReverse && css.numberBackgroundReverse)}>
            <NumberBackground />
          </div>
        </div>
        <div className={css.imageBox}>{image}</div>
      </div>
      <div className={css.whiteBox}>
        <div className={css.textContainer}>
          <div className={css.titleSection}>
            <p className={css.chapter}>{chapter}</p>
            <h2 className={css.title}>{title}</h2>
          </div>
          <p className={css.description}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export const ActivitySection = () => {
  return (
    <Section className={css.main}>
      <div className={css.head}>
        <Section.Head title="매 기수 진행되는 정기 활동들" white />
      </div>

      {/* 데스크탑용 배경 이미지 */}
      <div className={css.background} />

      <div className={css.cardContainer}>
        <div className={css.centerGraphic}>
          <StaticImage src="./images/center-graphic.svg" className={css.centerGraphicDesktop} alt="" />
          <div className={css.centerGraphicMobile}>
            <MobileCenterGraphic />
          </div>
        </div>
        <div className={css.cardWrapper}>
          <Card
            number="01"
            chapter="Chapter 01"
            title="UMC와 연합 해커톤"
            image={<StaticImage className={css.image} src="./images/IMG_5170.png" alt="UMC와 연합 해커톤" />}
            description={
              <>
                CMC 정기세션 이전 진행되는 세션으로 단시간 내 <Br desktop />
                IT 프로덕트를 설계하고, 구현하는 경험을 가집니다.
              </>
            }
          />
          <Card
            number="02"
            chapter="Chapter 02"
            title="모각작"
            image={<StaticImage className={css.image} src="./images/img8.jpeg" alt="모각작" />}
            description={
              <>
                모든 파트가 함께 모여 현재까지의 프로젝트 진척도를 <Br desktop />
                점검합니다. 또한, 챌린저 간 진행되는 UT를 통해 프로덕트 <Br desktop />
                사용성을 객관적으로 평가하고 이를 반영하여 보완합니다.
              </>
            }
            isReverse
          />
          <Card
            number="03"
            chapter="Chapter 03"
            title="네트워킹 데이"
            image={<StaticImage className={css.image} src="./images/img6.jpeg" alt="네트워킹 데이" />}
            description={
              <>
                팀 매칭 전, 챌린저들끼리 자유롭게 교류하며 서로를 알아갈 <Br desktop />
                수 있는 네트워킹 데이를 진행합니다. 다양한 게임과 회식을 <Br desktop />
                통해 어울릴 수 있으며, 유대감을 형성합니다.
              </>
            }
          />
          <Card
            number="04"
            chapter="Chapter 04"
            title="런칭데이"
            image={<StaticImage className={css.image} src="./images/img3.png" alt="런칭데이" />}
            description={
              <>
                데모데이 개최 이전에 CMC 전체 챌린저들을 대상으로 <Br desktop />
                런칭된 프로덕트를 소개합니다. 해당 세션을 통해 프로덕트 <Br desktop />
                구현 과정과 추후 프로덕트 방향성에 대해 공유합니다.
              </>
            }
            isReverse
          />
          <Card
            number="05"
            chapter="Chapter 05"
            title="데모데이"
            image={<StaticImage className={css.image} src="./images/img5.jpeg" alt="데모데이" />}
            description={
              <>
                VC와 일반 참가자들을 대상으로 부스를 운영하며 지금까지 <Br desktop />
                제작한 프로덕트를 소개하고 홍보합니다. 데모데이를 통해 <Br desktop />
                초기 사용자를 모집하고, 프로덕트의 시장성을 검증합니다.
              </>
            }
          />
        </div>
      </div>
    </Section>
  )
}
