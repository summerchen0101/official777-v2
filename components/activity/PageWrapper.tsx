import useCdnUrl from '@/hooks/useCdnUrl'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/dist/client/router'
import React, { memo, ReactNode } from 'react'
import AppDownloadSideFloat from '../AppDownloadSideFloat'
import MobileFooter from '../event/MobileFooter'
import FooterNav from '../layout/FooterNav'
import LoginPopup from '../LoginPopup'
import SideBox from '../SideBox'

function PageWrapper({ children }: { children: ReactNode }) {
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  const toCdnUrl = useCdnUrl()
  const router = useRouter()

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
      <MobileFooter />
      <FooterNav />
    </div>
  )
}

export default memo(PageWrapper)
