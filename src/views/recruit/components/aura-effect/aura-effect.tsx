import { AuraCircle } from '@/components'

import * as css from './aura-effect.module.scss'

export const AuraEffect = () => {
  return (
    <>
      <div className={css.desktop}>
        <AuraCircle size="80%" top="0%" left="10%" opacity={0.2} />
        <AuraCircle size="80%" top="30%" left="10%" opacity={0.2} />
      </div>

      <div className={css.mobile}>
        <AuraCircle size="180%" top="0%" left="-40%" opacity={0.2} />
        <AuraCircle size="180%" top="30%" left="-40%" opacity={0.2} />
      </div>
    </>
  )
}
