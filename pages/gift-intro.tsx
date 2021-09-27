import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function GiftIntro() {
  return (
    <Layout>
      {/* <PageBanner /> */}
      <section>
        <div className="lg:w-[860px] mx-auto lg:py-20">
          <h1 className="title text-light">紅包說明</h1>
          <div className="bg-gray-300 flex items-center justify-center min-h-[400px] mx-4">
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
