import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import TabGroup from '@/components/TabGroup'
import Image from 'next/image'
import PageBanner from '@/components/layout/PageBanner'

const tabsMap = {
  1: '大廳',
  2: '選擇遊戲',
  3: '操作說明',
}

function GameBasic() {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            基本介紹
          </h1>
          <div className="flex justify-center mb-4">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
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
