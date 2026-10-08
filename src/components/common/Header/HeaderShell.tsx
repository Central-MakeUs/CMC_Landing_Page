import type { ReactNode } from 'react'

type HeaderShellProps = Readonly<{
  children: ReactNode
}>

/** 전 페이지에서 같은 파란 배경을 유지하는 고정 헤더 */
export default function HeaderShell({ children }: HeaderShellProps) {
  return <header className="fixed inset-x-0 top-0 z-30 h-12 bg-blue-400 px-5 md:h-15 md:px-15.5">{children}</header>
}
