import type { NextPage } from 'next'
import { useState } from 'react'
import MobileFooter from './FooterNav'
import MobileHeader from './Header'
import MobileMenu from './Menu'
import cs from 'classnames'
import { useStore } from '@/store/useStore'

const MobileLayout: NextPage = ({ children }) => {
  const isShowMbMenu = useStore((s) => s.isShowMbMenu)
  return (
    <div className="min-h-full">
      <MobileHeader />
      <MobileMenu
        className={cs(
          'transition-all',
          isShowMbMenu ? 'translate-x-0' : 'translate-x-full',
        )}
      />
      <div className="pb-14">{children}</div>
      <MobileFooter />
    </div>
  )
}

export default MobileLayout
