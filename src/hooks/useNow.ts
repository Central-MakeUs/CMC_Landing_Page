'use client'

import { useSyncExternalStore } from 'react'

// 1초 간격으로 확인하면 타이머 오차 때문에 가끔 숫자가 하나씩 건너뛴다.
// 값은 초 단위로 끊기 때문에 더 자주 확인해도 다시 그리는 건 1초에 한 번이다.
const TICK_MS = 250

function subscribe(callback: () => void) {
  const id = setInterval(callback, TICK_MS)
  return () => clearInterval(id)
}

function getSnapshot() {
  return Math.floor(Date.now() / 1000) * 1000
}

// 페이지는 빌드할 때 HTML로 만들어지므로 서버 시각을 쓰면 빌드 시점 값이 박힌다.
function getServerSnapshot() {
  return null
}

/** 현재 시각(ms). 1초마다 바뀌고, 서버와 첫 렌더에서는 null이다. */
export default function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
