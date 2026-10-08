'use client'

import { useSyncExternalStore } from 'react'

const mediaQuery = '(prefers-reduced-motion: reduce)'

function subscribe(callback: () => void) {
  const media = window.matchMedia(mediaQuery)

  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(mediaQuery).matches
}

function getServerSnapshot() {
  return false
}

export default function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
