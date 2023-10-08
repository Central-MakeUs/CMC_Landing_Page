import clsx from 'clsx'
import type { ReactNode } from 'react'

import * as css from './section.module.scss'

type Props = {
  className?: string
  children: ReactNode
}

export const Section = ({ className, children }: Props) => {
  return <section className={clsx(css.section, className)}>{children}</section>
}

type HeaderProps = {
  title: string
  description: string
}

Section.Header = ({ title, description }: HeaderProps) => {
  return (
    <>
      <h2 className={css.heading}>{title}</h2>
      <p className={css.description}>{description}</p>
      <div className={css.background_container}>
        <div className={css.background} />
      </div>
    </>
  )
}
