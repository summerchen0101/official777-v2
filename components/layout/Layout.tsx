import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import FooterNav from '@/components/layout/FooterNav'
import HeaderNav from '@/components/layout/HeaderNav'
import RechargeFloat from '@/components/RechargeFloat'
import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-full">
      <HeaderNav />
      <div className="mt-[80px]">{children}</div>

      <FooterNav />

      <RechargeFloat />
      <AppDownloadSideFloat />
    </div>
  )
}

export default Layout
