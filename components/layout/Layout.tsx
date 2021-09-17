import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import FooterNav from '@/components/layout/FooterNav'
import HeaderNav from '@/components/layout/HeaderNav'
import RechargeFloat from '@/components/RechargeFloat'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-full bg-main-pattern">
      <HeaderNav />
      <div className="">{children}</div>

      <FooterNav />

      <RechargeFloat />
      <AppDownloadSideFloat />
    </div>
  )
}

export default Layout
