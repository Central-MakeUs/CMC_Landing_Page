import clsx from 'clsx'
import { PropsWithChildren, useEffect } from 'react'

import * as css from './scroll-reveal-container.module.scss'

interface Props extends PropsWithChildren {
  className?: string
}

export const ScrollRevealContainer = ({ className = '', children }: Props) => {
  useEffect(() => {
    const initObserver = () => {
      const options = {
        root: null,
        threshold: 0.2,
      }

      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(css.visible)
          }
        })
      }

      return new IntersectionObserver(observerCallback, options)
    }

    const myElements = document.querySelectorAll('.animateBox')
    const observer = initObserver()

    myElements.forEach((element) => {
      observer.observe(element)
    })
  }, [children])

  return <div className={clsx('animateBox', css.box, className)}>{children}</div>
}
