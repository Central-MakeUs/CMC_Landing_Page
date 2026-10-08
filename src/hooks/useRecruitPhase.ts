'use client'

import { useSyncExternalStore } from 'react'

import type { RecruitPhase } from '@/constants/recruit'
import { getRecruitPhase } from '@/utils/recruit'

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000)
  return () => clearInterval(id)
}

function getSnapshot() {
  return getRecruitPhase(Date.now())
}

/** 현재 모집 단계. 서버와 첫 렌더에서는 서버가 넘긴 initialPhase를 쓰고, 단계가 바뀔 때만 다시 그린다. */
export default function useRecruitPhase(initialPhase: RecruitPhase): RecruitPhase {
  return useSyncExternalStore(subscribe, getSnapshot, () => initialPhase)
}
