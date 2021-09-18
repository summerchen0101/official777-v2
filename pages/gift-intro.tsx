import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function GiftIntro() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            紅包說明
          </h1>
          <div className="bg-gray-300 flex items-center justify-center min-h-[400px]">
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

export default GiftIntro
