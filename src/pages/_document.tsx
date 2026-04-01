import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="우리만의 룰을 세워 세상을 바꾸는 조직, CMC" />
        <meta name="image" content="/meta/image-og.png"></meta>
        <meta name="og:title" content="CMC"></meta>
        <meta name="og:description" content="우리만의 룰을 세워 세상을 바꾸는 조직, CMC"></meta>
        <meta name="og:image" content="/meta/image-og.png"></meta>
        <meta name="og:url" content="https://cmc.makeus.in"></meta>
        <meta name="og:type" content="website"></meta>
        <meta name="og:locale" content="ko_KR"></meta>
        <meta name="og:image:type" content="image/png"></meta>
        <title>CMC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
