import HomeSlider from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import useDevicePage from '@/hooks/useDevicePage'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}

const Home: NextPage = () => {
  useDevicePage('/home', '/mb/home')

  const [currentNewsTab, setCurrentNewsTab] = useState(1)

  const sectionSlides: Slide[] = Array(8).fill({
    path: '/game/blackjack.png',
  })
  const homeSlides: Slide[] = Array(8).fill({
    path: '/banner/banner_01.png',
  })
  return (
    <Layout>
      <section>
        <HomeSlider slides={homeSlides} dots />
        <div className="bg-gradient-to-b from-black/70 via-purple-700 to-black/70 h-12 flex justify-center items-center -mt-2"></div>
      </section>

      <section id="news">
        <div className="lg:w-[860px] mx-auto py-10">
          <img src="/title_news.png" alt="最新消息" className="h-10 mb-4" />
          <div className="bg-gradient-to-b from-brown-500 via-brown-400 to-brown-600 rounded-xl border-4 border-brown-400 shadow-xl">
            <div className="flex pt-3 pb-1 tracking-wider">
              {Object.entries(newsTabsMap).map(([key, label]) => (
                <div
                  key={key}
                  className={cs(
                    'news-tab-light text-xl cursor-pointer w-24 text-center border-r border-yellow-200/50 last-of-type:border-none px-4',
                    {
                      'text-white': +key === currentNewsTab,
                    },
                  )}
                  onClick={() => setCurrentNewsTab(+key)}
                >
                  <span>{label}</span>
                  <img src="" alt="" />
                </div>
              ))}
              <div className="flex-1"></div>
              <div className="px-4 font-medium cursor-pointer hover:text-white/80">
                更多...
              </div>
            </div>
            <div className="p-2 space-y-1">
              {[...Array(6)].map((t, i) => (
                <div
                  key={i}
                  className="flex odd:bg-white/50 even:bg-white  px-5 py-2 border-2 border-brown-600 text-brown-700 cursor-pointer hover:bg-gold-100 transition-all"
                >
                  <div className="w-20">[類別]</div>
                  <div className="flex-1">
                    內容在這裡內容在這裡內容在這裡內容在這裡...
                  </div>
                  <div className="w-32">2021-08-31</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:w-[860px] mx-auto py-10">
          <img src="/title_games.png" alt="推薦遊戲" className="h-10 mb-4" />

          <div className=" grid grid-cols-2 gap-4 mb-4">
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
          </div>
          <SectionSlider slides={sectionSlides} slidesToShow={4} />
        </div>
      </section>

      <section className="mb-10">
        <div className="lg:w-[860px] mx-auto py-10">
          <img src="/title_tiger.png" alt="老虎機" className="h-10 mb-4" />
          <div className=" grid grid-cols-2 gap-4 mb-4">
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
          </div>
          <SectionSlider slides={sectionSlides} slidesToShow={4} />
        </div>
      </section>
    </Layout>
  )
}

export default Home
