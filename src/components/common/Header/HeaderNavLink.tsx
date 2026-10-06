'use client'

import Link from 'next/link'

import useCurrentPathname from '@/hooks/useCurrentPathname'
import type { RoutePath } from '@/lib/site'

import { isActivePath } from './navigation'

type HeaderNavLinkProps = Readonly<{
  href: RoutePath
  label: string
}>

export default function HeaderNavLink({ href, label }: HeaderNavLinkProps) {
  const isActive = isActivePath(useCurrentPathname(), href)

  return (
    <Link
      className={isActive ? 'text-white' : 'text-blue-200 transition-colors hover:text-white focus-visible:text-white'}
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}
