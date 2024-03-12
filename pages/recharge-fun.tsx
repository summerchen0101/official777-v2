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
            src="/images/recharge/title_funpoint.png"
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
                    <h2 className="text-center">Step.1 選擇購買品項</h2>
                    <hr />
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>品項</th>
                            <th>金額</th>
                            <th>頭家點</th>
                            <th>金幣</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios1"
                                defaultValue="option1"
                              />
                            </td>
                            <td>$100</td>
                            <td>105</td>
                            <td>10500(1.05%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios2"
                                defaultValue="option2"
                              />
                            </td>
                            <td>$300</td>
                            <td>324</td>
                            <td>32400(1.08%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios3"
                                defaultValue="option3"
                              />
                            </td>
                            <td>$500</td>
                            <td>550</td>
                            <td>55000(1.10%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios4"
                                defaultValue="option4"
                              />
                            </td>
                            <td>$1,000</td>
                            <td>1120</td>
                            <td>112000(1.12%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios5"
                                defaultValue="option5"
                              />
                            </td>
                            <td>$2,000</td>
                            <td>2280</td>
                            <td>228000(1.14%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios6"
                                defaultValue="option6"
                              />
                            </td>
                            <td>$3,000</td>
                            <td>3480</td>
                            <td>348000(1.16%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios7"
                                defaultValue="option7"
                              />
                            </td>
                            <td>$5,000</td>
                            <td>5900</td>
                            <td>590000(1.18%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios8"
                                defaultValue="option8"
                              />
                            </td>
                            <td>$10,000</td>
                            <td>12000</td>
                            <td>1200000(1.20%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios9"
                                defaultValue="option9"
                              />
                            </td>
                            <td>$20,000</td>
                            <td>24000</td>
                            <td>2400000(1.20%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios10"
                                defaultValue="option10"
                              />
                            </td>
                            <td>$30,000</td>
                            <td>36000</td>
                            <td>3600000(1.20%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios11"
                                defaultValue="option11"
                              />
                            </td>
                            <td>$40,000</td>
                            <td>48000</td>
                            <td>4800000(1.20%)</td>
                          </tr>
                        </tbody>
                      </table>
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
                                綠界銀行轉帳
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
                                綠界信用卡付款
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
