import { Section } from '../section'
import * as css from './intro-section.module.scss'

export const IntroSection = () => {
  return (
    <Section className={css.intro}>
      <Section.Header
        title="introduction"
        description={'우리만의 룰을 세워 세상을 바꾸는\n우리는 CMC ‘챌린저’입니다'}
      />
      <div className={css.grid_container}>
        <div>
          <span>현재까지 CMC의 팀</span>
          <span>80+</span>
        </div>
        <div>
          <span>
            지금까지 런칭된 앱 수<br />
            (Android, iOS 스토어)
          </span>
          <span>130+</span>
        </div>
        <div>
          <span>CMC앱 전체 다운로드 수</span>
          <span>5000+</span>
        </div>
        <div>
          <span>CMC 챌린저의 외주연계 횟수</span>
          <span>100+</span>
        </div>
      </div>
    </Section>
  )
}
