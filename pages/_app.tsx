import LoginPopup from '@/components/LoginPopup'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mega Game Global Tech</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="bg-cover" />
      <Component {...pageProps} />
      <LoginPopup />
    </>
  )
}
export default MyApp
