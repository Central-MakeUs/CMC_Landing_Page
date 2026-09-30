interface RoleChipsProps {
  /** 목록 이름 (Framework, Keyword 등) */
  label: string
  items: readonly string[]
  /** 칩 앞에 '#'을 붙인다 */
  hash?: boolean
}

export default function RoleChips({ label, items, hash }: RoleChipsProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-3 text-[13px] leading-6 text-gray-750 lg:text-base">
      {items.map((item) => (
        <li key={item} className="rounded-[7px] bg-white/80 px-2.5 py-1 lg:px-3 lg:py-1.5">
          {hash ? (
            <span aria-hidden="true" className="mr-1.5">
              #
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  )
}
