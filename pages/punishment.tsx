import AppDownloadFloat from '@/components/AppDownloadFloat'
import FooterComp from '@/components/FooterComp'
import HeaderNav from '@/components/HeaderNav'
import LoginPopup from '@/components/LoginPopup'
import LogoBox from '@/components/LogoBox'
import Pagination from '@/components/Pagination'
import RechargeFloat from '@/components/RechargeFloat'
import usePunishmentList from '@/services/usePunishmentList'
import { toDateTime } from '@/utils'
import { format } from 'date-fns'
import { useState } from 'react'

function PunishmentPage() {
  const [page, setPage] = useState(1)
  const { list, paginator } = usePunishmentList({ page, perPage: 15 })

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
            src="../../images/news/header_news.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="../../images/news/header_phone_news.jpg"
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
            src="../../images/news/title_punishment.png"
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
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>暱稱</th>
                            <th>開始日期</th>
                            <th>結束日期</th>
                            <th>懲罰原因</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list?.map((t) => (
                            <tr key={t.userID}>
                              <td>{t.nickName}</td>
                              <td>{toDateTime(t.suspendAtMs)}</td>
                              <td>
                                {t.suspendUntilMs > 0
                                  ? toDateTime(t.suspendUntilMs)
                                  : '永久'}
                              </td>
                              <td>{t.reason || '-'}</td>
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
