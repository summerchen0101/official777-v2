import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function FaqPage() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="title text-light">常見問題</h1>
          <div className="bg-black/50 px-6 py-3 rounded-xl">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="text-lg border-b last-of-type:border-b-0 border-gray-700 py-4"
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
