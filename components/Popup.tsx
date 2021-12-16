import { toImgPath } from '@/utils'
import cs from 'classnames'
import React, { ReactNode, useEffect, useMemo, useRef } from 'react'

interface Props {
  onClose: () => void
  isShow: boolean
  children?: ReactNode
}
export default function Popup({ onClose, isShow, children }: Props) {
  useEffect(() => {
    if (isShow) {
      document.querySelector('body')?.classList.add('lock')
    } else {
      document.querySelector('body')?.classList.remove('lock')
    }
  }, [isShow])
  return (
    <div
      className={cs(
        'bg-black/50 fixed top-0 left-0 w-full h-full z-50 transition-all',
        isShow ? 'visible opacity-100 ' : 'invisible opacity-0 translate-y-24',
      )}
      onClick={onClose}
    >
      <div
        className="fixed bottom-0 left-0 w-full h-full bg-purple-900/90 py-8 text-white overflow-y-auto scroll-padding px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="cursor-pointer fixed top-0 right-0 m-3 z-10"
          onClick={onClose}
        >
          <img
            src={toImgPath('/btn_close.png')}
            className="h-12 lg:h-16"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  )
}
