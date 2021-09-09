import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import TabGroup from '@/components/TabGroup'
import Image from 'next/image'
import PageBanner from '@/components/layout/PageBanner'

function ObjIntro() {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <Layout>
      <PageBanner />
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-6 text-indigo-600 text-center tracking-widest">
            [ 道具說明 ]
          </h1>
          <div className=" space-y-5">
            {[...Array(8)].map((t, i) => (
              <div key={i} className="flex bg-white shadow-md">
                <Image
                  src="https://fakeimg.pl/200x200"
                  alt=""
                  width="150"
                  height="150"
                />
                <div className="flex-1 p-4">
                  <p className="text-lg font-semibold text-indigo-500 mb-1">
                    道具名稱
                  </p>
                  <div className="text-gray-500 leading-7">
                    道具的說明內文道具的說明內文道具的說明內文道具的說明內文，道具的說明內文道具的說明內文道具的說明內文道具的說明內文道具的說明內，道具的說明內文道具的說明內文道具的說明內文道具的說明內文道具的說明內文道具的說明內文...
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ObjIntro
