import { AnimatePresence, motion } from 'motion/react'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface CountdownCardProps {
  label: string
  value: number
  variant?: 'dark' | 'light'
}

export default function CountdownCard({ label, value, variant = 'dark' }: CountdownCardProps) {
  const display = pad(value)

  if (variant === 'light') {
    return (
      <div className="flex flex-1 flex-col items-center gap-[10px] overflow-hidden rounded-[16px] bg-white/40 px-[16px] pb-[16px] pt-[26px] shadow-[inset_4px_8px_16px_0px_rgba(255,255,255,0.45)] md:rounded-[32px] md:px-8 md:pb-7 md:pt-9">
        <div className="flex w-full flex-col items-stretch gap-[12px] text-center">
          <p className="text-[14px] font-medium leading-[1.5em] tracking-[-0.28px] text-white md:text-[20px] md:tracking-[-0.4px]">{label}</p>
          <div className="relative h-[45px] w-full overflow-visible md:h-[90px]">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={display}
                className="absolute inset-x-0 text-center text-[30px] font-bold leading-[1.5em] tracking-[-0.6px] text-gray-900 md:text-[60px] md:tracking-[-1.2px]"
                initial={{ y: -32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 32, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                suppressHydrationWarning
              >
                {display}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-1 flex-col items-center gap-3 rounded-[32px] px-8 pb-7 pt-9 text-center overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 rounded-[32px] bg-black" />
      <div className="absolute inset-0 rounded-[32px] shadow-[inset_4px_8px_20px_0px_rgba(255,255,255,0.3)]" />
      <p className="relative text-[20px] font-medium leading-normal tracking-[-0.4px] text-white/60">{label}</p>
      <div className="relative h-[90px] w-full overflow-visible">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={display}
            className="absolute inset-x-0 text-center text-[60px] font-bold leading-[1.5em] tracking-[-1.2px] text-primary-light-02"
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            suppressHydrationWarning
          >
            {display}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
