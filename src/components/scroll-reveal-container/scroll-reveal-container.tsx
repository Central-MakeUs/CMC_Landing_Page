import clsx from 'clsx'
import { PropsWithChildren, useEffect } from 'react'

import * as css from './scroll-reveal-container.module.scss'

interface Props extends PropsWithChildren {
  className?: string
}

/**
 * 스크롤이 해당 역영에 위치했을 때, 위로 올라오면서 등장하는 효과를 주는 컴포넌트
 *
 * before: opacity 0, translateY: 50px
 *  -> after: opacity: 1, translateY: 0px
 *
 * @component
 * @param {string} children 효과를 줄 자식 컴포넌트
 * @param {string} className 원하는 class가 있다면 추가할 수 있습니다.
 *
 * @example
 * <ScrollRevealContainer> // 효과를 줄 컴포넌트를 감싸주면 됩니다.
 *   <ExampleSection />
 * </ScrollRevealContainer>
 */
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
