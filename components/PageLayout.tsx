import AppDownloadFloat from '@/components/AppDownloadFloat'
import FooterComp from '@/components/FooterComp'
import HeaderNav from '@/components/HeaderNav'
import LoginPopup from '@/components/LoginPopup'
import RechargeFloat from '@/components/RechargeFloat'
import UserInfoFloat from '@/components/UserInfoFloat'
import useMe from '@/services/useMe'
import { useStore } from '@/store/useStore'
import { memo, ReactNode } from 'react'
import AppDownloadPopup from './AppDownloadPopup'

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
      <AppDownloadPopup />
    </>
  )
}

export default memo(PageLayout)
