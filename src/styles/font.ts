import localFont from 'next/font/local'

export const yapariTrial = localFont({
  src: [
    {
      path: '../../public/font/YapariTrial-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/YapariTrial-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-yapari-trial',
})
