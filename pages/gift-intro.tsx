import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function GiftIntro() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
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
