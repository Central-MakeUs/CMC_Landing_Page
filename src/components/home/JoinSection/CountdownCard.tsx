interface CountdownCardProps {
  label: string
  value: string
}

export default function CountdownCard({ label, value }: CountdownCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-navy-975 px-11 py-3.5 text-center xl:gap-3 xl:py-5">
      <dt className="w-full text-xs leading-[normal] font-semibold text-gray-200 xl:text-lg">{label}</dt>
      <dd className="font-numeric text-[32px] leading-12 font-bold text-white xl:text-[52px] xl:leading-18">{value}</dd>
    </div>
  )
}
