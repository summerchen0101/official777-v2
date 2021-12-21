import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import { paymentGatewayMap, paymentStatusMap, payTypeMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toImgPath, toCurrency, toDateTime } from '@/utils'
import React from 'react'
import cs from 'classnames'
import { PaymentStatus } from '@/lib/enums'
import LoadingCover from '@/components/LoadingCover'
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
          <div>
            <div
              hidden={isLoading || list?.length! > 0}
              className="text-gold-600 text-2xl h-48 text-center"
            >
              尚無資料
            </div>

            <LoadingCover isLoading={isLoading}>
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
                      {/* <td>{paymentGatewayMap[t.PaymentGateway]}</td> */}
                      <td>{payTypeMap[t.PayType] || '-'}</td>
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
            </LoadingCover>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
