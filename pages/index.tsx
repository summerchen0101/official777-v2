import AppDownloadSideFloat from '@/components/AppDownloadSideFloat'
import FooterNav from '@/components/layout/FooterNav'
import HeaderNav from '@/components/layout/HeaderNav'
import RechargeFloat from '@/components/RechargeFloat'
import TabGroup from '@/components/TabGroup'
import type { NextPage } from 'next'
import { useState } from 'react'

const newsTabsMap = {
  1: '最新',
  2: '營運',
  3: '活動',
  4: '客服',
}

const Home: NextPage = () => {
  const [currentNewsTab, setCurrentNewsTab] = useState('1')
  return (
    <div className="min-h-full">
      <HeaderNav />
      <section>
        <div className="w-[860px] h-[450px] mx-auto flex items-center justify-center bg-gray-300">
          Banner
        </div>
      </section>
      <section className="bg-gray-500">
        <div className="w-[860px] h-[450px] mx-auto py-10">
          <h1 className="text-2xl mb-5 text-white text-center tracking-widest">
            [ 最新消息 ]
          </h1>
          <TabGroup
            map={newsTabsMap}
            value={currentNewsTab}
            onChange={(val) => setCurrentNewsTab(val)}
          />
          <div className=" bg-gray-300 p-2 space-y-1 rounded mt-2">
            {[...Array(6)].map((t, i) => (
              <div key={i} className="flex bg-white text-gray-500 px-5 py-2">
                <div className="w-20 text-indigo-500">[類別]</div>
                <div className="flex-1">
                  內容在這裡內容在這裡內容在這裡內容在這裡...
                </div>
                <div className="w-32">2021-08-31</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-5 text-gray-500 text-center tracking-widest">
            [ 推薦遊戲 ]
          </h1>
          <div className=" grid grid-cols-4 gap-4">
            <img
              src="https://fakeimg.pl/500x300"
              className="col-span-2"
              alt=""
            />
            <img
              src="https://fakeimg.pl/500x300"
              className="col-span-2"
              alt=""
            />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-indigo-400">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-5 text-white text-center tracking-widest">
            [ SLOT ]
          </h1>
          <div className=" grid grid-cols-4 gap-4">
            <img
              src="https://fakeimg.pl/500x300"
              className="col-span-2"
              alt=""
            />
            <img
              src="https://fakeimg.pl/500x300"
              className="col-span-2"
              alt=""
            />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
            <img src="https://fakeimg.pl/500x300" alt="" />
          </div>
        </div>
      </section>

      <FooterNav />

      <RechargeFloat />
      <AppDownloadSideFloat />
    </div>
  )
}

export default Home
