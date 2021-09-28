import { useStore } from '@/store/useStore'
import React, { ReactNode } from 'react'
import { BiX } from 'react-icons/bi'
import cs from 'classnames'
import { NextPage } from 'next'

interface Props {
  onClose: () => void
  isShow: boolean
  children?: ReactNode
}
export default function Popup({ onClose, isShow, children }: Props) {
  return (
    <div
      className={cs(
        'bg-black/50 fixed top-0 left-0 w-full h-full z-50 transition-all',
        isShow ? 'visible opacity-100 ' : 'invisible opacity-0 translate-y-24',
      )}
      onClick={onClose}
    >
      <div
        className="fixed bottom-0 left-0 w-full h-[90%] bg-purple-900/90 py-8 text-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="cursor-pointer absolute top-0 right-0 p-1 text-white text-4xl hover:text-white/70"
          onClick={onClose}
        >
          <BiX />
        </div>
        {children}
      </div>
    </div>
  )
}
