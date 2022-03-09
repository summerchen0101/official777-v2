import useLoginFirst from '@/hooks/useLoginFirst'
import { useStore } from '@/store/useStore'
import useCdnUrl from '@/hooks/useCdnUrl'
import { useRouter } from 'next/dist/client/router'
import React, { memo, ReactNode } from 'react'
import { BiDollar, BiDownload, BiHome } from 'react-icons/bi'
import { CgFacebook } from 'react-icons/cg'
import AppDownloadSideFloat from '../AppDownloadSideFloat'
import FooterNav from '../layout/FooterNav'
import LoginPopup from '../LoginPopup'
import SideBox from '../SideBox'
import Link from 'next/link'

function PageWrapper({ children }: { children: ReactNode }) {
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  const toCdnUrl = useCdnUrl()
  const router = useRouter()

  const handleRechargeClicked = useLoginFirst('/recharge')
  return (
    <div
      className="pt-[40%] pb-16 sm:pb-0 bg-contain lg:bg-top bg-no-repeat bg-[#2a1c44]"
      style={{
        backgroundImage: `url(${toCdnUrl(
          canRecharge
            ? '/event/newsyear_bg.jpg'
            : '/event/boss08_newsyear_bg.jpg',
        )})`,
      }}
    >
      <img
        src="/img/logo.png"
        alt=""
        className="hidden sm:block cursor-pointer h-24 mt-2 fixed top-0 drop-shadow-lg"
        onClick={() => router.push('/')}
      />
      {/* <PageBanner /> */}
      <div className="px-4 sm:px-10">{children}</div>
      <SideBox />
      <AppDownloadSideFloat />

      <LoginPopup />
      <div className="sm:hidden fixed bottom-0 left-0 bg-black/80 text-gray-300 w-full h-16 z-20 flex justify-around items-center">
        <Link passHref href="/mb/home">
          <a className="flex flex-col items-center gap-1">
            <BiHome className="text-2xl" />
            <span className="text-xs">回首頁</span>
          </a>
        </Link>
        <Link passHref href="/app-redirect">
          <a className="flex flex-col items-center gap-1">
            <BiDownload className="text-2xl" />
            <span className="text-xs">APP下載</span>
          </a>
        </Link>
        <Link passHref href="https://www.facebook.com/Online539">
          <a target="_blank" className="flex flex-col items-center gap-1">
            <CgFacebook className="text-2xl" />
            <span className="text-xs">粉絲專頁</span>
          </a>
        </Link>
        {canRecharge && (
          <div
            className="flex flex-col items-center gap-1"
            onClick={handleRechargeClicked}
          >
            <BiDollar className="text-2xl" />
            <span className="text-xs">立即儲值</span>
          </div>
        )}
      </div>
      <div className="hidden sm:block">
        <FooterNav />
      </div>
    </div>
  )
}

export default memo(PageWrapper)
