import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="description" content="우리만의 룰을 세워 세상을 바꾸는 조직, CMC" />
        <meta name="image" content="/meta/image-og.png"></meta>
        <meta property="og:title" content="CMC" />
        <meta property="og:description" content="우리만의 룰을 세워 세상을 바꾸는 조직, CMC" />
        <meta property="og:image" content="/meta/image-og.png" />
        <meta property="og:url" content="https://cmc.makeus.in" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:type" content="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'CMC',
                url: 'https://cmc.makeus.in',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'CMC',
                url: 'https://cmc.makeus.in',
                logo: 'https://cmc.makeus.in/favicon-48x48.png',
                description: '우리만의 룰을 세워 세상을 바꾸는 조직, CMC',
              },
            ]),
          }}
        />
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
