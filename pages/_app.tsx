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
      <div className="bg-cover" />
      {apiBaseUrl && <Component {...pageProps} />}
      <LoginPopup />
    </>
  )
}
export default MyApp
