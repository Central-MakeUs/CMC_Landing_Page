import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import * as css from './main.module.scss'

interface Props extends PropsWithChildren {
  className?: string
}

export const Main = ({ className, children }: Props) => {
  return <main className={clsx(css.main, className)}>{children}</main>
}
