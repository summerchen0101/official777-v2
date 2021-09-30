import { useStore } from '@/store/useStore'
import React from 'react'
import Popup from './Popup'
import cs from 'classnames'

export default function GameDetailPopup() {
  const closeGamePopup = useStore((s) => s.closeGamePopup)
  const isShowGamePopup = useStore((s) => s.isShowGamePopup)
  const gameInfo = useStore((s) => s.gameInfo)
  return (
    <Popup onClose={closeGamePopup} isShow={isShowGamePopup}>
      <div className="fixed lg:top-1/3 lg:right-0 space-x-2 lg:space-x-0 lg:space-y-2 lg:flex lg:flex-col ml-4 lg:-mr-2">
        <a href="#s1" className="tab">
          基本說明
        </a>
        <a href="#s2" className="tab">
          得分說明
        </a>
        <a href="#s3" className="tab">
          賠率表
        </a>
      </div>
      <section className="border-b border-purple-600 py-14">
        <div className="lg:w-[860px] mx-auto px-4">
          <div className="border border-white/80 bg-blackmb-5 aspect-w-16 aspect-h-9">
            <div className="h-full w-full flex justify-center items-center bg-black">
              <div className="text-2xl">影片 800 x 450</div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-purple-600 py-14">
        <div id="s1" className="lg:w-[860px] mx-auto px-4">
          <img
            src="/game_detail_title_1.png"
            className="h-8 mx-auto mb-8"
            alt="基本說明"
          />
          <div className="border border-white/80 bg-gray-400 flex items-center justify-center h-[360px] lg:h-[420px] mb-5">
            <div className="text-2xl">圖片說明 960 x 600</div>
          </div>
        </div>
      </section>
      <section className="border-b border-purple-600 py-14">
        <div id="s2" className="lg:w-[860px] mx-auto px-4">
          <img
            src="/game_detail_title_2.png"
            className="h-8 mx-auto mb-8"
            alt="得分說明"
          />
          <div className="border border-white/80 bg-gray-400 flex items-center justify-center h-[360px] lg:h-[420px] mb-5">
            <div className="text-2xl">圖片說明 960 x 600</div>
          </div>
        </div>
      </section>
      <section className="border-b border-purple-600 py-14">
        <div id="s3" className="lg:w-[860px] mx-auto px-4">
          <img
            src="/game_detail_title_3.png"
            className="h-8 mx-auto mb-8"
            alt="賠率表"
          />
          <div className="border border-white/80 bg-gray-400 flex items-center justify-center h-[360px] lg:h-[420px] mb-5">
            <div className="text-2xl">圖片說明 960 x 600</div>
          </div>
        </div>
      </section>
    </Popup>
  )
}