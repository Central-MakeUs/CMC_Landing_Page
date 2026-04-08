interface HamburgerIconProps {
  color?: string
}

export default function HamburgerIcon({ color = 'white' }: HamburgerIconProps) {
  return (
    <svg width={16} height={14} viewBox="0 0 16 14" fill="none" aria-hidden>
      <line x1="0" y1="1" x2="16" y2="1" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="0" y1="7" x2="16" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="0" y1="13" x2="16" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
