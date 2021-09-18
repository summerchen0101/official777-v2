import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Image from 'next/image'
import React from 'react'

function ObjIntro() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            道具說明
          </h1>
          <div className=" space-y-5">
            {[...Array(8)].map((t, i) => (
              <div key={i} className="flex gold-box shadow-md rounded-xl">
                <img
                  src="/game/blackjack.png"
                  className="h-40 w-40 object-cover rounded-l-xl"
                  alt=""
                />
                <div className="flex-1 p-4">
                  <p className="text-lg font-semibold text-gold-800 mb-1 border-b border-gold-400">
                    道具名稱
                  </p>
                  <div className="text-gold-100 leading-7">
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
