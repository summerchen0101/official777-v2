import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function FaqPage() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="space-y-4">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="text-lg bg-black/30 p-4 border border-gold-500/30 rounded-lg "
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
