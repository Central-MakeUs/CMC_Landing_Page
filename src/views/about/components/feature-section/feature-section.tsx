import { ReactNode } from 'react'

import { AuraEffect, Br, Section } from '@/components'

import * as css from './feature-section.module.scss'

interface FeatureCardProps {
  title: string
  description?: string
  figure: string
}

const FeatureCard = ({ title, description = '', figure }: FeatureCardProps) => {
  return (
    <div className={css.card}>
      <p className={css.title}>{title}</p>
      <p className={css.figure}>{figure}</p>
      <span>{`\n${description}`}</span>
    </div>
  )
}

const Title: ReactNode = (
  <>
    각 분야 검증된 <span>'전문가'</span>들의 모임
    <Br mobile desktop />
    수익형 앱 런칭 동아리 CMC로
    <Br mobile /> 여러분을 초대합니다.
  </>
)

export const FeatureSection = () => {
  return (
    <Section>
      <AuraEffect />
      
      <div className={css.space} />
      <Section.Head title={Title} />
      <div className={css.cards}>
        <FeatureCard title={`14기`} figure={`기수가 증명하는\n꾸준함’`} />
        <FeatureCard title="4,000명" figure={`함께 성장하는\n‘Ne(o)rdinary 네트워크’`} />
        <FeatureCard
          title="200개 +"
          figure={`런칭된 어플 수로 증명하는 ‘전문성’`}
          description="(Android, iOS 스토어)"
        />
        <FeatureCard title="100%" description="(13기,14기)" figure={`최근 1년간 런칭률`} />
      </div>
    </Section>
  )
}
