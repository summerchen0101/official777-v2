import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import TabGroup from '@/components/TabGroup'
import Image from 'next/image'

function ObjIntro() {
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
            [ 紅包說明 ]
          </h1>
          <div className="bg-gray-300 flex items-center justify-center min-h-[400px] mt-4">
            IMAGE
            {/* <Image
              src="https://fakeimg.pl/500x300"
              alt=""
              width="500"
              height="300"
            /> */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ObjIntro
