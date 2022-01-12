import { useStore } from '@/store/useStore'
import { toImgPath } from '@/utils'
import React from 'react'
import Popup from './Popup'

export default function GameDetailPopup() {
  const closeGamePopup = useStore((s) => s.closeGamePopup)
  const isShowGamePopup = useStore((s) => s.isShowGamePopup)
  const gameInfo = useStore((s) => s.gameInfo)
  return (
    <Popup onClose={closeGamePopup} isShow={isShowGamePopup}>
      <div className="hidden md:block fixed lg:top-1/3 lg:right-0 space-x-2 lg:space-x-0 lg:space-y-2 lg:flex lg:flex-col">
        {/* <a
          href="#s0"
          className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
        >
          影片
        </a> */}
        <a
          href="#s1"
          className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
        >
          基本說明
        </a>
        <a
          href="#s2"
          className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
        >
          得分說明
        </a>
        <a
          href="#s3"
          className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
        >
          賠率表
        </a>
      </div>
      <div id="s0" className="flex justify-center">
        <h1 className="text-4xl text-gold-400 font-medium mb-8">
          {gameInfo?.title}
        </h1>
      </div>
      <section className="lg:w-[860px] mx-auto sm:px-4">
        <div className="bg-[#10111d] py-10 sm:rounded-lg flex flex-col gap-12">
          <img
            id="s1"
            src={toImgPath('/game/intro/1/GameInfo_1_1.png')}
            alt=""
          />
          <img
            id="s2"
            src={toImgPath('/game/intro/1/GameInfo_1_2.png')}
            alt=""
          />
          <img
            id="s3"
            src={toImgPath('/game/intro/1/GameInfo_1_3.png')}
            alt=""
          />
          <img
            id="s4"
            src={toImgPath('/game/intro/1/GameInfo_1_4.png')}
            alt=""
          />
        </div>
      </section>
    </Popup>
  )
}
