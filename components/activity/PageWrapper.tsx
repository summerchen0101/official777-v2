import { toCdnUrl } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { ReactNode } from 'react'
import { BiDollar, BiDownload, BiHome } from 'react-icons/bi'
import { CgFacebook } from 'react-icons/cg'
import AppDownloadSideFloat from '../AppDownloadSideFloat'
import FooterNav from '../layout/FooterNav'
import LoginPopup from '../LoginPopup'
import SideBox from '../SideBox'

function PageWrapper({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <div
      className="pt-[40%] pb-16 sm:pb-0 bg-contain lg:bg-top bg-no-repeat bg-[#281944]"
      style={{ backgroundImage: `url(${toCdnUrl('/event/newsyear_bg.jpg')})` }}
    >
      <img
        src="/img/logo.png"
        alt=""
        className="hidden sm:block cursor-pointer h-32 mt-2 fixed top-0 drop-shadow-lg"
        onClick={() => router.push('/')}
      />
      {/* <PageBanner /> */}
      <div className="px-4 sm:px-10">{children}</div>
      <SideBox />
      <AppDownloadSideFloat />

      <LoginPopup />
      <div className="sm:hidden fixed bottom-0 left-0 bg-black/80 text-gray-300 w-full h-16 z-20 flex justify-around items-center">
        <div className="flex flex-col items-center gap-1">
          <BiHome className="text-2xl" />
          <span className="text-xs">回首頁</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <BiDownload className="text-2xl" />
          <span className="text-xs">APP下載</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <CgFacebook className="text-2xl" />
          <span className="text-xs">粉絲專頁</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <BiDollar className="text-2xl" />
          <span className="text-xs">立即儲值</span>
        </div>
      </div>
      <div className="hidden sm:block">
        <FooterNav />
      </div>
    </div>
  )
}

export default PageWrapper
