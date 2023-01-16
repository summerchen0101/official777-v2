import AppDownloadFloat from '@/components/AppDownloadFloat'
import FooterComp from '@/components/FooterComp'
import HeaderNav from '@/components/HeaderNav'
import LoginPopup from '@/components/LoginPopup'
import RechargeFloat from '@/components/RechargeFloat'
import UserInfoFloat from '@/components/UserInfoFloat'
import useMe from '@/services/useMe'
import { memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  const { data: user, isLoading } = useMe()
  return (
    <>
      <HeaderNav />
      <AppDownloadFloat />
      {user ? <UserInfoFloat /> : <RechargeFloat />}

      {children}

      <FooterComp />
      <LoginPopup />
    </>
  )
}

export default memo(PageLayout)
