import Link from 'next/link'

import { APPLY_LABEL } from '@/constants/recruit'
import { ROUTES } from '@/lib/site'

import HeaderLogoLink from './HeaderLogoLink'
import HeaderNavLink from './HeaderNavLink'
import HeaderShell from './HeaderShell'
import MobileMenu from './MobileMenu'
import { NAVIGATION } from './navigation'

export default function Header() {
  return (
    <HeaderShell>
      <nav aria-label="주요 메뉴" className="mx-auto flex h-full items-center justify-between">
        <HeaderLogoLink />

        <ul className="hidden items-center gap-16.5 text-base font-bold tracking-[-0.02em] md:flex">
          {NAVIGATION.map(({ href, label }) => (
            <li key={href}>
              <HeaderNavLink href={href} label={label} />
            </li>
          ))}
        </ul>

        <Link
          className="hidden rounded-[5px] bg-white px-4 py-1.25 text-base font-semibold tracking-[-0.02em] text-navy-900 transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5 md:block header-light:bg-navy-900 header-light:text-white"
          href={ROUTES.apply}
        >
          {APPLY_LABEL}
        </Link>

        <MobileMenu />
      </nav>
    </HeaderShell>
  )
}
