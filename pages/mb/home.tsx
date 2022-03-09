import GameDetailPopup from '@/components/GameDetailPopup'
import HomeSlider from '@/components/HomeSlider'
import Layout from '@/components/layout/Layout'
import LoadingCover from '@/components/LoadingCover'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import SectionSlider from '@/components/SectionSlider'
import useCdnUrl from '@/hooks/useCdnUrl'
import useDevicePage from '@/hooks/useDevicePage'
import useLoginFirst from '@/hooks/useLoginFirst'
import { Platform } from '@/lib/enums'
import { appUrlMap, newsTypeMap } from '@/lib/map'
import useMe from '@/services/useMe'
import useNewsList, { News } from '@/services/useNewsList'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency } from '@/utils'
import cs from 'classnames'
import type { NextPage } from 'next'
import { useState } from 'react'
import { homeSlides } from '../home'

const MobileHome: NextPage = () => {
  const toCdnUrl = useCdnUrl()
  useDevicePage('/home', '/mb/home')
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
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
  const clearUser = useUserStore((s) => s.clearUser)

  const handleNewsClicked = (news: News) => {
    if (news.isRedirect) {
      return window.open(news.content, 'news')
    }
    showNews(news)
  }

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
  }

  const handleRechargeClicked = useLoginFirst('/recharge')
  return (
    <Layout>
      <section className="mb-8 mt-20">
        <HomeSlider isHomePage slides={homeSlides} />
      </section>
      <section className="mb-8">
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
      {user ? (
        <div hidden={!user} className="px-4 space-y-2 mb-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="label-box">{user.nickname}</div>
            <div className="label-box">VIP: LV{user.vipLevel}</div>
            <div className="label-box">
              <img
                src={toCdnUrl('/coin.png')}
                alt=""
                className="absolute left-0 top-0 ml-1 mt-0.5 h-6"
              />
              {toCurrency(user.coin)}
            </div>
            <div className="label-box">
              <img
                src={toCdnUrl('/point.png')}
                alt=""
                className="absolute left-0 top-0 ml-1 mt-0.5 h-6"
              />
              {toCurrency(user.paymentPoint)}
            </div>
          </div>
          <div className="silver-btn" onClick={handleLogout}>
            登出
          </div>
        </div>
      ) : (
        <div className="mb-4 mx-4">
          <div className="gold-btn" onClick={onToggle}>
            登入
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 mb-6 mx-4">
        <div
          className={cs(
            'flex flex-col justify-center',
            canRecharge ? 'gap-1' : 'gap-3',
          )}
        >
          <a
            className="block"
            target="_blank"
            href={appUrlMap[Platform.IOS]}
            rel="noreferrer"
          >
            <img src={toCdnUrl('/app_store.png')} alt="" className="" />
          </a>
          <a
            className="block"
            target="_blank"
            href={appUrlMap[Platform.Android]}
            rel="noreferrer"
          >
            <img src={toCdnUrl('/google_play.png')} alt="" className="" />
          </a>
          {canRecharge && (
            <a
              className="block"
              target="_blank"
              href={toCdnUrl('/game.apk')}
              rel="noreferrer"
              download
            >
              <img src={toCdnUrl('/apk.png')} alt="" className="" />
            </a>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          {canRecharge ? (
            <div onClick={handleRechargeClicked} className="relative -top-2">
              <img
                src={toCdnUrl('/recharge_pig.png')}
                className={cs('object-cover w-32 rounded-lg')}
                alt=""
              />
              <img
                src={toCdnUrl('/recharge_title.png')}
                className="cursor-pointer mx-auto w-24 mt-2"
                alt=""
              />
            </div>
          ) : (
            <img
              src={toCdnUrl('/norecharge.png')}
              className={cs('object-cover w-32 relative -top-2 rounded-lg')}
              alt=""
            />
          )}
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
                  <div>{t.createdAt}</div>
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
          src={toCdnUrl('/title_media.png')}
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
            src={toCdnUrl('/title_games.png')}
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
            src={toCdnUrl('/title_tiger.png')}
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
        <img src={toCdnUrl('/fb.png')} className="cursor-pointer" alt="" />
        <img src={toCdnUrl('/line.png')} className="cursor-pointer" alt="" />
        <img src={toCdnUrl('/youtube.png')} className="cursor-pointer" alt="" />
      </div>
      <NewsDetailPopup />
      <GameDetailPopup />
    </Layout>
  )
}

export default MobileHome
