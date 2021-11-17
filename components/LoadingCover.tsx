import React, { ReactNode } from 'react'
import cs from 'classnames'

type Props = { children: ReactNode; isLoading?: boolean }

function LoadingCover({ children, isLoading }: Props) {
  return (
    <div className="relative">
      {children}
      <div
        className={cs(
          'bg-white/50 absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all',
          isLoading ? 'visible opacity-100' : 'opacity-0 invisible',
        )}
      >
        <i className="fas fa-spinner fa-spin text-gray-800/20 fa-4x"></i>
      </div>
    </div>
  )
}

export default LoadingCover
