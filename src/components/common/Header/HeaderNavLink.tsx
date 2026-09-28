'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { RoutePath } from '@/lib/site'

import { isActivePath } from './navigation'

type HeaderNavLinkProps = Readonly<{
  href: RoutePath
  label: string
}>

export default function HeaderNavLink({ href, label }: HeaderNavLinkProps) {
  const isActive = isActivePath(usePathname(), href)

  return (
    <Link
      className={
        isActive
          ? 'text-white header-light:text-navy-900'
          : 'text-blue-200 transition-colors hover:text-white focus-visible:text-white header-light:text-gray-500 header-light:hover:text-navy-900 header-light:focus-visible:text-navy-900'
      }
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}
