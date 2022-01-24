import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import HeaderNav from '@/components/layout/HeaderNav'
import SideBox from '@/components/SideBox'
import type { NextPage } from 'next'
import LoginPopup from '../LoginPopup'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <div className="pb-14">{children}</div>

      {/* <FooterNav /> */}

      <SideBox />
      <AppDownloadSideFloat />

      <LoginPopup />
    </>
  )
}

export default Layout
