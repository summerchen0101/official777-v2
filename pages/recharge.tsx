import Layout from '@/components/layout/Layout'
import React from 'react'
import { BiCreditCard, BiRightArrowAlt } from 'react-icons/bi'

function RechargePage() {
  return (
    <Layout>
      {/* <PageBanner /> */}
      <section>
        <div className="lg:w-[860px] mx-auto lg:py-20 px-4">
          <h1 className="title text-light">儲值購點</h1>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 rounded-md">
            {[...Array(8)].map((t, i) => (
              <div
                key={i}
                className="group flex items-center justify-center space-x-1 bg-black/50  hover:bg-black/70 shadow-md h-12 rounded-md cursor-pointer border border-white/30 hover:border-white/50 transition-all"
              >
                <BiCreditCard className="text-2xl text-gold-500" />
                <span className="text-gray-300 text-lg group-hover:text-gray-200 transition-all">
                  超商代碼
                </span>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-gold-500/30 my-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <p className="mb-2 text-gold-500 text-lg text-light">
                1. 請選擇預儲值的超商
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <button className="bg-black/50 text-gray-300 text-lg rounded h-16">
                  OK
                </button>
                <button className="bg-black/50 text-gray-300 text-lg rounded h-16">
                  萊爾富
                </button>
              </div>
            </div>
            <div className="">
              <p className="mb-2 text-gold-500 text-lg text-light">
                2. 請選擇儲值金額
              </p>
              <div className="w-full">
                <table className="w-full rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th></th>
                      <th>金額</th>
                      <th>金幣數量</th>
                      <th>VP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((t, i) => (
                      <tr key={i}>
                        <td>
                          <input type="radio" name="recharge" />
                        </td>
                        <td>$2,000</td>
                        <td>1,200</td>
                        <td>99</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-8 lg:mt-4 flex justify-end">
                  <button className="btn active flex space-x-3 items-center w-full lg:w-auto justify-center">
                    前往結帳 <BiRightArrowAlt className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargePage
