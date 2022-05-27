import { useStore } from '@/store/useStore'
import { format } from 'date-fns'
import React from 'react'
import Popup from './Popup'

export default function NewsDetailPopup() {
  const closeNews = useStore((s) => s.closeNews)
  const isShowNewsPopup = useStore((s) => s.isShowNewsPopup)
  const newsInfo = useStore((s) => s.newsInfo)
  return (
    <Popup className="px-4" onClose={closeNews} isShow={isShowNewsPopup}>
      <div className="lg:w-[860px] mx-auto pt-8">
        <div className="text-sm mb-1">
          {newsInfo?.date && format(new Date(newsInfo?.date), 'yyyy-MM-dd')}
        </div>
        <div className="text-xl mb-3 text-yellow-200">{newsInfo?.title}</div>
        {/* <div className="flex items-center space-x-3 lg:justify-end mb-3">
          <div>分享至</div>
          <img
            src={toCdnUrl('/fb.png')}
            className="cursor-pointer h-6"
            alt=""
          />
          <img
            src={toCdnUrl('/line.png')}
            className="cursor-pointer h-6"
            alt=""
          />
        </div> */}
        <div className="border-t border-white/60 mb-3"></div>
        <div
          className="news-content"
          dangerouslySetInnerHTML={{ __html: newsInfo?.content || '' }}
        />
      </div>
    </Popup>
  )
}
