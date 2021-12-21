import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import useAuth from '@/hooks/useAuth'
import { PaymentStatus } from '@/lib/enums'
import { paymentStatusMap, payTypeMap } from '@/lib/map'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toCurrency, toDateTime, toImgPath } from '@/utils'
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
