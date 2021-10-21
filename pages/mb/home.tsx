import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import TabGroup from '@/components/TabGroup'
import useDevicePage from '@/hooks/useDevicePage'
import { YesNo } from '@/lib/enums'
import { mediumGameSlides } from '@/lib/games'
import { newsTypeMap } from '@/lib/map'
import useMe from '@/services/useMe'
import useNewsList, { News } from '@/services/useNewsList'
import { useStore } from '@/store/useStore'
import { toCurrency, toDateTime } from '@/utils'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { FaUber, FaUser } from 'react-icons/fa'
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
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)

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
      <section className="mb-8 mt-20">
        <HomeSlider slides={homeSlides} />
      </section>
      <div hidden={!user} className="px-4 space-y-2 mb-8">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="space-y-2 flex flex-col h-24">
            <div className="flex justify-between border border-gray-500 rounded items-center px-2 flex-1">
              <FaUser className="text-xl text-purple-500" />
              <div className="text-gray-100 font-medium">{user?.nickname}</div>
            </div>
            <div className="flex justify-between border border-gray-500 rounded items-center px-2 flex-1">
              <HiCurrencyDollar className="text-2xl text-gold-500 -ml-1" />
              <div className="text-gray-100 font-medium">
                {toCurrency(user?.coin || 0, 0)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/30 rounded border border-gray-700">
            <div className="flex items-center space-x-4">
              <img src="/img_vip3.png" alt="" />
              <div className="text-2xl text-gray-100 font-mono flex-1 text-center">
                Lv<span className="text-3xl">{user?.vipLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mb-6 space-y-2">
        <button
          hidden={!!user}
          className="gold-btn w-full"
          onClick={toggleLoginPopup}
        >
          登入
        </button>
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
        <div className="flex justify-center items-center">
          <img
            src="/banner/banner_01.png"
            className="object-cover h-36 w-36 rounded-lg"
            alt=""
          />
        </div>
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

      <section className="mb-16">
        <img
          src="/title_media.png"
          alt="多媒體"
          className="h-10 mb-6 mx-auto"
        />
        <div className="px-12 max-w-[1400px] mx-auto">
          <SectionSlider
            slides={[
              {
                name: '沙灘派對',
                path: '/game/banner/md/banner_BeachParty_286x196.png',
              },
              {
                name: '魔法消消樂',
                path: '/game/banner/md/banner_CrystalSorceress_286x196.png',
              },
              {
                name: '昆蟲樂園',
                path: '/game/banner/md/banner_BugsFamily_286x196.png',
              },
            ]}
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
            src="/title_games.png"
            alt="推薦遊戲"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider
            slides={[
              {
                name: '巨龍家族',
                path: '/game/banner/md/banner_DragonClan_286x196.png',
              },
              {
                name: '埃及艷后',
                path: '/game/banner/md/banner_EgyptLegends_286x196.png',
              },
              {
                name: '三國之義薄雲天',
                path: '/game/banner/md/banner_GuanYu_286x196.png',
              },
            ]}
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
            slides={[
              {
                name: '帝皇捕魚',
                path: '/game/banner/lg/banner_KingFishing_480x320.png',
              },
              {
                name: '開心動物園',
                path: '/game/banner/lg/banner_AnimalPark_480x320.png',
              },
              {
                name: '鋼鐵超人',
                path: '/game/banner/lg/banner_SuperRobot_480x320.png',
              },
            ]}
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
