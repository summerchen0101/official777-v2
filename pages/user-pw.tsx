import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'

function UserPw() {
  const [activeTab, setActiveTab] = useState('1')
  return (
    <Layout>
      <section>
        <div className="w-[860px] h-[200px] mx-auto flex items-center justify-center bg-gray-300">
          Banner
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-6 text-indigo-600 text-center tracking-widest">
            [ 修改密碼 ]
          </h1>
          <div className="bg-gray-300 mt-4 p-7">
            <form>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  舊密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="flex space-x-4 items-center mb-10">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  新密碼
                </label>
                <div className="flex-1">
                  <input
                    type="password"
                    className="rounded-sm border-none bg-gray-100 h-9 w-full"
                  />
                  <p className="text-gray-500 absolute text-sm mt-1">
                    中英文6~12位
                  </p>
                </div>
                <div className="w-24"></div>
              </div>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  新密碼確認
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="pt-3 text-center space-x-5">
                <button className="btn w-40">取消修改</button>
                <button className="btn primary w-40">確認修改</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserPw
