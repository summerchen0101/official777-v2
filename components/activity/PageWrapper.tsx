import React, { ReactNode } from 'react'
import PageBanner from '../layout/PageBanner'

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 sm:px-10">
      <PageBanner />
      {children}
    </div>
  )
}

export default PageWrapper
