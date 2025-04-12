import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'

import { Br, Section } from '@/components'

import * as css from './activity-section.module.scss'

interface CardProps {
  chapter: string
  title: string
  description: React.ReactNode
  image: React.ReactNode
}

export const Card = ({ chapter, title, description, image }: CardProps) => {
  return (
    <div className={css.card}>
      {image}
      <div className={css.textContainer}>
        <div>
          <p className={css.chapter}>{chapter}</p>
          <h2 className={css.title}>{title}</h2>
        </div>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  )
}

export const ActivitySection = () => {
  return (
    <Section className={css.main}>
      {/* 데스크탑용 배경 이미지 */}
      <StaticImage className={css.backgroundImg} src="./images/background.png" alt="이미지 설명" />

      {/* 모바일용 배경 이미지 */}
      <StaticImage className={css.backgroundImgMobile} src="./images/background_mobile.png" alt="이미지 설명" />

      {/* TODO: 흰색 텍스트로 변경 */}
      <Section.Head title="매 기수 진행되는 정기 활동들" white />

      <div className={css.cardContainer}>
        <StaticImage className={css.fireImage} src="./images/fire.png" alt="fire" />
        <StaticImage className={css.labtopImage} src="./images/labtop.png" alt="labtop" />
        <Card
          chapter="CHAPTER.1"
          title="UMC와 연합 해커톤"
          image={<StaticImage className={css.image} src="./images/img1.png" />}
          description={
            <>
              CMC 정기세션 이전 진행되는 세션으로 단시간 내 IT 프로덕트를 <Br desktop />
              설계하고, 구현하는 경험을 가집니다.
            </>
          }
        />

        <Card
          chapter="CHAPTER.2"
          title="모각작"
          image={<StaticImage className={css.image} src="./images/img2.png" />}
          description={
            <>
              모든 파트가 함께 모여 현재까지의 프로젝트 진척도를 점검합니다. <Br desktop />
              또한, 챌린저 간 진행되는 UT를 통해 프로덕트 사용성을 객관적으로 <Br desktop />
              평가하고 이를 반영하여 보완합니다.
            </>
          }
        />

        <Card
          chapter="CHAPTER.3"
          title="런칭데이"
          image={<StaticImage className={css.image} src="./images/img3.png" />}
          description={
            <>
              데모데이 개최 이전에 CMC 전체 챌린저들을 대상으로 런칭된 프로덕트를 <Br desktop />
              소개합니다. 해당 세션을 통해 프로덕트 구현 과정과 추후 프로덕트 <Br desktop />
              방향성에 대해 공유합니다.
            </>
          }
        />

        <Card
          chapter="CHAPTER.4"
          title="데모데이"
          image={<StaticImage className={css.image} src="./images/img4.png" />}
          description={
            <>
              VC와 일반 참가자들을 대상으로 부스를 운영하며 지금까지 제작한 <Br desktop />
              프로덕트를 소개하고 홍보합니다. 데모데이를 통해 초기 사용자를 <Br desktop />
              모집하고, 런칭된 프로덕트의 시장성을 검증합니다.
            </>
          }
        />
      </div>
    </Section>
  )
}
