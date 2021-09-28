import { useStore } from '@/store/useStore'
import React from 'react'
import { BiX } from 'react-icons/bi'
import cs from 'classnames'

export default function NewsDetailPopup() {
  const closeNews = useStore((s) => s.closeNews)
  const isShowNewsPopup = useStore((s) => s.isShowNewsPopup)
  const newsInfo = useStore((s) => s.newsInfo)
  return (
    <div
      className={cs(
        'bg-black/50 fixed top-0 left-0 w-full h-full z-50 transition-all',
        isShowNewsPopup
          ? 'visible opacity-100 '
          : 'invisible opacity-0 translate-y-24',
      )}
      onClick={closeNews}
    >
      <div
        className="fixed bottom-0 left-0 w-full h-[95%] bg-purple-900/90 py-8 text-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="cursor-pointer absolute top-0 right-0 p-1 text-white text-4xl hover:text-white/70"
          onClick={closeNews}
        >
          <BiX />
        </div>
        <div className="lg:w-[860px] mx-auto px-4">
          <div className="text-sm mb-1">{newsInfo?.date}</div>
          <div className="text-xl mb-3 text-yellow-200">{newsInfo?.title}</div>
          <div className="flex items-center space-x-3 lg:justify-end mb-3">
            <div>分享至</div>
            <img src="/fb.png" className="cursor-pointer h-6" alt="" />
            <img src="/line.png" className="cursor-pointer h-6" alt="" />
          </div>
          <div className="border border-white/80 bg-black flex items-center justify-center h-96 mb-5">
            活動圖片區 1100 x 400
          </div>
          <div className="text-xl mb-2">活動說明</div>
          <div className="border-t border-white/60 mb-3"></div>
          <div className="leading-7">{newsInfo?.content}</div>
        </div>
      </div>
    </div>
  )
}
