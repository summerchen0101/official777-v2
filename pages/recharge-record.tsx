import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import Pagination from '@/components/Pagination'
import { PaymentStatus } from '@/lib/enums'
import {
  gatewayPaymentMap,
  paymentGatewayMap,
  paymentStatusMap,
} from '@/lib/map'
import useMe from '@/services/useMe'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toCurrency, toDateTime } from '@/utils'
import cs from 'classnames'
import { useState } from 'react'

function PunishmentPage() {
  const [page, setPage] = useState(1)
  const [gateway, setGateway] = useState(0)
  const [status, setStatus] = useState(0)
  const { data: user } = useMe()

  const { list, paginator } = useRechargeRecList({
    paymentStatus: status,
    paymentGateway: gateway,
    page,
    createdAtMsStart: 0,
    createdAtMsEnd: 0,
    perPage: 15,
  })

  return (
    <PageLayout>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <div className="content-box">
          <img
            src="/images/member/header_member.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/member/header_phone_member.jpg"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </div>
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div className="content">
        <div className="content-title-box">
          <img
            src="/images/member/title_recharge.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div className="tab-content-box">
          <div className="ranking-box">
            <div className="ranking-box-gold">
              <div className="ranking-box-goldline">
                <div className="ranking-box-black">
                  <div className="content-box">
                    <form role="form" className="row">
                      <div className="form-group col-lg-6">
                        <h3>儲值總額(NT):{toCurrency(user?.vipExpAmount)}</h3>
                      </div>
                      <div className="form-group col-lg-3">
                        <label htmlFor="name">平台</label>
                        <select
                          className="form-control"
                          defaultValue={gateway}
                          onChange={(e) => setGateway(+e.target.value)}
                        >
                          <option value={0}>全部</option>
                          {Object.entries(paymentGatewayMap).map(
                            ([key, label]) => (
                              <option key={key} value={key}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      <div className="form-group col-lg-3">
                        <label htmlFor="name">狀態</label>
                        <select
                          className="form-control"
                          defaultValue={status}
                          onChange={(e) => setStatus(+e.target.value)}
                        >
                          <option value={0}>全部</option>
                          {Object.entries(paymentStatusMap).map(
                            ([key, label]) => (
                              <option key={key} value={key}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
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
                    <Pagination
                      page={page}
                      onPageChange={setPage}
                      totalPage={paginator?.totalPage || 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="float-none" />
      </div>
    </PageLayout>
  )
}

export default PunishmentPage
