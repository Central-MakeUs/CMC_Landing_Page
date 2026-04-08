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
      <div className="flex flex-1 flex-col items-center gap-[10px] overflow-hidden rounded-[32px] bg-white/40 px-8 pb-7 pt-9 shadow-[inset_4px_8px_16px_0px_rgba(255,255,255,0.45)]">
        <div className="flex w-[182px] flex-col items-stretch gap-[12px] text-center">
          <p className="text-[20px] font-medium leading-[1.5em] tracking-[-0.4px] text-white">{label}</p>
          <div className="relative h-[90px] w-full overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={display}
                className="absolute inset-x-0 text-center text-[60px] font-bold leading-[1.5em] tracking-[-1.2px] text-gray-900"
                initial={{ y: -32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 32, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
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
    <div className="relative flex flex-1 flex-col items-center gap-3 overflow-hidden rounded-[32px] px-8 pb-7 pt-9 text-center">
      <div aria-hidden="true" className="absolute inset-0 rounded-[32px] bg-black" />
      <div className="absolute inset-0 rounded-[32px] shadow-[inset_4px_8px_20px_0px_rgba(255,255,255,0.3)]" />
      <p className="relative text-[20px] font-medium leading-normal tracking-[-0.4px] text-white/60">{label}</p>
      <div className="relative h-[90px] w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={display}
            className="absolute inset-x-0 text-center text-[60px] font-bold leading-normal tracking-[-1.2px] text-primary-light-02"
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {display}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
