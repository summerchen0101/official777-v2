import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import useAuth from '@/hooks/useAuth'
import { PaymentStatus } from '@/lib/enums'
import { paymentStatusMap, payTypeMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toCurrency, toDateTime, toCdnUrl } from '@/utils'
import cs from 'classnames'
import React, { useState } from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'

function RechargeRec() {
  const [page, setPage] = useState(1)
  const { list, isLoading, paginator } = useRechargeRecList({
    paymentStatus: 0,
    paymentGateway: 0,
    createdAtMsStart: 0,
    createdAtMsEnd: 0,
    page,
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
              src={toCdnUrl('/title_recharge_rec.png')}
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
              <div className="sm:hidden">
                {list?.map((t) => (
                  <div
                    key={t.ID}
                    className="text-gray-400 text-sm p-3 border-2 rounded-lg border-gray-600 mb-3"
                  >
                    {/* <td>{paymentGatewayMap[t.PaymentGateway]}</td> */}
                    <div>
                      儲值金額：
                      <span className="text-gold-500">
                        ${toCurrency(t.PriceAmountMicros)}
                      </span>
                    </div>
                    <div>
                      儲值類型：
                      <span className="text-white">
                        {payTypeMap[t.PayType] || '-'}
                      </span>
                    </div>
                    <div>
                      儲值時間：
                      <span className="text-white">
                        {toDateTime(t.CreatedAtMs)}
                      </span>
                    </div>
                    <div
                      className={cs({
                        'text-red-500': t.PaymentStatus === PaymentStatus.Fail,
                        'text-green-500':
                          t.PaymentStatus === PaymentStatus.Success,
                      })}
                    >
                      儲值狀態：
                      <span className="text-purple-400">
                        {paymentStatusMap[t.PaymentStatus]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block w-full overflow-x-auto">
                <table className="w-[700px] sm:w-full rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th>類別</th>
                      <th>儲值時間</th>
                      <th>狀態</th>
                      <th>金額</th>
                    </tr>
                  </thead>
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
              </div>
              <ReactPaginate
                className="text-white flex justify-center items-center gap-6 text-lg mt-4"
                breakLabel="..."
                nextLabel={<FaAngleRight />}
                onPageChange={({ selected }) => setPage(selected + 1)}
                pageRangeDisplayed={paginator?.perPage}
                pageCount={paginator?.totalPage || 1}
                previousLabel={<FaAngleLeft />}
                activeLinkClassName="text-gold-500 cursor-not-allowed"
              />
            </LoadingCover>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
