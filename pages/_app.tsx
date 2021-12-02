import LoginPopup from '@/components/LoginPopup'
import { LoginRes } from '@/services/useLogin'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const setApiBaseUrl = useStore((s) => s.setApiBaseUrl)
  const apiBaseUrl = useStore((s) => s.apiBaseUrl)
  const getConfig = useCallback(async () => {
    const config = await fetch('/config/env.json').then((res) => res.json())
    setApiBaseUrl(config.apiBaseUrl)
  }, [setApiBaseUrl])

  useEffect(() => {
    getConfig()
  }, [getConfig])

  const router = useRouter()
  const setTokenInfo = useUserStore((s) => s.setTokenInfo)

  useEffect(() => {
    if (router.query.accessToken) {
      const res = router.query as unknown as LoginRes
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      if (router.query.to) {
        router.push(router.query.to as string)
      }
      console.log('before clean')
      router.replace({ query: {} })
    }
  }, [router, setTokenInfo])
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
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PLXNR9C');
`}
      </Script> */}
      <div className="bg-cover" />
      {apiBaseUrl && <Component {...pageProps} />}
      <LoginPopup />
    </>
  )
}
export default MyApp
