import { ReactNode } from 'react'

import { AuraEffect, Br, Section } from '@/components'

import * as css from './feature-section.module.scss'

interface CardProps {
  title: string
  figure: React.ReactNode
  description?: string
}

const Card = ({ title, figure, description }: CardProps) => {
  return (
    <div className={css.card}>
      <p className={css.title}>{title}</p>
      <p className={css.figure}>{figure}</p>
      <p className={css.description}>{description}</p>
    </div>
  )
}

export const FeatureSection = () => {
  return (
    <Section>
      <AuraEffect />

      <div className={css.space} />
      <Section.Head
        title={
          <>
            각 분야 검증된 <span>'전문가'</span>들의 모임
            <Br mobile desktop />
            수익형 앱 런칭 동아리 CMC로
            <Br mobile /> 여러분을 초대합니다.
          </>
        }
      />

      <div className={css.cards}>
        <Card
          title="16기"
          figure={
            <>
              기수가 증명하는
              <Br desktop /> ‘꾸준함’
            </>
          }
        />

        <Card
          title="4,000명"
          figure={
            <>
              함께 성장하는
              <Br mobile desktop />
              ‘Ne(o)rdinary 네트워크’
            </>
          }
        />

        <Card
          title="200개 +"
          figure={
            <>
              런칭된 어플 수로
              <Br desktop /> 증명하는 '전문성'
            </>
          }
          description="(Android, iOS 스토어)"
        />

        <Card
          title="98%"
          figure={
            <>
              최근 3년간
              <Br desktop /> 런칭률
            </>
          }
          // description="(15기,16기)"
        />
      </div>
    </Section>
  )
}
