import { useStore } from '@/store/useStore'
import { toDateTime } from '@/utils'
import React from 'react'
import Popup from './Popup'

export default function NewsDetailPopup() {
  const closeNews = useStore((s) => s.closeNews)
  const isShowNewsPopup = useStore((s) => s.isShowNewsPopup)
  const newsInfo = useStore((s) => s.newsInfo)
  return (
    <Popup onClose={closeNews} isShow={isShowNewsPopup}>
      <div className="lg:w-[860px] mx-auto px-4">
        <div className="text-sm mb-1">
          {toDateTime(newsInfo?.createTimeMs || 0)}
        </div>
        <div className="text-xl mb-3 text-yellow-200">{newsInfo?.title}</div>
        <div className="flex items-center space-x-3 lg:justify-end mb-3">
          <div>分享至</div>
          <img src="/fb.png" className="cursor-pointer h-6" alt="" />
          <img src="/line.png" className="cursor-pointer h-6" alt="" />
        </div>
        <div className="border-t border-white/60 mb-3"></div>
        <div
          className="leading-7"
          dangerouslySetInnerHTML={{ __html: newsInfo?.content || '' }}
        />
      </div>
    </Popup>
  )
}
