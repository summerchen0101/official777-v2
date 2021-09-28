import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function UserPw() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto lg:py-20">
          <h1 className="title text-light">修改密碼</h1>
          <div className="lg:bg-black/50 lg:rounded-xl pb-8 pt-0 lg:pt-8 px-7 mx-3">
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  舊密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  新密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                />
                <p className="text-gold-400 text-sm mt-2 lg:mt-0">
                  ＊中英文6~12位
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  新密碼確認
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                />
              </div>
              <div className="pt-3 text-center space-x-5 flex justify-center">
                <button className="btn w-40">取消修改</button>
                <button className="btn active w-40">確認修改</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserPw
