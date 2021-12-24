import React, { ReactNode } from 'react'

function SubTitle({ children }: { children: ReactNode }) {
  return <div className="text-yellow-400 text-2xl mb-2">{children}</div>
}

export default SubTitle
