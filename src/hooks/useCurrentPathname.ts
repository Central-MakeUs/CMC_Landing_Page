'use client'

import { usePathname } from 'next/navigation'

import { ROUTES } from '@/lib/site'

/** usePathname과 같다. Vercel에서 ISR로 다시 만든 홈은 경로가 '/index'로 들어와서 '/'로 맞춘다. */
export default function useCurrentPathname() {
  const pathname = usePathname()
  return pathname === '/index' ? ROUTES.home : pathname
}
