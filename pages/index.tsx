import Layout from '@/components/layout/Layout'
import TabGroup from '@/components/TabGroup'
import type { NextPage } from 'next'
import { useState } from 'react'
import cs from 'classnames'

const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}

const Home: NextPage = () => {
  const [currentNewsTab, setCurrentNewsTab] = useState('1')
  return (
    <Layout>
      <section>
        <img src="/banner/banner_01.png" alt="" className="object-cover" />
        <div className="bg-gradient-to-b from-black/70 via-purple-700 to-black/70 h-12 flex justify-center items-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className={cs(
                  'w-9 h-9 bg bg-center cursor-pointer',
                  i === 0 ? 'bg-slider-pager-active' : 'bg-slider-pager',
                )}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section id="news">
        <div className="w-[860px] mx-auto py-10">
          <img src="/title_news.png" alt="最新消息" className="h-10 mb-4" />
          <div className="bg-gradient-to-b from-[#B78863] via-[#C19C82] to-[#B78863] rounded-xl border-4 border-[#cfa182] shadow-xl">
            <div className="flex pt-3 pb-1 tracking-wider">
              {Object.entries(newsTabsMap).map(([key, label]) => (
                <div
                  key={key}
                  className={cs(
                    'text-light text-xl hover:text-white cursor-pointer w-24 text-center border-r border-yellow-200/50 last-of-type:border-none px-4',
                    {
                      active: key === currentNewsTab,
                    },
                  )}
                  onClick={() => setCurrentNewsTab(key)}
                >
                  {label}
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
                  className="flex odd:bg-white/50 even:bg-white  px-5 py-2 border-2 border-[#92735d] text-[#644d3d] cursor-pointer hover:bg-gold-100 transition-all"
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
        <div className="w-[860px] mx-auto py-10">
          <img src="/title_games.png" alt="推薦遊戲" className="h-10 mb-4" />
          <div className=" grid grid-cols-4 gap-4">
            <img src="/game/blackjack.png" className="col-span-2" alt="" />
            <img src="/game/blackjack.png" className="col-span-2" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="w-[860px] mx-auto py-10">
          <img src="/title_tiger.png" alt="老虎機" className="h-10 mb-4" />
          <div className=" grid grid-cols-4 gap-4">
            <img src="/game/blackjack.png" className="col-span-2" alt="" />
            <img src="/game/blackjack.png" className="col-span-2" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
            <img src="/game/blackjack.png" alt="" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
