'use client'

import { useLenis } from 'lenis/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useId, useRef, useState } from 'react'

import mobileMenuIcon from '@/assets/images/mobile-menu.svg'
import { APPLY_LABEL } from '@/constants/recruit'
import { ROUTES } from '@/lib/site'
import { cn } from '@/utils/cn'

import { isActivePath, NAVIGATION } from './navigation'

/*
 * 임시 모바일 메뉴
 * - TODO : 시안 나오면 디자인 수정
 */
export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const lenis = useLenis()
  const pathname = usePathname()
  const dialogId = useId()

  const openMenu = () => {
    dialogRef.current?.showModal()
    setIsOpen(true)
    // 메뉴가 열린 동안 뒤 페이지 스크롤 방지
    lenis?.stop()
  }

  const closeMenu = () => dialogRef.current?.close()

  // Esc, 닫기 버튼, 링크 클릭, 배경 클릭 모두 dialog의 close 이벤트를 실행
  const handleClose = () => {
    setIsOpen(false)
    lenis?.start()
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-label="메뉴 열기"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        className="-mr-2 p-2 md:hidden"
      >
        <Image src={mobileMenuIcon} width={24} height={24} alt="" unoptimized />
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-label="메뉴"
        onClose={handleClose}
        onClick={(event) => {
          // 안쪽 패널이 아니라 dialog 자신이 클릭됐다면 배경(backdrop)을 누른 것이다.
          if (event.target === event.currentTarget) closeMenu()
        }}
        className="m-0 w-full max-w-none bg-white p-0 text-gray-900 backdrop:bg-black/50 md:hidden"
      >
        <div className="px-5 pb-8">
          <div className="flex h-12 items-center justify-end">
            <button type="button" onClick={closeMenu} aria-label="메뉴 닫기" className="-mr-2 p-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="모바일 메뉴">
            <ul className="flex flex-col">
              {NAVIGATION.map(({ href, label }) => {
                const isActive = isActivePath(pathname, href)

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn('block py-3 text-lg font-bold tracking-[-0.02em]', !isActive && 'text-gray-900/50')}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Link
            href={ROUTES.apply}
            onClick={closeMenu}
            className="mt-6 block rounded-[5px] bg-gray-900 py-3 text-center text-base font-semibold tracking-[-0.02em] text-white"
          >
            {APPLY_LABEL}
          </Link>
        </div>
      </dialog>
    </>
  )
}
