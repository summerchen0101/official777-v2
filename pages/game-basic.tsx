import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import TabGroup from '@/components/TabGroup'
import React, { useState } from 'react'

const tabsMap = {
  1: '遊戲大廳',
  2: '選擇遊戲',
  3: '操作說明',
}

function GameBasic() {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 mx-4 flex justify-center lg:justify-start">
            <img src="/title_basic.png" alt="基本介紹" className="h-10" />
          </div>
          <div className="hidden lg:flex justify-center mb-6">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <select className="tab-selector block lg:hidden mb-3">
            {Object.entries(tabsMap).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <div className="bg-gray-300 flex items-center justify-center min-h-[400px]">
            IMAGE
            {/* <Image
              src="https://fakeimg.pl/500x300"
              alt=""
              width="500"
              height="300"
            /> */}
          </div>
          <div className="bg-gray-100 p-5 text-gray-500 leading-8">
            <div className="">標題xxxx: 123123</div>
            <div className="">標題xxxx: 123123</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GameBasic
