import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Loading from '@/components/Loading'
import useAuth from '@/hooks/useAuth'
import { paymentGatewayMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toCurrency, toDateTime } from '@/utils'
import React from 'react'

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
              src="/title_recharge_rec.png"
              alt="儲值紀錄"
              className="h-10"
            />
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              list?.map((t, i) => (
                <div
                  key={t.ID}
                  className="flex items-center text-gray-300 border-b border-gold-500/30 py-4 bg-black/50 p-4 last-of-type:border-b-0"
                >
                  {/* <td>{productCategoryMap[t.productCategory]}</td> */}
                  <div className="flex-1">
                    <div className="text-yellow-300">
                      {paymentGatewayMap[t.paymentGateway]}
                    </div>
                    <div>{toDateTime(t.createdAtMs)}</div>
                  </div>
                  <div className="text-xl text-green-500">
                    ${toCurrency(t.priceAmountMicros, 0)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
