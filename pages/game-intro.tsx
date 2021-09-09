import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import TabGroup from '@/components/TabGroup'
import Image from 'next/image'

const tabsMap = {
  1: '推薦遊戲',
  2: '老虎機',
  3: '其他',
}

function GameIntro() {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <Layout>
      <section>
        <div className="w-[860px] h-[200px] mx-auto flex items-center justify-center bg-gray-300">
          Banner
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-6 text-indigo-600 text-center tracking-widest">
            [ 遊戲說明 ]
          </h1>
          <div className="flex justify-center">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {[...Array(16)].map((t, i) => (
              <div
                key={i}
                className="object-cover hover:opacity-80 object-center"
              >
                <Image
                  src="https://fakeimg.pl/500x300"
                  alt=""
                  width="500"
                  height="300"
                />
              </div>
            ))}
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

export default GameIntro
