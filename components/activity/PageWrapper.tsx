import { toImgPath } from '@/utils'
import React, { ReactNode } from 'react'
import PageBanner from '../layout/PageBanner'

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="p-4 pt-[55%] sm:px-10 bg-top bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${toImgPath('/event/event_bg.png')})` }}
    >
      {/* <PageBanner /> */}
      {children}
    </div>
  )
}

export default PageWrapper
