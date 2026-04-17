interface ArrowIconProps {
  size?: number | string
  color?: string
  className?: string
}

export default function ArrowIcon({ size = 24, color = 'currentColor', className }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke={color}
        strokeWidth="2.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
