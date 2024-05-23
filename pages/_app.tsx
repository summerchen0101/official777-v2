import ErrorBoundary from '@/components/ErrorBoundary'
import { LoginRes } from '@/services/useLogin'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { showLoginPopup } from '@/utils'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const setClientEnv = useStore((s) => s.setClientEnv)
  const apiBaseUrl = useStore((s) => s.clientEnv.apiBaseUrl)
  // const getConfig = async () => {
  //   const config = await fetch('/config/env.json').then((res) => res.json())
  //   setClientEnv(config)
  // }

  // useEffect(() => {
  //   getConfig()
  // }, [])

  useEffect(() => {
    if (router.query.to) {
      showLoginPopup()
    }
  }, [router.query.to])

  useEffect(() => {
    try {
      if ($) {
        $('#navbar-menu').collapse('hide')
        $('.navbar-toggle > i.fa').removeClass('fa-times')
        $('.navbar-toggle > i.fa').addClass('fa-bars')
        $('body').removeClass('side-right')
        //移除SCROLL鎖//
        $('html').removeClass('noscroll')
        $('body').removeClass('noscroll')
      }
    } catch (err) {
      console.log(err)
    }
  }, [router])

  const setTokenInfo = useUserStore((s) => s.setTokenInfo)

  useEffect(() => {
    if (router.query.errCode) {
      if (router.query.errCode === '403012') {
        alert('註冊已達上限，請洽客服')
      } else {
        alert(router.query.errMsg)
      }
      return
    }
    if (router.query.accessToken) {
      const res = router.query as unknown as LoginRes
      console.log(router.query)
      console.log(router.query.isNewOAuthAccount === 'true')
      if (router.query.isNewOAuthAccount === 'true') {
        alert('新用戶，已登入成功')
      }

      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      if (router.query.to) {
        router.push(router.query.to as string)
      }
      console.log('before clean')
      delete router.query.accessToken
      delete router.query.refreshToken
      delete router.query.expiresIn
      delete router.query.to
      router.replace({ query: router.query })
    }
  }, [router, setTokenInfo])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Language" content="zh-tw" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta
          name="description"
          content="獎金最高，開獎最多！韓瑜帶你嗨不停！大獎超敢開，紅包天天送，讓你輕鬆做頭家！公正公開，金幣送不停!現在登入先送十連抽！"
        />
        <meta name="keywords" content="大頭家娛樂城、韓瑜、麻將、手遊、3D" />
        <meta name="author" content="七七七科技股份有限公司" />
        <meta name="copyright" content="本網頁為七七七科技版權所有" />
        <meta name="google" content="notranslate" />
        <meta
          name="google-site-verification"
          content="7VRXNQq22UWXrSOo2X9lV-8KVjRKl3K_kX4FyDDnGnI"
        />
        {/* <meta name="next-head-count" content="19" /> */}
        <meta property="fb:pages" content="101091025701333" />
        <meta property="fb:app_id" content="327137328773940" />
        <meta property="og:title" content="七七七娛樂城" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.777.com" />
        <meta property="og:image" content="" />
        <title>七七七娛樂城</title>
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="bookmark" href="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" />
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
      {apiBaseUrl && (
        <ErrorBoundary router={router}>
          <Component {...pageProps} />
        </ErrorBoundary>
      )}

      <script defer src="/js/jquery-1.11.3.min.js"></script>
      <script defer src="/js/bootstrap.js"></script>
      {/* <script defer src="/js/bootsnav.js"></script> */}
      <script defer src="/js/backtop.js"></script>

      <script defer src="/js/slick.js"></script>

      <script>
        {/* $(function(){
			$('#myCarousel2').carousel({
				interval: 3000
			});
		}); */}
      </script>

      <script defer src="/js/wow.js"></script>

      <script defer src="/js/newstabs.js"></script>

      <script defer src="/js/fancybox.js"></script>
      <script defer src="/js/youtublink.js"></script>
      <script defer src="/js/popup.js"></script>
    </>
  )
}
export default MyApp
