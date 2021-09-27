import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import RechargeFloat from '@/components/RechargeFloat'
import HeaderNav from '@/components/layout/HeaderNav'
import TabGroup from '@/components/TabGroup'
import type { NextPage } from 'next'
import { useState } from 'react'

const tabsMap = {
  1: '大廳',
  2: '選擇遊戲',
  3: '操作說明',
}

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <div className="h-full">
      <HeaderNav />
      <section>
        <div className="lg:w-[860px] h-[450px] mx-auto flex items-center justify-center bg-gray-300">
          Banner
        </div>
      </section>

      <section className="bg-gray-500">
        <div className="lg:w-[860px] h-[450px] mx-auto lg:py-20">
          <h1 className="title text-light">基本介紹</h1>
          <div className="flex justify-center mb-6">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <div className=" bg-gray-300 p-2 space-y-1 rounded mt-2">xxx</div>
        </div>
      </section>

      <RechargeFloat />
      <AppDownloadSideFloat />
    </div>
  )
}

export default Home
