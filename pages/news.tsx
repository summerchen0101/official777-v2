import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'
import cs from 'classnames'
import PageBanner from '@/components/layout/PageBanner'

const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}
function RechargeRec() {
  const [currentNewsTab, setCurrentNewsTab] = useState(1)
  return (
    <Layout>
      <PageBanner />
      <section className="mt-5">
        <div className="lg:w-[860px] mx-auto lg:py-20">
          <div className="mb-3 mx-4 flex justify-center lg:justify-start">
            <img src="/title_news.png" alt="最新消息" className="h-10" />
          </div>
          <div className="px-4">
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
              </div>
              <div className="p-2 space-y-1">
                {[...Array(15)].map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col lg:flex-row odd:bg-white/50 even:bg-white  px-5 py-2 border-2 border-brown-600 text-brown-700 cursor-pointer hover:bg-gold-100 transition-all"
                  >
                    <div className="w-20">[類別]</div>
                    <div className="flex-1">
                      內容在這裡內容在這裡內容在這裡內容在這裡...
                    </div>
                    <div className="w-32">2021-08-31</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-3 pb-3 text-white">
                <div className="">上一頁</div>
                <div className="">
                  <select className="h-8 border-brown-500 rounded text-brown-900 pt-0.5">
                    <option>1</option>
                  </select>
                </div>
                <div className="">下一頁</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
