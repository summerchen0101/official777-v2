import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import FooterNav from '@/components/layout/FooterNav'
import HeaderNav from '@/components/layout/HeaderNav'
import SideBox from '@/components/SideBox'
import useMaintenance from '@/services/useMaintenance'
import type { NextPage } from 'next'
import LoginPopup from '../LoginPopup'

const Layout: NextPage = ({ children }) => {
  const { data } = useMaintenance()
  return (
    <div className="overflow-hidden">
      <HeaderNav />
      <div className="pb-14">{children}</div>

      {/* <FooterNav /> */}

      <SideBox />
      <AppDownloadSideFloat />

      <LoginPopup />
    </div>
  )
}

export default Layout
