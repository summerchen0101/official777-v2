import GiftPkgSelector from '@/components/GiftPkgSelector'
import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  PaymentGateway,
} from '@/lib/enums'
import { ecpayInvoiceMap, invoiceTypeMap } from '@/lib/map'
import useEcpayOrderCreate from '@/services/useEcpayOrderCreate'
import { StringMap } from '@/types'
import useAuthPage from '@/utils/useAuthPage'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'

interface Inputs {
  productID: number
  email: string
  phone: string
  // paymentType: ECPayPaymentType
  citizenCarrrierNum: string
  phoneCarrierNum: string
  loveCode: string
  agree: boolean
}

function RechargeAtmPage() {
  const [resUrl, setResUrl] = useState('')
  const [resHtml, setResHtml] = useState('')
  const [invoiceType, setInvoiceType] = useState(InvoiceType.DONATE)
  const [donateType, setDonateType] = useState('')
  const [carrierType, setCarrierType] = useState(
    ECPayInvoiceType.EC_PAY_INVOICE,
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    control,
  } = useForm<Inputs>()

  const { handler: doCreate, isLoading } = useEcpayOrderCreate()
  const user = useAuthPage()

  useEffect(() => {
    if (user) {
      setValue('email', user?.email!)
      setValue('phone', user?.cellphone?.replace('886-', '')!)
    }
  }, [user])

  const onSubmit = handleSubmit(async (d) => {
    const carrierNumMap: StringMap = {
      [ECPayInvoiceType.PHONE_CARRIER]: d.phoneCarrierNum,
      [ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE]: d.citizenCarrrierNum,
    }
    let loveCode = ''
    if (invoiceType === InvoiceType.DONATE) {
      loveCode = donateType === 'other' ? d.loveCode : '978'
    }
    const res = await doCreate({
      productID: d.productID,
      gatewayCode: PaymentGateway.ECPay,
      userID: user?.id!,
      paymentType: ECPayPaymentType.ATM,
      invoice: {
        eCPayInvoiceType:
          invoiceType === InvoiceType.DONATE
            ? ECPayInvoiceType.DONATE_INVOICE
            : carrierType,
        citizenDigitalCertificateNum: d.citizenCarrrierNum || undefined,
        carrierNum: carrierNumMap[carrierType] || undefined,
        loveCode,
        notifyMail: d.email || undefined,
        phone: d.phone || undefined,
      },
    })
    if (res?.data.data) {
      setResUrl(res.data.requestURL)
      setResHtml(res.data.data)
    }
  })

  const openPaymentWin = () => {
    if (!resUrl || !resHtml) return
    const win = window.open(resUrl, 'payment')
    const doc = resHtml.replace('<head>', `<head>\n<base href="${resUrl}">`)
    win?.document.write(doc)
    win?.document.close()
    setResUrl('')
    setResHtml('')
  }

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
            src="/images/recharge/header_recharge.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/recharge/header_phone_recharge.jpg"
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
            src="/images/recharge/title_gift.png"
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
                    <ul className="sub-tab2">
                      <li className="active">
                        <a href="#sub-tab-1">限定禮包</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">金幣福袋</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <h2 className="text-center">Step.1 選擇購買品項</h2>
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/gift01.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>大頭家歡樂包</h4>
                            </div>
                            <div className="title-right">
                              <img
                                src="../../images/recharge/gift_tag.png"
                                alt=""
                                className="img-responsive pull-right"
                              />
                            </div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：3888 <br />
                              內容物：
                              <br />
                              金龙碎片*5
                              <br />
                              官將首角色
                            </p>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/gift02.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>超值豪爽包</h4>
                            </div>
                            <div className="title-right">
                              <img
                                src="../../images/recharge/gift_tag.png"
                                alt=""
                                className="img-responsive pull-right"
                              />
                            </div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              {' '}
                              售價：8880
                              <br />
                              內容物：
                              <br />
                              金龙碎片*11
                              <br />
                              1 星超級卡
                              <br />
                              雷神角色
                            </p>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/gift03.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>金龍豐收包</h4>
                            </div>
                            <div className="title-right">
                              <img
                                src="../../images/recharge/gift_tag.png"
                                alt=""
                                className="img-responsive pull-right"
                              />
                            </div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：16800
                              <br />
                              內容物：
                              <br />
                              金龙碎片*22
                              <br />
                              1 星超級卡
                              <br />
                              趙雲角色
                            </p>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/lucky01.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>寶貝開運包</h4>
                            </div>
                            <div className="title-right"></div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：$2998 <br />
                              內容物：
                              <br />
                              一星威利卡X1
                              <br />
                            </p>
                            <table className="table table-dark table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>金幣隨機數</th>
                                  <th>倍率</th>
                                  <th>機率</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$330000</td>
                                  <td>110%</td>
                                  <td>30%</td>
                                </tr>
                                <tr>
                                  <td>$360000</td>
                                  <td>120%</td>
                                  <td>25%</td>
                                </tr>
                                <tr>
                                  <td>$390000</td>
                                  <td>130%</td>
                                  <td>20%</td>
                                </tr>
                                <tr>
                                  <td>$450000</td>
                                  <td>150%</td>
                                  <td>15%</td>
                                </tr>
                                <tr>
                                  <td>$600000</td>
                                  <td>200%</td>
                                  <td>7.5%</td>
                                </tr>
                                <tr>
                                  <td>$900000</td>
                                  <td>300%</td>
                                  <td>2.4%</td>
                                </tr>
                                <tr>
                                  <td>$1500000</td>
                                  <td>500%</td>
                                  <td>0.1%</td>
                                </tr>
                              </tbody>
                            </table>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/lucky02.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>九尾傾城包</h4>
                            </div>
                            <div className="title-right"></div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：$19998 <br />
                              內容物：
                              <br />
                              一星超級卡X1
                              <br />
                            </p>
                            <table className="table table-dark table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>金幣隨機數</th>
                                  <th>倍率</th>
                                  <th>機率</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$2200000</td>
                                  <td>110%</td>
                                  <td>30%</td>
                                </tr>
                                <tr>
                                  <td>$2400000</td>
                                  <td>120%</td>
                                  <td>25%</td>
                                </tr>
                                <tr>
                                  <td>$2600000</td>
                                  <td>130%</td>
                                  <td>20%</td>
                                </tr>
                                <tr>
                                  <td>$3000000</td>
                                  <td>150%</td>
                                  <td>15%</td>
                                </tr>
                                <tr>
                                  <td>$4000000</td>
                                  <td>200%</td>
                                  <td>7.5%</td>
                                </tr>
                                <tr>
                                  <td>$6000000</td>
                                  <td>300%</td>
                                  <td>2.4%</td>
                                </tr>
                                <tr>
                                  <td>$10000000</td>
                                  <td>500%</td>
                                  <td>0.1%</td>
                                </tr>
                              </tbody>
                            </table>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/lucky03.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>雷神降臨包</h4>
                            </div>
                            <div className="title-right"></div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：$49998
                              <br />
                              內容物：
                              <br />
                              一星超級卡X1
                              <br />
                            </p>
                            <table className="table table-dark table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>金幣隨機數</th>
                                  <th>倍率</th>
                                  <th>機率</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$5500000</td>
                                  <td>110%</td>
                                  <td>30%</td>
                                </tr>
                                <tr>
                                  <td>$6000000</td>
                                  <td>120%</td>
                                  <td>25%</td>
                                </tr>
                                <tr>
                                  <td>$6500000</td>
                                  <td>130%</td>
                                  <td>20%</td>
                                </tr>
                                <tr>
                                  <td>$7500000</td>
                                  <td>150%</td>
                                  <td>15%</td>
                                </tr>
                                <tr>
                                  <td>$10000000</td>
                                  <td>200%</td>
                                  <td>7.5%</td>
                                </tr>
                                <tr>
                                  <td>$15000000</td>
                                  <td>300%</td>
                                  <td>2.4%</td>
                                </tr>
                                <tr>
                                  <td>$25000000</td>
                                  <td>500%</td>
                                  <td>0.1%</td>
                                </tr>
                              </tbody>
                            </table>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box-new">
                          <div className="gift-img">
                            <img
                              src="../../images/recharge/lucky04.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="gift-text">
                            <div className="title-left">
                              <h4>周年如意包</h4>
                            </div>
                            <div className="title-right"></div>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              售價：$2500 <br />
                              內容物：
                              <br />
                              保底金額 : 200000
                              <br />
                            </p>
                            <table className="table table-dark table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>金幣隨機數</th>
                                  <th>機率</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>$10000</td>
                                  <td>30%</td>
                                </tr>
                                <tr>
                                  <td>$30000</td>
                                  <td>25%</td>
                                </tr>
                                <tr>
                                  <td>$50000</td>
                                  <td>20%</td>
                                </tr>
                                <tr>
                                  <td>$70000</td>
                                  <td>15%</td>
                                </tr>
                                <tr>
                                  <td>$90000</td>
                                  <td>7.5%</td>
                                </tr>
                                <tr>
                                  <td>$150000</td>
                                  <td>2.4%</td>
                                </tr>
                                <tr>
                                  <td>$200000</td>
                                  <td>0.1%</td>
                                </tr>
                              </tbody>
                            </table>
                            <br />
                            <button
                              type="button"
                              className="btn btn-default btn-lg btn-100"
                            >
                              立即購買
                            </button>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                    </div>
                    <h2 className="text-center">Step.2 選擇付款方式</h2>
                    <hr />
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th colSpan={2}>請選擇付款方式</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label>
                                <input
                                  type="radio"
                                  name="atmRadios"
                                  id="atmRadios1"
                                  defaultValue="atmoption1"
                                />
                                銀行轉帳ATM
                              </label>
                            </td>
                            <td>
                              <label>
                                <input
                                  type="radio"
                                  name="atmRadios"
                                  id="atmRadios2"
                                  defaultValue="atmoption2"
                                />
                                信用卡付款
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h2 className="text-center">Step.3 填寫發票資訊</h2>
                    <hr />
                    <form role="form">
                      <div className="form-group col-lg-6">
                        <label htmlFor="name">發票類型</label>
                        <select className="form-control input-lg">
                          <option>捐贈發票</option>
                          <option>電子發票</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-6 ">
                        <label htmlFor="name">捐贈發票</label>
                        <select className="form-control input-lg">
                          <option>捐給愛心動物協會</option>
                          <option>其他協會</option>
                        </select>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" />
                            我同意辦理退貨時，由三聯陽泰科技代為處理發票及銷貨退回證明單，以加速退貨退款作業。
                          </label>
                        </div>
                      </div>
                    </form>
                    <hr className="float-none" />
                    <h2 className="text-center">Step.4 聯絡資訊(二擇一填寫)</h2>
                    <hr />
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>手機號碼或Email，請至少填一項</th>
                          </tr>
                        </thead>
                      </table>
                      <br />
                      <form role="form">
                        <div className="form-group col-lg-6 input-group-lg">
                          <label htmlFor="mail" className="control-label ">
                            E-Mail
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請輸入E-Mail"
                            id="mail"
                          />
                        </div>
                        <div className="form-group col-lg-6 input-group-lg">
                          <label htmlFor="phone" className="control-label ">
                            手機號碼
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請輸入手機號碼"
                            id="phone"
                          />
                        </div>
                      </form>
                    </div>
                    <p className="text-center">
                      <span className="glyphicon glyphicon-exclamation-sign" />
                      請注意！系統處理時間約5分鐘 ~
                      1小時才能完成遊戲入點，請耐心等候。
                    </p>
                    <br />
                    <form className="form-horizontal" role="form">
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        立即購買
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

export default RechargeAtmPage
