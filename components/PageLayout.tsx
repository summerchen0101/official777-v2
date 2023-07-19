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
  pure?: boolean
}

function PageLayout({ children, pure }: Props) {
  const { data: user, isLoading } = useMe()
  return (
    <>
      <HeaderNav pure={pure} />
      {user ? <UserInfoFloat /> : <RechargeFloat />}

      {children}

      <FooterComp />

      <LoginPopup />
      {!pure ? <AppDownloadPopup /> : null}
    </>
  )
}

export default memo(PageLayout)
