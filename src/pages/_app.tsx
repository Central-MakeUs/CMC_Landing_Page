import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { yapariTrial } from '@/styles/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={yapariTrial.variable}>
      <Component {...pageProps} />
    </div>
  )
}
