import clsx from 'clsx'

import Star from '@/images/star.svg'

import { Section } from '../section'
import * as css from './features-section.module.scss'

export const FeaturesSection = () => {
  return (
    <Section className={css.features}>
      <Section.Header
        title="cmc features"
        description={'CMC는 실력있는 리더진, 챌린저들과\n다양한 경험을 쌓을 수 있습니다'}
      />
      <div className={css.grid_container}>
        <div className={css.experience}>
          <h3>실력있는 리더진</h3>
          <p>
            성공적인 런칭 노하우를 가진
            <br />
            리더진들이 여러분의 성공적인
            <br />
            런칭을 위해 도움을 드립니다.
          </p>
        </div>
        <div className={css.mobile_vertical_divider} />
        <div className={css.pc_vertical_divider} />
        <div className={css.experience}>
          <h3>네트워킹</h3>
          <p>
            CMC는 실력 있는 챌린저로
            <br />
            구성되어 있습니다.
            <br />
            이들과 네트워킹을 통해 훌륭한 인재들과 교류할 수 있으며 여러분의 성공적인 런칭을 위해 도움을 드립니다.
          </p>
        </div>
        <div className={css.mobile_horizontal_divider} />
        <div className={css.mobile_empty_space} />
        <div className={css.pc_vertical_divider} />
        <div className={css.mobile_horizontal_divider} />
        <div className={css.experience}>
          <h3>기획 멘토링</h3>
          <p>
            기획안의 완성도와 비지니스
            <br />
            모델 디벨롭을 위한 현직
            <br />
            전문가의 피드백을 제공합니다.
          </p>
        </div>
        <div className={css.mobile_vertical_divider} />
        <div className={css.pc_horizontal_divider} />
        <div className={css.pc_empty_space} />
        <div className={css.pc_horizontal_divider} />
        <div className={css.pc_horizontal_divider} />
        <div className={css.pc_horizontal_space}>
          <div className={css.pc_horizontal_divider} />
          <Star />
        </div>
        <div className={css.experience}>
          <h3>GUI 멘토링</h3>
          <p>UI/UX를 개선하기 위한 구체적인 방안을 현직 전문가의 피드백을 제공합니다.</p>
        </div>
        <div className={css.mobile_horizontal_divider} />
        <div className={css.pc_vertical_divider} />
        <div className={css.mobile_empty_space} />
        <div className={clsx(css.mobile_horizontal_divider, css.end)} />
        <div className={css.experience}>
          <h3>개발 컨퍼런스</h3>
          <p>지식을 공유하면 성장할 수 있는 만큼,우리가 우리의 지식을 공유하는 과정에서도 더욱 성장할 수 있습니다.</p>
        </div>
        <div className={css.pc_vertical_divider} />
        <div className={css.mobile_vertical_divider} />
        <div className={css.experience}>
          <h3>데모데이</h3>
          <p>VC 및 다양한 기업 관계자들이 참여하는 데모데이에서 CMC 활동을 통해 만든 프로덕트를 홍보합니다.</p>
        </div>
      </div>
    </Section>
  )
}
