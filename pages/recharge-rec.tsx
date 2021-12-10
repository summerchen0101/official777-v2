import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import { paymentGatewayMap, paymentStatusMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toImgPath, toCurrency, toDateTime } from '@/utils'
import React from 'react'
import cs from 'classnames'
import { PaymentStatus } from '@/lib/enums'
function RechargeRec() {
  const { list, isLoading } = useRechargeRecList({
    paymentStatus: 0,
    paymentGateway: 0,
    createdAtMsStart: 0,
    createdAtMsEnd: 0,
    page: 1,
    perPage: 10,
  })
  useAuth()
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toImgPath('/title_recharge_rec.png')}
              alt="儲值紀錄"
              className="h-10"
            />
          </div>
          <div className="bg-black/50 frame">
            <table className="w-full rounded-lg overflow-hidden">
              {/* <thead>
                <tr>
                  <th></th>
                  <th>金額</th>
                  <th>金幣數量</th>
                </tr>
              </thead> */}
              <tbody>
                {list?.map((t) => (
                  <tr key={t.ID}>
                    <td>{paymentGatewayMap[t.paymentGateway]}</td>
                    <td>{toDateTime(t.createdAtMs)}</td>
                    <td
                      className={cs({
                        'text-red-500': t.paymentStatus === PaymentStatus.Fail,
                        'text-green-500':
                          t.paymentStatus === PaymentStatus.Success,
                      })}
                    >
                      {paymentStatusMap[t.paymentStatus]}
                    </td>
                    <td className="text-lg text-purple-700">
                      ${toCurrency(t.priceAmountMicros)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
