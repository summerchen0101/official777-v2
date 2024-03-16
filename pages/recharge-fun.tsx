import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import RechargePointSelector from '@/components/RechargePointSelector'
import usePaymentWin from '@/hooks/usePaymentWin'
import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  ItemType,
  PaymentGateway,
} from '@/lib/enums'
import { ecpayInvoiceMap, ecpayPaymentTypeMap, invoiceTypeMap } from '@/lib/map'
import useEcpayOrderCreate from '@/services/useEcpayOrderCreate'
import useGoodsList from '@/services/useGoodsList'
import { StringMap } from '@/types'
import useAuthPage from '@/utils/useAuthPage'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface Inputs {
  productID?: number
  email: string
  phone: string
  paymentType: ECPayPaymentType
  citizenCarrrierNum: string
  phoneCarrierNum: string
  loveCode: string
  agree: boolean
}

function RechargeFunPage() {
  const [invoiceType, setInvoiceType] = useState(InvoiceType.DONATE)
  const [donateType, setDonateType] = useState('')
  const [carrierType, setCarrierType] = useState(
    ECPayInvoiceType.EC_PAY_INVOICE,
  )

  const { list } = useGoodsList({
    page: 1,
    perPage: 30,
    itemType: ItemType.All,
    paymentType: ECPayPaymentType.ATM,
    paymentGateway: PaymentGateway.ECPay,
  })
  const defaultValues: Inputs = {
    paymentType: ECPayPaymentType.ATM,
    productID: list?.[0].ItemId,
    email: '',
    phone: '',
    citizenCarrrierNum: '',
    phoneCarrierNum: '',
    loveCode: '',
    agree: false,
  }

  const { resUrl, setResUrl, resHtml, setResHtml, openPaymentWin } =
    usePaymentWin()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
    reset,
  } = useForm<Inputs>({
    defaultValues,
  })

  useEffect(() => {
    if (list?.length) {
      setValue('productID', list?.[0].ItemId)
    }
  }, [list])

  const { handler: doCreate, isLoading } = useEcpayOrderCreate()
  const user = useAuthPage()

  useEffect(() => {
    if (user) {
      setValue('email', user?.email!)
      setValue('phone', user?.cellphone?.replace('886-', '')!)
    }
  }, [user])

  const onSubmit = handleSubmit(async (d) => {
    const product = list?.find((t) => t.ItemId === d.productID)

    if (confirm(`消費 $${product?.Price}元是否確認?`)) {
      const carrierNumMap: StringMap = {
        [ECPayInvoiceType.PHONE_CARRIER]: d.phoneCarrierNum,
        [ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE]: d.citizenCarrrierNum,
      }
      let loveCode = ''
      if (invoiceType === InvoiceType.DONATE) {
        loveCode = donateType === 'other' ? d.loveCode : '978'
      }
      const res = await doCreate({
        productID: d.productID || 0,
        gatewayCode: PaymentGateway.ECPay,
        userID: user?.id!,
        paymentType: +d.paymentType,
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
                    <RechargePointSelector
                      list={list}
                      name="productID"
                      control={control}
                    />
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
                                  {...register('paymentType', {
                                    setValueAs: (val) => val?.toString(),
                                  })}
                                  value={ECPayPaymentType.ATM}
                                />
                                綠界銀行轉帳
                              </label>
                            </td>
                            <td>
                              <label>
                                <input
                                  type="radio"
                                  {...register('paymentType', {
                                    setValueAs: (val) => val.toString(),
                                  })}
                                  value={ECPayPaymentType.CREDIT_CARD}
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
                        <select
                          className="form-control input-lg"
                          value={invoiceType}
                          onChange={(e) =>
                            setInvoiceType(e.target.value as InvoiceType)
                          }
                        >
                          {Object.entries(invoiceTypeMap).map(
                            ([code, label]) => (
                              <option key={code} value={code}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      {invoiceType === InvoiceType.DONATE ? (
                        <>
                          <div className="form-group col-lg-6 ">
                            <label htmlFor="name">捐贈發票</label>
                            <select
                              className="form-control input-lg"
                              value={donateType}
                              onChange={(e) => setDonateType(e.target.value)}
                            >
                              <option value="">捐給愛心動物協會</option>
                              <option value="other">其他單位</option>
                            </select>
                          </div>
                          <div
                            hidden={donateType !== 'other'}
                            className="form-group col-lg-6 input-group-lg"
                          >
                            <label htmlFor="number1" className="control-label">
                              捐贈碼
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="number1"
                              {...register('loveCode', {
                                required:
                                  invoiceType === InvoiceType.DONATE &&
                                  donateType === 'other' &&
                                  '不可為空',
                              })}
                            />
                            {errors.loveCode && (
                              <div className="text-danger">
                                {errors.loveCode.message}
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="form-group col-lg-6">
                            <label htmlFor="name">電子載具</label>
                            <select
                              className="form-control input-lg"
                              value={carrierType}
                              onChange={(e) => setCarrierType(+e.target.value)}
                            >
                              {Object.entries(ecpayInvoiceMap).map(
                                ([code, label]) => (
                                  <option key={code} value={code}>
                                    {label}
                                  </option>
                                ),
                              )}
                            </select>
                          </div>

                          <div
                            hidden={
                              carrierType !== ECPayInvoiceType.PHONE_CARRIER
                            }
                            className="form-group col-lg-6 input-group-lg"
                          >
                            <label htmlFor="number4" className="control-label ">
                              手機載具 (ex: /xxxx)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="number4"
                              {...register('phoneCarrierNum', {
                                onChange: (e) =>
                                  (e.target.value =
                                    e.target.value.toUpperCase()),
                                required:
                                  carrierType ===
                                    ECPayInvoiceType.PHONE_CARRIER &&
                                  '不可為空',
                              })}
                            />
                            {errors.phoneCarrierNum && (
                              <div className="text-danger">
                                {errors.phoneCarrierNum.message}
                              </div>
                            )}
                          </div>

                          <div
                            hidden={
                              carrierType !==
                              ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE
                            }
                            className="form-group col-lg-6 input-group-lg"
                          >
                            <label htmlFor="number4" className="control-label ">
                              自然人憑證載具
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="number4"
                              {...register('citizenCarrrierNum', {
                                onChange: (e) =>
                                  (e.target.value =
                                    e.target.value.toUpperCase()),
                                required:
                                  carrierType ===
                                    ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE &&
                                  '不可為空',
                              })}
                            />
                            {errors.citizenCarrrierNum && (
                              <div className="text-danger">
                                {errors.citizenCarrrierNum.message}
                              </div>
                            )}
                          </div>

                          {/* <div className="form-group col-lg-6 input-group-lg">
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
                      </div> */}
                        </>
                      )}

                      <div className="col-lg-12">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              {...register('agree', {
                                required:
                                  invoiceType === InvoiceType.CLOUD &&
                                  '請勾選同意',
                              })}
                            />
                            我同意辦理退貨時，由三聯陽泰科技代為處理發票及銷貨退回證明單，以加速退貨退款作業。
                          </label>
                        </div>
                        {errors.agree && (
                          <div className="text-danger">
                            {errors.agree.message}
                          </div>
                        )}
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
                            {...register('email', {
                              required: !watch('phone'),
                            })}
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
                            {...register('phone', {
                              required: !watch('email'),
                            })}
                          />
                        </div>
                        {(errors.email || errors.phone) && (
                          <div className="text-danger">
                            手機號碼或Email，請至少填一項
                          </div>
                        )}
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
                        onClick={() => reset(defaultValues)}
                      >
                        取消
                      </button>
                      {resUrl && resHtml ? (
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-50"
                          onClick={openPaymentWin}
                        >
                          開啟支付視窗
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-50"
                          onClick={onSubmit}
                          disabled={isLoading}
                        >
                          {isLoading ? '處理中...' : '立即購買'}
                        </button>
                      )}
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

export default RechargeFunPage
