import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider, { HomeSlide } from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider from '@/components/SectionSlider'
import useDevicePage from '@/hooks/useDevicePage'
import { GameCode, NewsType } from '@/lib/enums'
import { largeGameSlides } from '@/lib/games'
import { gameMap, newsTypeMap } from '@/lib/map'
import useNewsList, { News } from '@/services/useNewsList'
import { useStore } from '@/store/useStore'
import useCdnUrl from '@/hooks/useCdnUrl'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { format } from 'date-fns'

export const homeSlides: HomeSlide[] = [
  { img: '/banner/banner_02.jpg', link: '/app-redirect', newWin: true },
  { img: '/banner/banner_02.jpg', link: '/app-redirect', newWin: true },
]

const Home: NextPage = () => {
  const toCdnUrl = useCdnUrl()
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [currentNewsTab, setCurrentNewsTab] = useState(NewsType.ALL)
  const { list, isLoading, paginator } = useNewsList({
    type: currentNewsTab,
    page,
    perpage: 10,
  })
  useDevicePage('/home', '/mb/home')
  const showNews = useStore((s) => s.showNews)
  const showGamePopup = useStore((s) => s.showGamePopup)

  const handleNewsClicked = (news: News) => {
    if (news.link) {
      if (news.is_new_win) {
        return window.open(news.link, 'news')
      } else {
        return router.push(news.link)
      }
    } else {
      showNews(news)
    }
  }
  return (
    <Layout>
      <PageBanner />
      <section className="lg:w-[860px] mx-auto mb-16">
        <div className="text-yellow-500 font-medium text-2xl mb-4 text-center">
          台北電玩展2022
        </div>
        <video
          className="w-full"
          controls
          preload="auto"
          data-setup="{}"
          autoPlay
        >
          <source
            src={toCdnUrl('/video/電玩展紀錄片.mp4')}
            type="video/mp4"
          ></source>

          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
      </section>

      <section id="news" className="mb-16 px-4">
        <div className="lg:w-[860px] mx-auto">
          <img
            src={toCdnUrl('/title_news.png')}
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
                      'text-white': key === currentNewsTab,
                    },
                  )}
                  onClick={() => setCurrentNewsTab(key as NewsType)}
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
                    <div className="w-20">[{newsTypeMap[t.type]}]</div>
                    <div className="flex-1">{t.title}</div>
                    <div>{format(new Date(t.date), 'yyyy-MM-dd')}</div>
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
          src={toCdnUrl('/title_media.png')}
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
            src={toCdnUrl('/title_games.png')}
            alt="推薦遊戲"
            className="h-10 mb-4"
          />

          <div className=" grid grid-cols-2 gap-4 mb-4">
            {largeGameSlides.slice(0, 2).map((t, i) => (
              <img
                key={i}
                src={toCdnUrl(`/game/banner/480x320/${t.gameID}.jpg`)}
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
              },
              {
                gameID: 9,
              },
              {
                gameID: 17,
              },
              {
                gameID: 12,
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
            src={toCdnUrl('/title_tiger.png')}
            alt="老虎機"
            className="h-10 mb-4"
          />
          <div className=" grid grid-cols-2 gap-4 mb-4">
            {largeGameSlides.slice(2, 4).map((t, i) => (
              <img
                key={i}
                src={toCdnUrl(`/game/banner/480x320/${t.gameID}.jpg`)}
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
              },
              {
                gameID: 2,
              },
              {
                gameID: 13,
              },
              {
                gameID: 8,
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
