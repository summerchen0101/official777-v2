import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import NewsDetailPopup from '@/components/NewsDetailPopup'
import useCdnUrl from '@/hooks/useCdnUrl'
import { NewsType } from '@/lib/enums'
import { newsTypeMap } from '@/lib/map'
import useNewsList, { News } from '@/services/useNewsList'
import { useStore } from '@/store/useStore'
import cs from 'classnames'
import { format } from 'date-fns'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'

function NewsListPage() {
  const toCdnUrl = useCdnUrl()
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [currentNewsTab, setCurrentNewsTab] = useState(NewsType.ALL)
  const { list, isLoading, paginator } = useNewsList({
    type: currentNewsTab,
    page,
    perpage: 10,
  })
  const showNews = useStore((s) => s.showNews)
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
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_news.png')}
              alt="最新消息"
              className="h-10"
            />
          </div>
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
                    <div>
                      {format(new Date(t.created_at), 'yyyy-MM-dd HH:mm')}
                    </div>
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
      <NewsDetailPopup />
    </Layout>
  )
}

export default NewsListPage
