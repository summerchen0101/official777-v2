import HomeSlider from '@/components/HomeSlider'
import MobileLayout from '@/components/mb/Layout'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import TabGroup from '@/components/TabGroup'
import useDevicePage from '@/hooks/useDevicePage'
import type { NextPage } from 'next'
import { useState } from 'react'
import { FaUber } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'

const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}

const MobileHome: NextPage = () => {
  useDevicePage('/home', '/mb/home')
  const [currentNewsTab, setCurrentNewsTab] = useState(1)

  const sectionSlides: Slide[] = Array(8).fill({
    path: '/game/blackjack.png',
  })
  const homeSlides: Slide[] = Array(8).fill({
    path: '/banner/banner_01.png',
  })
  return (
    <MobileLayout>
      <section className="mb-8">
        <HomeSlider slides={homeSlides} />
      </section>
      <div className="px-4 space-y-2 mb-10">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
              <FaUber className="text-xl text-gold-500" />
              <div className="text-lg text-gold-900 font-medium">我是夏天</div>
            </div>
            <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
              <HiCurrencyDollar className="text-3xl text-gold-500 -ml-1" />
              <div className="text-lg text-gold-900 font-medium">100,000</div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/50 rounded">
            <div className="text-xl text-white font-mono">VIP: Lv3</div>
          </div>
        </div>
        {/* <button className="gold-btn w-full">登入</button> */}
        <button className="silver-btn w-full">立刻儲值</button>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-10 mx-4">
        <div className="space-y-1">
          <img src="/google_play.png" alt="" className="" />
          <img src="/app_store.png" alt="" className="" />
          <img src="/apk.png" alt="" className="" />
        </div>
        <img
          src="/banner/banner_01.png"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>

      <section className="mb-10 mx-3">
        <div className="flex justify-center mb-3">
          <TabGroup
            map={newsTabsMap}
            value={currentNewsTab.toString()}
            onChange={(val) => setCurrentNewsTab(+val)}
          />
        </div>
        <div className="p-2 pt-3 space-y-1 gold-box rounded">
          {[...Array(6)].map((t, i) => (
            <div
              key={i}
              className="flex odd:bg-white/50 even:bg-white px-2 py-2 border-brown-600 text-brown-700 cursor-pointer hover:bg-gold-100 transition-all"
            >
              <div className="w-20">[類別]</div>
              <div className="flex-1">內這裡內容在這裡...</div>
              <div className="w-32">2021-08-31</div>
            </div>
          ))}
          <div className="text-white text-right underline">看更多...</div>
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src="/title_games.png"
            alt="推薦遊戲"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider slides={sectionSlides} slidesToShow={1} />
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src="/title_tiger.png"
            alt="老虎機"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider slides={sectionSlides} slidesToShow={1} />
        </div>
      </section>
      <div className="flex space-x-3 justify-center">
        <img src="/fb.png" className="cursor-pointer" alt="" />
        <img src="/line.png" className="cursor-pointer" alt="" />
        <img src="/youtube.png" className="cursor-pointer" alt="" />
      </div>
    </MobileLayout>
  )
}

export default MobileHome
