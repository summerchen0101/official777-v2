import type { NextPage } from 'next'
import MobileFooter from './FooterNav'
import MobileHeader from './Header'

const MobileLayout: NextPage = ({ children }) => {
  return (
    <div className="min-h-full">
      <MobileHeader />
      <div className="pb-14">{children}</div>
      <MobileFooter />
    </div>
  )
}

export default MobileLayout
