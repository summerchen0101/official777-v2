import AppDownloadFloat from '@/components/AppDownloadFloat'
import FooterComp from '@/components/FooterComp'
import HeaderNav from '@/components/HeaderNav'
import LoginPopup from '@/components/LoginPopup'
import RechargeFloat from '@/components/RechargeFloat'
import UserInfoFloat from '@/components/UserInfoFloat'
import useMe from '@/services/useMe'
import { memo, ReactNode } from 'react'
import AdPopup from './AdPopup'
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
      <div className="h-24"></div>
      {!pure ? <AppDownloadFloat /> : null}
      {user ? <UserInfoFloat /> : <RechargeFloat />}

      {children}

      <FooterComp />

      <LoginPopup />
      {!pure ? <AppDownloadPopup /> : null}
      {/* <AdPopup /> */}
    </>
  )
}

export default memo(PageLayout)
