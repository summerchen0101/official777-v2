import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function FaqPage() {
  return (
    <Layout>
      <PageBanner />
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl text-indigo-600 text-center tracking-widest mb-4">
            [ 常見問題 ]
          </h1>
          <div className="bg-gray-100 p-6 space-y-5 rounded-md">
            {[...Array(5)].map((t, i) => (
              <div key={i} className="text-lg">
                <p className="text-indigo-500 font-semibold mb-1">
                  Q: 問題名稱問題名稱問題名稱問題名稱？
                </p>
                <div className="text-gray-500">
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
