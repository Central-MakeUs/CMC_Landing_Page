import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import HamburgerIcon from '@/components/common/icons/HamburgerIcon'

export type HeaderActiveNav = 'project' | 'recruit' | 'faq'
export type HeaderVariant = 'dark' | 'light'

interface HeaderProps {
  activeNav?: HeaderActiveNav
  variant?: HeaderVariant
}

function navLinkClass(isActive: boolean, variant: HeaderVariant) {
  const base = 'text-[16px] font-semibold leading-[24px] tracking-[-0.32px] hover:opacity-80'
  if (isActive) return `${base} text-primary-light-03`
  return variant === 'light' ? `${base} text-black` : `${base} text-gray-50`
}

function mobileNavLinkClass(isActive: boolean) {
  const base = 'text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-center hover:opacity-80'
  return isActive ? `${base} text-primary-light-03` : `${base} text-white`
}

export default function Header({ activeNav, variant = 'dark' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="backdrop-blur-[20px] bg-white/12">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-3 md:px-6 md:py-[9px] xl:px-[200px]">
          <Link href="/" aria-label="CMC 홈" className="shrink-0" onClick={closeMenu}>
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="CMC"
              className="h-[24px] w-[24px] md:h-[30px] md:w-[30px]"
            />
          </Link>

          <div className="hidden items-center gap-[54px] md:flex">
            <Link href="/project" className={navLinkClass(activeNav === 'project', variant)}>
              프로젝트
            </Link>
            <Link href="/recruit" className={navLinkClass(activeNav === 'recruit', variant)}>
              모집안내
            </Link>
            <Link href="/faq" className={navLinkClass(activeNav === 'faq', variant)}>
              FAQ
            </Link>
          </div>

          <Link
            href="/apply"
            className={`hidden shrink-0 rounded-[5px] px-[15px] py-[5px] text-center text-[16px] font-semibold leading-[24px] tracking-[-0.32px] md:block ${
              variant === 'light'
                ? 'bg-black/10 text-black hover:bg-black/20'
                : 'bg-white/20 text-white hover:bg-white/26'
            }`}
          >
            지원하기
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-6 w-6 shrink-0 items-center justify-center md:hidden"
          >
            <HamburgerIcon color={variant === 'light' ? 'white' : 'var(--black)'} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, overflow: 'hidden' }}
            animate={{ height: 'auto', overflow: 'hidden' }}
            exit={{ height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full backdrop-blur-[50px] bg-white/20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              <div className="flex flex-col items-center gap-5">
                <Link href="/project" className={mobileNavLinkClass(activeNav === 'project')}>
                  프로젝트
                </Link>
                <Link href="/recruit" className={mobileNavLinkClass(activeNav === 'recruit')}>
                  모집안내
                </Link>
                <Link href="/faq" className={mobileNavLinkClass(activeNav === 'faq')}>
                  FAQ
                </Link>
              </div>
              <Link
                href="/apply"
                className="w-full max-w-[85px] rounded-[5px] bg-primary-light-04 px-[15px] py-[5px] text-center text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-white hover:opacity-90"
              >
                지원하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
