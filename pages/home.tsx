import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import Loading from '@/components/Loading'
import LoadingCover from '@/components/LoadingCover'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider, { Slide } from '@/components/SectionSlider'
import useDevicePage from '@/hooks/useDevicePage'
import { GameCode, YesNo } from '@/lib/enums'
import { largeGameSlides, mediumGameSlides } from '@/lib/games'
import { gameMap, newsTypeMap } from '@/lib/map'
import useNewsList, { News } from '@/services/useNewsList'
import { useStore } from '@/store/useStore'
import { toImgPath, toDateTime } from '@/utils'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [currentNewsTab, setCurrentNewsTab] = useState(0)
  const { list, isLoading, paginator } = useNewsList({
    category: currentNewsTab,
    page,
    perPage: 10,
  })
  useDevicePage('/home', '/mb/home')
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
      <section className="mb-16 mt-20">
        <HomeSlider slides={homeSlides} dots isHomePage />
        <div className="bg-gradient-to-b from-black/70 via-purple-700 to-black/70 h-12 flex justify-center items-center -mt-2"></div>
      </section>

      <section id="news" className="mb-16 px-4">
        <div className="lg:w-[860px] mx-auto">
          <img
            src={toImgPath('/title_news.png')}
            alt="最新消息"
            className="h-10 mb-4"
          />
          <div className="bg-gradient-to-b from-brown-500 via-brown-400 to-brown-600 rounded-xl border-4 border-brown-400 shadow-xl">
            <div className="flex pt-3 pb-1 tracking-wider">
              {Object.entries(newsTypeMap).map(([key, label]) => (
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
            </div>
            <LoadingCover isLoading={isLoading}>
              <div className="p-2 space-y-1">
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
              <div className="flex justify-center space-x-3 pb-3 text-white">
                <button
                  className="cursor-pointer hover:text-white/80 disabled:text-brown-500"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === 1}
                >
                  上一頁
                </button>
                <div className="">
                  <select className="h-8 border-brown-500 rounded text-brown-900 pt-0.5">
                    {[...Array(paginator?.totalPage)].map((_, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <button
                  className="cursor-pointer hover:text-white/80 disabled:text-brown-500"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={paginator?.totalPage! <= page}
                >
                  下一頁
                </button>
              </div>
            </LoadingCover>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <img
          src={toImgPath('/title_media.png')}
          alt="多媒體"
          className="h-10 mb-6 mx-auto"
        />
        <div className="px-12 max-w-[1400px] mx-auto">
          <SectionSlider
            slides={largeGameSlides.slice(2, 5)}
            slidesToShow={3}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>
      <section className="mb-16">
        <div className="lg:w-[860px] mx-auto">
          <img
            src={toImgPath('/title_games.png')}
            alt="推薦遊戲"
            className="h-10 mb-4"
          />

          <div className=" grid grid-cols-2 gap-4 mb-4">
            {largeGameSlides.slice(0, 2).map((t, i) => (
              <img
                key={i}
                src={toImgPath(t.path)}
                alt={gameMap[t.gameID]}
                className="frame cursor-pointer"
                onClick={() => showGamePopup(t.gameID)}
              />
            ))}
          </div>
          <SectionSlider
            slides={[
              {
                gameID: 8,
                path: '/game/banner/lg/banner_DragonClan_480x320.jpg',
              },
              {
                gameID: 9,
                path: '/game/banner/lg/banner_EgyptLegends_480x320.jpg',
              },
              {
                gameID: 17,
                path: '/game/banner/lg/banner_GuanYu_480x320.jpg',
              },
              {
                gameID: 12,
                path: '/game/banner/lg/banner_SweetheartNurse_480x320.jpg',
              },
            ]}
            slidesToShow={4}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>

      <section className="mb-10">
        <div className="lg:w-[860px] mx-auto">
          <img
            src={toImgPath('/title_tiger.png')}
            alt="老虎機"
            className="h-10 mb-4"
          />
          <div className=" grid grid-cols-2 gap-4 mb-4">
            {largeGameSlides.slice(2, 4).map((t, i) => (
              <img
                key={i}
                src={toImgPath(t.path)}
                alt={gameMap[t.gameID]}
                className="frame cursor-pointer"
                onClick={() => showGamePopup(t.gameID)}
              />
            ))}
          </div>
          <SectionSlider
            slides={[
              {
                gameID: GameCode.Poker,
                path: '/game/banner/lg/banner_Blackjack_480x320.jpg',
              },
              {
                gameID: 2,
                path: '/game/banner/lg/banner_BugsFamily_480x320.jpg',
              },
              {
                gameID: 13,
                path: '/game/banner/lg/banner_CrystalSorceress_480x320.jpg',
              },
              {
                gameID: 8,
                path: '/game/banner/lg/banner_DragonClan_480x320.jpg',
              },
            ]}
            slidesToShow={4}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>
      <NewsDetailPopup />
      <GameDetailPopup />
    </Layout>
  )
}

export default Home
