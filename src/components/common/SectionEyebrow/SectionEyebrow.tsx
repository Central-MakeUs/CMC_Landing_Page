interface SectionEyebrowProps {
  children: string
}

export default function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <p className="flex items-center gap-2 font-display text-sm leading-[19.6px] text-gray-600">
      <span aria-hidden="true" className="size-2 bg-blue-600" />
      {children}
    </p>
  )
}
