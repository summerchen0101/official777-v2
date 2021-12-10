import React, { ReactNode } from 'react'
import cs from 'classnames'
import { CgSpinnerTwo } from 'react-icons/cg'

type Props = { children: ReactNode; isLoading?: boolean }

function LoadingCover({ children, isLoading }: Props) {
  return (
    <div className="relative">
      {children}
      <div
        className={cs(
          'absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all',
          isLoading ? 'visible opacity-100' : 'opacity-0 invisible',
        )}
      >
        <i className="fas fa-spinner fa-spin text-gray-800/20 fa-4x"></i>
        <CgSpinnerTwo size="70px" className="text-yellow-700/30 animate-spin" />
      </div>
    </div>
  )
}

export default LoadingCover
