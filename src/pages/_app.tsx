import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>nextjs-typescript-svgr-helper</title>
        <meta name="title" content="nextjs-typescript-svgr-helper" />
        <meta
          name="description"
          content="Easily start your Next.js project with already configured Prettier, Eslint, Typescript, svgr, Sass"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> 180x180 */}
        {/* <link rel="manifest" href="/manifest.webmanifest" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
