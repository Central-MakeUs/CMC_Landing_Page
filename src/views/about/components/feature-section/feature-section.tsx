import { ReactNode } from 'react'

import { Section } from '@/components'

import * as css from './feature-section.module.scss'

interface FeatureCardProps {
  title: string
  description?: string
  figure: string
}

const FeatureCard = ({ title, description = '', figure }: FeatureCardProps) => {
  return (
    <div className={css.card}>
      <p className={css.title}>
        {title}
        <span>{`\n${description}`}</span>
      </p>
      <p className={css.figure}>{figure}</p>
    </div>
  )
}

const Title: ReactNode = (
  <>
    각 분야 검증된 <span>&apos;전문가&apos;</span>들의 모임
    <br />
    수익형 앱 런칭 동아리 CMC로 여러분을 초대합니다.
  </>
)

export const FeatureSection = () => {
  return (
    <Section>
      <div className={css.space} />
      <Section.Head title={Title} />
      <div className={css.cards}>
        <FeatureCard title={`기수가 증명하는\n‘꾸준함’`} figure="14기" />
        <FeatureCard title={`함께 성장하는\n‘Ne(o)rdinary 네트워크’`} figure="4,000명" />
        <FeatureCard
          title={`런칭된 어플 수로 증명하는\n‘전문성’`}
          description="(Android, iOS 스토어)"
          figure="200개 +"
        />
        <FeatureCard title={`최근 1년간\n런칭률`} description="(13기,14기)" figure="100%" />
      </div>
    </Section>
  )
}
