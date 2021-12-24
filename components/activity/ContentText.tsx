import React, { ReactNode } from 'react'

function ContentText({ children }: { children: ReactNode }) {
  return <div className="text-gray-300">{children}</div>
}

export default ContentText
