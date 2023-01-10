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

function ChangePwPage() {
  const { data: user } = useMe()

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
            src="/images/member/title_user.png"
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
                    <form className="form-horizontal" role="form">
                      <div className="form-group input-group-lg">
                        <label htmlFor="Password" className="control-label">
                          請選擇要修改的密碼
                        </label>
                        <br />
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="optionsRadiosinline"
                            id="optionsRadios1"
                            defaultValue="option1"
                            checked
                          />
                          修改密碼
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="optionsRadiosinline"
                            id="optionsRadios2"
                            defaultValue="option2"
                          />{' '}
                          修改二次密碼
                        </label>
                        <hr />
                        <label htmlFor="Password" className="control-label">
                          請設置8-12位新密碼，支援英文及數字
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Password"
                          placeholder="請設置8-12位新密碼，支援英文及數字"
                        />
                        <label htmlFor="Password2" className="control-label">
                          請再次輸入新密碼
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Password2"
                          placeholder="請再次輸入新密碼"
                        />
                        <label htmlFor="verify" className="control-label">
                          簡訊驗證碼
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control input-lg form-verify"
                          id="verify"
                          placeholder="請輸簡訊驗證碼"
                        />
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-verify"
                        >
                          發送驗證碼
                        </button>
                      </div>
                      <hr />
                      <br />
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        取消修改
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        確認修改
                      </button>
                      <hr className="float-none" />
                    </form>
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

export default ChangePwPage
