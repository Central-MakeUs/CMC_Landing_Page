import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import * as css from './glass-card.module.scss'

interface Props extends PropsWithChildren {
  extendClass?: string
}

export const GlassCard = ({ extendClass, children }: Props) => {
  return <div className={clsx(css.card, extendClass)}>{children}</div>
}
