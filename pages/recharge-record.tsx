import AppDownloadFloat from '@/components/AppDownloadFloat'
import FooterComp from '@/components/FooterComp'
import HeaderNav from '@/components/HeaderNav'
import LoginPopup from '@/components/LoginPopup'
import LogoBox from '@/components/LogoBox'
import Pagination from '@/components/Pagination'
import RechargeFloat from '@/components/RechargeFloat'
import usePunishmentList from '@/services/usePunishmentList'
import useRechargeRecList from '@/services/useRechargeRecList'
import { toDateTime } from '@/utils'
import { useState } from 'react'

function PunishmentPage() {
  const [page, setPage] = useState(1)

  const { list, paginator } = useRechargeRecList({
    paymentStatus: 0,
    paymentGateway: 0,
    page,
    createdAtMsStart: 0,
    createdAtMsEnd: 0,
    perPage: 15,
  })

  return (
    <>
      <HeaderNav />
      <AppDownloadFloat />
      <RechargeFloat />
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
                    {/* <form role="form" className="row">
                      <div className="form-group col-lg-6">
                        <h3>
                          儲值總額(NT):999,999,999,999<span></span>
                        </h3>
                      </div>
                      <div className="form-group col-lg-3">
                        <label htmlFor="name">平台</label>
                        <select className="form-control">
                          <option>全部</option>
                          <option>Google</option>
                          <option>Apple</option>
                          <option>智冠Mycard</option>
                          <option>綠界</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-3">
                        <label htmlFor="name">狀態</label>
                        <select className="form-control">
                          <option>全部</option>
                          <option>尚未建立</option>
                          <option>訂單成功</option>
                          <option>訂單失敗</option>
                          <option>退款</option>
                          <option>補單</option>
                        </select>
                      </div>
                    </form> */}
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>平台</th>
                            <th>儲值時間</th>
                            <th>狀態</th>
                            <th>金額</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list?.map((t) => (
                            <tr key={t.ID}>
                              <td>-</td>
                              <td>2022-10-06 14:35:59</td>
                              <td>已取消</td>
                              <td>$1,000</td>
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

      <FooterComp />
      <LoginPopup />
    </>
  )
}

export default PunishmentPage
