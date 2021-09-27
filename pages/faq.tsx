import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function FaqPage() {
  return (
    <Layout>
      {/* <PageBanner /> */}
      <section>
        <div className="lg:w-[860px] mx-auto lg:py-20">
          <h1 className="title text-light">常見問題</h1>
          <div className="p-3">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="text-lg py-4 bg-black/30 p-4 mb-4 rounde-xl"
              >
                <p className="text-gold-500 font-semibold mb-1">
                  Q: 問題名稱問題名稱問題名稱問題名稱？
                </p>
                <div className="text-gray-300">
                  回答的內容回答的內容回答的內容回答的內容，回答的內容回答的內容回答的內容回答的內容
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage
