import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  ItemType,
  PaymentGateway,
} from '@/lib/enums'
import { ecpayPaymentTypeMap } from '@/lib/map'
import useEcpayOrderCreate from '@/services/useEcpayOrderCreate'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { StringMap } from '@/types'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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

function ContactOkPage() {
  const router = useRouter()
  const [paymentType, setPaymentType] = useState(ECPayPaymentType.ATM)
  const [invoiceType, setInvoiceType] = useState(InvoiceType.DONATE)
  const [donateType, setDonateType] = useState('')
  const [carrierType, setCarrierType] = useState(
    ECPayInvoiceType.EC_PAY_INVOICE,
  )
  const isShow = usePopupStore((s) => s.transfer.isShow)
  const onHide = usePopupStore((s) => s.transfer.onHide)
  const { list } = useGoodsList({
    page: 1,
    perPage: 30,
    itemType: ItemType.All,
    paymentType,
    paymentGateway: PaymentGateway.ECPay,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
    setValue,
    control,
  } = useForm<Inputs>()

  useEffect(() => {
    if (list?.length) {
      setValue('productID', list?.[0].ItemId)
    }
  }, [list])

  const { handler: doCreate, isLoading } = useEcpayOrderCreate()
  const { data } = useMe()

  const handleUseUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue('email', data?.email!)
      setValue('phone', data?.cellphone?.replace('886-', '')!)
    } else {
      setValue('email', '')
      setValue('phone', '')
    }
  }

  const onSubmit = handleSubmit(async (d) => {
    const product = list?.find((t) => t.ItemId === d.productID)

    if (
      confirm(
        `透過${ecpayPaymentTypeMap[paymentType]}消費 $${product?.Price}元是否確認?`,
      )
    ) {
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
        userID: data?.id!,
        paymentType,
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
        const win = window.open(
          'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5',
          'payment',
        )
        const doc = res.data.data.replace(
          '<head>',
          `<head>\n<base href="${res.data.requestURL}">`,
        )
        win?.document.write(doc)

        win?.document.close()
      }
    }
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
            src="/images/recharge/title_ecpay_atm.png"
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
                                defaultChecked
                              />
                            </td>
                            <td>$1,000</td>
                            <td>1,060</td>
                            <td>106,000(6%)</td>
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
                            <td>$1,500</td>
                            <td>1,590</td>
                            <td>159,000(6%)</td>
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
                            <td>$2,000</td>
                            <td>2,160</td>
                            <td>216,000(8%)</td>
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
                            <td>$3,000</td>
                            <td>3,270</td>
                            <td>327,000(9%)</td>
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
                            <td>$5,000</td>
                            <td>5,500</td>
                            <td>550,000(10%)</td>
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
                            <td>$10,000</td>
                            <td>11,200</td>
                            <td>1,120,000(12%)</td>
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
                            <td>$20,000</td>
                            <td>22,600</td>
                            <td>2,260,000(13%)</td>
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
                            <td>$30,000</td>
                            <td>34,500</td>
                            <td>3,450,000(15%)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h2 className="text-center">Step.2 選擇付款類型</h2>
                    <hr />
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th colSpan={2}>請選擇付款類型</th>
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
                                  defaultChecked
                                />
                                ATM
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
                                WEBATM
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
                      <div className="form-group col-lg-6">
                        <label htmlFor="name">電子載具</label>
                        <select className="form-control input-lg">
                          <option>綠界載具</option>
                          <option>自然人憑證載具</option>
                          <option>手機載具</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-6 input-group-lg">
                        <label htmlFor="number1" className="control-label">
                          捐贈碼
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="number1"
                        />
                      </div>
                      <div className="form-group col-lg-6 input-group-lg">
                        <label htmlFor="number2" className="control-label ">
                          綠界載具
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="number2"
                        />
                      </div>
                      <div className="form-group col-lg-6 input-group-lg">
                        <label htmlFor="number3" className="control-label ">
                          自然人憑證載具
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="number3"
                        />
                      </div>
                      <div className="form-group col-lg-6 input-group-lg">
                        <label htmlFor="number4" className="control-label ">
                          手機載具 (ex: /xxxx)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="number4"
                        />
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
                            <th>
                              <form role="form">
                                <div className="col-lg-12">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox" />
                                      使用會員資料
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </th>
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

export default ContactOkPage
