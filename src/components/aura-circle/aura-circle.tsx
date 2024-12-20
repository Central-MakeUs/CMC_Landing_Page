import { CSSProperties } from 'react'

import * as css from './aura-circle.module.scss'

interface Props {
  size?: string
  top?: string
  left?: string
  opacity?: number
}

export const AuraCircle = ({ size = '60%', top = '0%', left = '20%', opacity = 0.2 }: Props) => {
  const style: CSSProperties = {
    width: size,
    aspectRatio: '1',
    position: 'absolute',
    top,
    left,
    opacity,
    pointerEvents: 'none',
  }

  return <div className={css.round} style={style} />
}
