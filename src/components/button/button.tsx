import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import * as css from './button.module.scss'

interface Props extends PropsWithChildren {
  className?: string
}

export const Button = ({ className, children }: Props) => {
  return (
    <a
      href="https://forms.gle/LWfsozJbsrhkpyCr5"
      target="_blank"
      rel="noreferrer"
      className={clsx(css.button, className)}
    >
      {children}
    </a>
  )
}
