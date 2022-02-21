import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import HeaderNav from '@/components/layout/HeaderNav'
import SideBox from '@/components/SideBox'
import { memo, ReactNode } from 'react'
import LoginPopup from '../LoginPopup'
import FooterNav from './FooterNav'

type Props = {
  children: ReactNode
}

const Layout = function ({ children }: Props) {
  return (
    <>
      <HeaderNav />
      <div className="pb-14">{children}</div>

      <FooterNav />

      <SideBox />
      <AppDownloadSideFloat />

      <LoginPopup />
    </>
  )
}

export default memo(Layout)
