import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import Paginator from '@/components/Paginator'
import useAuth from '@/hooks/useAuth'
import { PaymentStatus } from '@/lib/enums'
import {
  gatewayPaymentMap,
  mcPaymentTypeMap,
  paymentGatewayMap,
  paymentStatusMap,
} from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toCdnUrl, toCurrency, toDateTime } from '@/utils'
import cs from 'classnames'
import React, { useState } from 'react'

function RechargeRec() {
  const [page, setPage] = useState(1)
  const { list, isLoading, paginator } = useRechargeRecList({
    paymentStatus: 0,
    paymentGateway: 0,
    createdAtMsStart: 0,
    createdAtMsEnd: 0,
    page,
    perPage: 30,
  })
  useAuth()
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_recharge_rec.png')}
              alt="儲值紀錄"
              className="h-10"
            />
          </div>
          <div>
            <LoadingCover isLoading={isLoading}>
              <div className="w-full overflow-x-auto">
                <table className="w-[700px] sm:w-full sm:rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th>平台</th>
                      <th>交易方式</th>
                      <th>儲值時間</th>
                      <th>狀態</th>
                      <th>金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list?.map((t) => (
                      <tr key={t.ID}>
                        {/* <td>{paymentGatewayMap[t.PaymentGateway]}</td> */}
                        <td title="平台">
                          {paymentGatewayMap[t.PaymentGateway] || '-'}
                        </td>
                        <td>
                          {gatewayPaymentMap[t.PaymentGateway]?.[
                            t.PaymentType
                          ] || '-'}
                        </td>
                        <td>{toDateTime(t.CreatedAtMs)}</td>
                        <td
                          className={cs({
                            'text-red-500':
                              t.PaymentStatus === PaymentStatus.Fail,
                            'text-green-500':
                              t.PaymentStatus === PaymentStatus.Success,
                          })}
                        >
                          {paymentStatusMap[t.PaymentStatus]}
                        </td>
                        <td className="text-lg text-purple-700">
                          ${toCurrency(t.PriceAmountMicros)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Paginator onPageChange={setPage} paginator={paginator} />
            </LoadingCover>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
