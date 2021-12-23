import React, { ReactNode } from 'react'

function ListWrapper({ children }: { children: ReactNode }) {
  return <ul className="list-decimal ml-5 space-y-1">{children}</ul>
}

export default ListWrapper
