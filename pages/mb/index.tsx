import HomeSlider from '@/components/HomeSlider'
import MobileLayout from '@/components/mb/Layout'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import TabGroup from '@/components/TabGroup'
import useDevicePage from '@/hooks/useDevicePage'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useState } from 'react'

const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}

const Home: NextPage = () => {
  useDevicePage()
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
        <button className="bg-gradient-to-br from-gold-500  to-gold-300 py-2.5 text-center w-full rounded text-lg tracking-wider">
          登入
        </button>
        <button className="bg-gradient-to-br from-gray-500  to-gray-300 py-2.5 text-center w-full rounded text-lg tracking-wider">
          立刻儲值
        </button>
      </div>
      <div className="flex justify-evenly mb-10">
        <div className="space-y-1">
          <img src="/google_play.png" alt="" className="" />
          <img src="/app_store.png" alt="" className="" />
          <img src="/apk.png" alt="" className="" />
        </div>
        <img
          src="/banner/banner_01.png"
          className="object-cover w-[180px]"
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

export default Home
