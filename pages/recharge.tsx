import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'
import { BiCreditCard, BiRightArrowAlt } from 'react-icons/bi'
import cs from 'classnames'
import PageBanner from '@/components/layout/PageBanner'
import useRecharge from '@/services/useRecharge'
import { toCdnImgPath } from '@/utils'
function RechargePage() {
  const cvsList = [
    { label: '全家', img: '/recharge/logo_familyMart.png' },
    { label: '萊爾富', img: '/recharge/logo_hiLife.png' },
    { label: 'OK', img: '/recharge/logo_okMart.png' },
    { label: '7-11', img: '/recharge/logo_sevenEleven.png' },
  ]
  const [selectedCode, setSelectedCode] = useState(0)
  const [selectedStore, setSelectedStore] = useState(0)
  const { handler: recharge, isLoading } = useRecharge()
  const productsMap = {
    17: '5K',
    18: '13K',
    19: '27K',
    20: '55K',
    21: '140K',
    22: '329K',
  }

  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 rounded-md">
            {[...Array(8)].map((t, i) => (
              <div
                key={i}
                onClick={() => setSelectedCode(i)}
                className={cs(
                  'group flex items-center justify-center space-x-1 bg-purple-900   shadow-md h-12 rounded cursor-pointer border border-white/50 transition-all text-white',
                  selectedCode === i && 'bg-yellow-500/90 text-black',
                )}
              >
                <BiCreditCard className={cs('text-2xl mr-2')} />
                <span className={cs('text-lg transition-all')}>超商代碼</span>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-gold-500/30 my-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <img
                src={toCdnImgPath('/recharge/text_chooseStore.png')}
                className="h-7 mb-4"
                alt=""
              />
              <div className="grid grid-cols-2 gap-6">
                {cvsList.map((t, i) => (
                  <img
                    key={i}
                    src={toCdnImgPath(t.img)}
                    className="cursor-pointer"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="">
              <img
                src={toCdnImgPath('/recharge/text_chooseAmount.png')}
                className="h-7 mb-4"
                alt=""
              />
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
                    {Object.entries(productsMap).map(([key, label], i) => (
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
