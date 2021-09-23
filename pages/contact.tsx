import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'
import { BiCloudUpload, BiUpload } from 'react-icons/bi'

function ContactPage() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="title text-light">聯繫客服</h1>
          <div className="bg-black/50 rounded-xl p-7">
            <form>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-200">
                  問題類型
                </label>
                <select className="rounded-sm border-none bg-gray-100 w-1/3 h-9">
                  <option value="">預設</option>
                </select>
              </div>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-200">
                  意見內容
                </label>
                <div className="flex-1">
                  <textarea className="rounded-sm border-none bg-gray-100 w-full" />
                </div>
              </div>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-200">
                  相關截圖
                </label>
                <div className="relative h-40 rounded-lg bg-white flex justify-center items-center hover:cursor-pointer flex-1">
                  <div className="absolute">
                    <div className="flex flex-col items-center ">
                      <i className="fa fa-cloud-upload fa-3x text-gray-200" />
                      <span className="block text-gray-400 font-normal">
                        <BiCloudUpload size="100px" className="text-gray-200" />
                      </span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="h-full w-full opacity-0"
                    onChange={(e) => console.log(e.target?.files?.[0]?.name)}
                  />
                </div>
              </div>

              <div className="pt-3 text-center">
                <button className="btn active w-40">確認送出</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
