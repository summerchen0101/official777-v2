import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import FooterNav from '@/components/layout/FooterNav'
import HeaderNav from '@/components/layout/HeaderNav'
import RechargeFloat from '@/components/RechargeFloat'
import type { NextPage } from 'next'
import LoginPopup from '../LoginPopup'

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-full">
      <HeaderNav />
      <div className="pb-14 min-h-[calc(100vh-200px)]">{children}</div>

      <FooterNav />

      <RechargeFloat />
      <AppDownloadSideFloat />

      <LoginPopup />
    </div>
  )
}

export default Layout
