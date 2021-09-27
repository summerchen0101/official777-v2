import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'
import { BiFile } from 'react-icons/bi'

function FilesPage() {
  return (
    <Layout>
      {/* <PageBanner /> */}
      <section>
        <div className="lg:w-[860px] min-h-[400px] mx-auto lg:py-20">
          <h1 className="title text-light">表單下載</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-4 px-4">
            {[...Array(5)].map((t, i) => (
              <div
                key={i}
                className="cursor-pointer flex items-center space-x-4 text-white/60 bg-black/50 rounded-md p-3 text-lg h-20"
              >
                <BiFile className="text-3xl text-gold-500" />
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
