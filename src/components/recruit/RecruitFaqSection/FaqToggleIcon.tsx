interface FaqToggleIconProps {
  className?: string
}

export default function FaqToggleIcon({ className }: FaqToggleIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      {/* 시안 두께는 1.6px이지만 픽셀에 맞지 않아 흐려지고 중심이 어긋나 보여서 2px로 그린다. */}
      <path d="M11 9H18V11H11V18H9V11H2V9H9V2H11V9Z" fill="currentColor" />
    </svg>
  )
}
