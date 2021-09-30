import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Loading from '@/components/Loading'
import { paymentGatewayMap, productCategoryMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
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
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <h1 className="title text-light">儲值紀錄</h1>
          <div className="px-4">
            {isLoading ? (
              <Loading />
            ) : (
              <table className="w-full text-gray-500 shadow">
                <thead>
                  <tr>
                    <th className="w-1/3">平台</th>
                    <th className="w-1/3">金額</th>
                    <th className="w-1/3">日期</th>
                  </tr>
                </thead>
                <tbody>
                  {list?.map((t, i) => (
                    <tr key={t.ID}>
                      {/* <td>{productCategoryMap[t.productCategory]}</td> */}
                      <td>{paymentGatewayMap[t.paymentGateway]}</td>
                      <td>${t.priceAmountMicros}</td>
                      <td>2021-09-01 11:22:00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
