import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider, { HomeSlide } from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import LoadingCover from '@/components/LoadingCover'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider from '@/components/SectionSlider'
import useDevicePage from '@/hooks/useDevicePage'
import { Platform, YesNo } from '@/lib/enums'
import { appUrlMap, newsTypeMap } from '@/lib/map'
import useMe from '@/services/useMe'
import useNewsList, { News } from '@/services/useNewsList'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { toCurrency, toDateTime, toImgPath } from '@/utils'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'

const MobileHome: NextPage = () => {
  useDevicePage('/home', '/mb/home')
  const router = useRouter()
  const { data: user } = useMe()
  const [page, setPage] = useState(1)
  const [currentNewsTab, setCurrentNewsTab] = useState(0)
  const { list, isLoading, paginator } = useNewsList({
    category: currentNewsTab,
    page,
    perPage: 10,
  })
  const showNews = useStore((s) => s.showNews)
  const showGamePopup = useStore((s) => s.showGamePopup)
  const onToggle = usePopupStore((s) => s.login.onToggle)

  const homeSlides: HomeSlide[] = Array(8).fill({
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
                {toCurrency(user?.coin || 0)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/30 rounded border border-gray-700">
            <div className="flex items-center space-x-4">
              <img src={toImgPath('/img_vip3.png')} alt="" />
              <div className="text-2xl text-gray-100 font-mono flex-1 text-center">
                Lv<span className="text-3xl">{user?.vipLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-10 mx-4">
        <div className="space-y-1">
          <a
            className="block"
            target="_blank"
            href={appUrlMap[Platform.IOS]}
            rel="noreferrer"
          >
            <img src={toImgPath('/app_store.png')} alt="" className="" />
          </a>
          <a
            className="block"
            target="_blank"
            href={appUrlMap[Platform.Android]}
            rel="noreferrer"
          >
            <img src={toImgPath('/google_play.png')} alt="" className="" />
          </a>
          <img src={toImgPath('/apk.png')} alt="" className="" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={toImgPath('/banner/banner_01.png')}
            className="object-cover h-36 w-36 rounded-lg"
            alt=""
          />
        </div>
      </div>

      <section className="px-4 mb-16">
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
      </section>

      <section className="mb-16">
        <img
          src={toImgPath('/title_media.png')}
          alt="多媒體"
          className="h-10 mb-6 mx-auto"
        />
        <div className="px-12 max-w-[1400px] mx-auto">
          <SectionSlider
            slides={[
              {
                gameID: 13,
              },
              {
                gameID: 2,
              },
            ]}
            slidesToShow={1}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src={toImgPath('/title_games.png')}
            alt="推薦遊戲"
            className="h-10 object-contain w-full mb-4"
          />
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
            ]}
            slidesToShow={1}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>

      <section className="mb-10">
        <div className="px-10">
          <img
            src={toImgPath('/title_tiger.png')}
            alt="老虎機"
            className="h-10 object-contain w-full mb-4"
          />
          <SectionSlider
            slides={[
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
            slidesToShow={1}
            onClick={(slide) => showGamePopup(slide.gameID)}
          />
        </div>
      </section>
      <div className="flex space-x-3 justify-center">
        <img src={toImgPath('/fb.png')} className="cursor-pointer" alt="" />
        <img src={toImgPath('/line.png')} className="cursor-pointer" alt="" />
        <img
          src={toImgPath('/youtube.png')}
          className="cursor-pointer"
          alt=""
        />
      </div>
      <NewsDetailPopup />
      <GameDetailPopup />
    </Layout>
  )
}

export default MobileHome
