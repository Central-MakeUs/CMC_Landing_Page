'use client'

import { useLenis } from 'lenis/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

import mobileMenuIcon from '@/assets/images/mobile-menu.svg'
import { RecruitApplyLink } from '@/components/common/RecruitApplyLink'
import type { RecruitPhase } from '@/constants/recruit'
import { cn } from '@/utils/cn'

import { isActivePath, NAVIGATION } from './navigation'

/*
 * 모바일 메뉴
 * - 헤더 바로 아래로 펼쳐지는 패널이다. 헤더는 가리지 않는다.
 * - Esc, 패널 밖 클릭, 링크 클릭으로 닫힌다.
 */
interface MobileMenuProps {
  recruitPhase: RecruitPhase
}

export default function MobileMenu({ recruitPhase }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const lenis = useLenis()
  const pathname = usePathname()
  const panelId = useId()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return

    // 메뉴가 열린 동안 뒤 페이지 스크롤 방지
    lenis?.stop()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      toggleRef.current?.focus()
    }
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return
      setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      lenis?.start()
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen, lenis])

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="-mr-2 p-2 md:hidden"
      >
        <Image src={mobileMenuIcon} width={24} height={24} alt="" loading="eager" unoptimized />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className={cn(
          'absolute inset-x-0 top-full flex flex-col items-center gap-7 bg-linear-to-b/srgb from-blue-400 to-blue-350 py-9.5 md:hidden',
          // 닫힌 동안은 invisible이라 Tab 이동과 스크린리더에서 빠진다. 닫힐 때도 transition이 끝난 뒤 숨는다.
          'transition-[opacity,translate,visibility] duration-200 ease-out motion-reduce:transition-none',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <nav aria-label="모바일 메뉴">
          <ul className="flex flex-col items-center gap-5 text-base leading-6 font-semibold tracking-[-0.02em]">
            {NAVIGATION.map(({ href, label }) => {
              const isActive = isActivePath(pathname, href)

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={isActive ? 'text-white' : 'text-blue-200'}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <RecruitApplyLink
          initialPhase={recruitPhase}
          onClick={closeMenu}
          className="rounded-[5px] bg-white px-3.75 py-1.25 text-base leading-6 font-semibold tracking-[-0.02em] text-navy-900"
        />
      </div>
    </>
  )
}
