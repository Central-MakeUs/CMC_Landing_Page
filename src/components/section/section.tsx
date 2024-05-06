import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import React, { forwardRef, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'

import * as css from './section.module.scss'

type Props = {
  className?: string
  children: ReactNode
}

const SectionComponent = forwardRef<HTMLDivElement, Props>(({ className, children }, ref) => {
  return (
    <section ref={ref} className={clsx(css.section, className)}>
      {children}
    </section>
  )
})

type HeadProps = {
  title: ReactNode
  description?: ReactNode
}

const Head = ({ title, description }: HeadProps) => {
  return (
    <>
      <StaticImage src="./images/star.png" alt="" className={css.star} placeholder="blurred" />
      <h2 className={css.head}>{title}</h2>
      {description && <p className={css.desc}>{description}</p>}
    </>
  )
}

interface WithHeader {
  Head: React.ComponentType<HeadProps>
}

export const Section = SectionComponent as ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>> & WithHeader
Section.Head = Head
