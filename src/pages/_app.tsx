import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { yapariTrial } from '@/styles/font'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-N6KW5CY5YH" />
      <div className={yapariTrial.variable}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
