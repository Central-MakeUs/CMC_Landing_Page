interface DoubleChevronRightIconProps {
  className?: string
}

/** » 모양 화살표. 색은 currentColor로 부모의 글자 색을 따라간다. */
export default function DoubleChevronRightIcon({ className }: DoubleChevronRightIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10.832 14.168L14.999 10.001L10.832 5.835M5 14.168L9.167 10.001L5 5.835"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
