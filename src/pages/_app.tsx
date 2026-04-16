import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { yapariTrial } from '@/styles/font'
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CMC</title>
      </Head>
      <GoogleAnalytics gaId="G-N6KW5CY5YH" />
      <div className={yapariTrial.variable}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
