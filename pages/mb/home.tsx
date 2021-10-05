import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import TabGroup from '@/components/TabGroup'
import useDevicePage from '@/hooks/useDevicePage'
import { YesNo } from '@/lib/enums'
import { sectionSlides } from '@/lib/games'
import { newsTypeMap } from '@/lib/map'
import useMe from '@/services/useMe'
import useNewsList, { News } from '@/services/useNewsList'
import { useStore } from '@/store/useStore'
import { toCurrency, toDateTime } from '@/utils'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { FaUber } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'

const MobileHome: NextPage = () => {
  useDevicePage('/home', '/mb/home')
  const router = useRouter()
  const { data: user } = useMe()
  const [currentNewsTab, setCurrentNewsTab] = useState(0)
  const { list, isLoading } = useNewsList({
    category: currentNewsTab,
    page: 1,
    perPage: 10,
  })
  const showNews = useStore((s) => s.showNews)
  const showGamePopup = useStore((s) => s.showGamePopup)

  const homeSlides: Slide[] = Array(8).fill({
    path: '/banner/banner_01.png',
  })

  const handleNewsClicked = (news: News) => {
    if (news.isRedirect === YesNo.Yes) {
      return window.open(news.content, 'news')
    }
    showNews(news)
  }
  return (
    <Layout>
      <section className="mb-8">
        <HomeSlider slides={homeSlides} />
      </section>
      <div className="px-4 space-y-2 mb-10">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
              <FaUber className="text-xl text-gold-500" />
              <div className="text-lg text-gold-900 font-medium">
                {user?.nickname}
              </div>
            </div>
            <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
              <HiCurrencyDollar className="text-3xl text-gold-500 -ml-1" />
              <div className="text-lg text-gold-900 font-medium">
                {toCurrency(user?.coin || 0, 0)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/50 rounded">
            <div className="text-xl text-white font-mono">
              VIP: Lv{user?.vipLevel}
            </div>
          </div>
        </div>
        {/* <button className="gold-btn w-full">登入</button> */}
        <button
          className="silver-btn w-full"
          onClick={() => router.push('/recharge')}
        >
          立刻儲值
        </button>
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
        <div className="bg-gradient-to-b from-brown-500 via-brown-400 to-brown-600 rounded-xl border-4 border-brown-400 shadow-xl p-2">
          <div className="flex items-center mb-2">
            <select
              className="py-1 rounded"
              onChange={(e) => setCurrentNewsTab(+e.target.value)}
              value={currentNewsTab}
            >
              {Object.entries(newsTypeMap).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <div className="flex-1"></div>
            <div
              className="px-4 font-medium cursor-pointer hover:text-white/80"
              onClick={() => router.push('/news')}
            >
              更多...
            </div>
          </div>
          <div className="space-y-1">
            {list?.map((t, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row odd:bg-white/50 even:bg-white  px-5 py-2 border-2 border-brown-600 text-brown-700 cursor-pointer hover:bg-gold-100 transition-all"
                onClick={() => handleNewsClicked(t)}
              >
                <div className="w-20">[{newsTypeMap[t.category]}]</div>
                <div className="flex-1">{t.title}</div>
                <div>{toDateTime(t.createTimeMs)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src="/title_games.png"
            alt="推薦遊戲"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider
            slides={sectionSlides}
            slidesToShow={1}
            onClick={(slide) =>
              showGamePopup({ title: slide.name, content: '' })
            }
          />
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src="/title_tiger.png"
            alt="老虎機"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider
            slides={sectionSlides}
            slidesToShow={1}
            onClick={(slide) =>
              showGamePopup({ title: slide.name, content: '' })
            }
          />
        </div>
      </section>
      <div className="flex space-x-3 justify-center">
        <img src="/fb.png" className="cursor-pointer" alt="" />
        <img src="/line.png" className="cursor-pointer" alt="" />
        <img src="/youtube.png" className="cursor-pointer" alt="" />
      </div>
      <NewsDetailPopup />
      <GameDetailPopup />
    </Layout>
  )
}

export default MobileHome
