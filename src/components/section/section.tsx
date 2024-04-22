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

type HeaderProps = {
  title: string
  description: string
}

const Header = ({ title, description }: HeaderProps) => {
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

type HeadProps = {
  title: ReactNode
  description?: string
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
  Header: React.ComponentType<HeaderProps>
  Head: React.ComponentType<HeadProps>
}

export const Section = SectionComponent as ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>> & WithHeader
Section.Header = Header
Section.Head = Head
