import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function UserPw() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            修改密碼
          </h1>
          <div className="gold-box rounded-xl p-7">
            <form>
              <div className="flex space-x-4 items-center mb-5">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  舊密碼
                </label>
                <input
                  type="password"
                  className="rounded border-none bg-black/50 flex-1 h-10 text-white"
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
                    className="rounded border-none bg-black/50 h-10 w-full text-white"
                  />
                  <p className="text-white absolute text-sm mt-1">
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
                  className="rounded border-none bg-black/50 flex-1 h-10 text-white"
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
