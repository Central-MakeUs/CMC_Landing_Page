import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { yapariTrial } from '@/styles/font'
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault()

    const disableImgDrag = () => {
      document.querySelectorAll('img').forEach((img) => {
        img.setAttribute('draggable', 'false')
      })
    }

    disableImgDrag()

    const observer = new MutationObserver(disableImgDrag)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('contextmenu', prevent)
    document.addEventListener('dragstart', prevent)

    return () => {
      observer.disconnect()
      document.removeEventListener('contextmenu', prevent)
      document.removeEventListener('dragstart', prevent)
    }
  }, [])

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
