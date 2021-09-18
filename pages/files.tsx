import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'
import { BiFile } from 'react-icons/bi'

function FilesPage() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="title text-light">表單下載</h1>
          <div className="bg-brown-500 p-6 space-y-2 rounded-xl">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="text-base cursor-pointer flex space-x-2 text-brown-900 even:bg-brown-400 odd:bg-brown-300 rounded-md p-2"
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
