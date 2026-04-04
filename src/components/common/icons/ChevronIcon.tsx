interface ChevronIconProps {
  className?: string
}

export default function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M1 1L6 5L11 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
