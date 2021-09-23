import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Image from 'next/image'
import React from 'react'

function ObjIntro() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto py-10">
          <h1 className="title text-light">道具說明</h1>
          <div className="space-y-5 px-4">
            {[...Array(8)].map((t, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row bg-black/50 shadow-md rounded-xl"
              >
                <img
                  src="/banner/banner_01.png"
                  className="h-60 lg:h-40 w-full lg:w-40 object-cover rounded-l-xl"
                  alt=""
                />
                <div className="flex-1 p-4">
                  <p className="text-lg font-semibold text-gold-500 mb-1">
                    道具名稱
                  </p>
                  <div className="text-gold-100 leading-7">
                    道具的說明內文道具的說明內文道具的說明內文道具的說明內文，道具的說明內文道具的說明內文道具的說明內文道具的說明內文道具的說明內，說明內文道具的說明內文道具的說明內文...
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
