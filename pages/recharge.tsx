import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React, { useState } from 'react'
import {
  BiArrowToRight,
  BiCaretRight,
  BiCartAlt,
  BiCreditCard,
  BiRightArrowAlt,
} from 'react-icons/bi'

function RechargePage() {
  return (
    <Layout>
      <PageBanner />
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-6 text-indigo-600 text-center tracking-widest">
            [ 儲值購點 ]
          </h1>
          <div className="grid grid-cols-5 gap-4 mt-4 bg-gray-300 rounded-md p-5">
            {[...Array(8)].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-center space-x-1 bg-white shadow-md h-12 rounded-md"
              >
                <BiCreditCard className="text-2xl text-indigo-500" />
                <span className="text-gray-500 text-lg">超商代碼</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="">
              <p className="mb-2 text-indigo-500">1.請選擇預儲值的超商</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white rounded-lg h-16">OK</button>
                <button className="bg-white rounded-lg h-16">萊爾富</button>
              </div>
            </div>
            <div className="">
              <p className="mb-2 text-indigo-500">2.請選擇儲值金額</p>
              <div className="w-full">
                <table className="w-full text-gray-500">
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
                <div className="mt-4 flex justify-end">
                  <button className="btn primary flex space-x-3 items-center">
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
