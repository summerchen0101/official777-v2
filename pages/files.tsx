import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'
import { BiFile } from 'react-icons/bi'

function FilesPage() {
  return (
    <Layout>
      <PageBanner />
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl text-indigo-600 text-center tracking-widest mb-4">
            [ 表單下載 ]
          </h1>
          <div className="bg-gray-100 p-6 space-y-2 rounded-md">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="text-base cursor-pointer flex space-x-2 text-gray-600 bg-white rounded-md p-2"
              >
                <BiFile className="text-xl" />
                <span>下載檔案名稱.pdf</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FilesPage
