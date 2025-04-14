import { StaticImage } from 'gatsby-plugin-image'

import { AuraCircle } from '@/components'

import { Section } from '../../../../components/section'
import * as css from './supports-section.module.scss'

export const SupportsSection = () => {
  return (
    <Section>
      <div className={css.space} />

      <Section.Head
        title={<p className={css.header}>SUPPORTS</p>}
        description="CMC의 공식 후원사 입니다."
        isSunMotterFont
      />

      <div className={css.mobile}>
        <AuraCircle size="180%" top="15%" left="-40%" opacity={0.2} />
      </div>

      <div className={css.supports}>
        <div className={css.cover}>
          <StaticImage src="./images/soft-squared.png" alt="soft squared" className={css.supports_company} />
        </div>
        <div className={css.cover}>
          <StaticImage src="./images/d-camp.png" alt="d camp" className={css.supports_company} />
        </div>
        <div className={css.cover}>
          <StaticImage src="./images/gridge.png" alt="gridge" className={css.supports_company} />
        </div>
      </div>
    </Section>
  )
}
