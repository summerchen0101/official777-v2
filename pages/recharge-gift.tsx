import GiftPkgSelector, { GiftPkg } from '@/components/GiftPkgSelector'
import LogoBox from '@/components/LogoBox'
import LuckyPkgSelector, { LuckyPkg } from '@/components/LuckyPkgSelector'
import PageLayout from '@/components/PageLayout'
import PaymentWinPopup from '@/components/PaymentWinPopup'
import usePaymentWin from '@/hooks/usePaymentWin'
import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  PaymentGateway,
} from '@/lib/enums'
import { ecpayInvoiceMap, invoiceTypeMap } from '@/lib/map'
import useEcpayOrderCreate from '@/services/useEcpayOrderCreate'
import useMe from '@/services/useMe'
import { StringMap } from '@/types'
import { handleComingSoon, schedulePeriodAction } from '@/utils'
import useAuthPage from '@/utils/useAuthPage'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const giftPkgs: GiftPkg[] = [
  {
    id: 5371,
    img: '/images/recharge/gift01.png',
    title: '大頭家歡樂包',
    price: 3888,
    content: `
    金龍碎片*5
    官將首角色`,
  },
  {
    id: 5372,
    img: '/images/recharge/gift02.png',
    title: '超值豪爽包',
    price: 8880,
    content: `
    金龍碎片*11
    1星超級卡
    雷神角色`,
  },
  {
    id: 5373,
    img: '/images/recharge/gift03.png',
    title: '金龍豐收包',
    price: 16800,
    content: `
    金龍碎片*22
    1星超級卡
    趙雲角色`,
  },
  // {
  //   id: 6001,
  //   img: '/images/recharge/gift07.jpg',
  //   title: '週年慶禮包',
  //   price: 990,
  //   content: `
  //   限定角色*1 (官將首)
  //   隨機各星FG券*1`,
  //   hidden: true,
  // },
  // {
  //   id: 6002,
  //   img: '/images/recharge/gift04.jpg',
  //   title: '頭家財金包',
  //   price: 880,
  //   content: `
  //   新角色*1--雷神
  //   隨機獲贈 金幣一批，50,000到200,000不等`,
  // },
  // {
  //   id: 6003,
  //   img: '/images/recharge/gift05.jpg',
  //   title: '有錢真旺包',
  //   price: 2880,
  //   content: `
  //   新角色*1--美人魚
  //   隨機獲贈 金幣一批，100,000到1,000,000不等`,
  // },
  // {
  //   id: 6004,
  //   img: '/images/recharge/gift06.jpg',
  //   title: '財運滿袋包',
  //   price: 5880,
  //   content: `
  //   新角色*1--趙雲
  //   隨機獲贈 金幣一批，200,000到2,000,000不等`,
  // },
]

const luckyPkgs: LuckyPkg[] = [
  {
    id: 5374,
    img: '/images/recharge/lucky01.png',
    title: '寶貝開運包',
    price: 2998,
    content: `一星威利卡X1`,
    coinRates: [
      { amount: 330000, multiply: 110, rate: 30 },
      { amount: 360000, multiply: 120, rate: 25 },
      { amount: 390000, multiply: 130, rate: 20 },
      { amount: 450000, multiply: 150, rate: 15 },
      { amount: 600000, multiply: 200, rate: 7.5 },
      { amount: 900000, multiply: 300, rate: 2.4 },
      { amount: 1500000, multiply: 500, rate: 0.1 },
    ],
  },
  {
    id: 5375,
    img: '/images/recharge/lucky02.png',
    title: '九尾傾城包',
    price: 19998,
    content: `一星超級卡X1`,
    coinRates: [
      { amount: 2200000, multiply: 110, rate: 30 },
      { amount: 2400000, multiply: 120, rate: 25 },
      { amount: 2600000, multiply: 130, rate: 20 },
      { amount: 3000000, multiply: 150, rate: 15 },
      { amount: 4000000, multiply: 200, rate: 7.5 },
      { amount: 6000000, multiply: 300, rate: 2.4 },
      { amount: 10000000, multiply: 500, rate: 0.1 },
    ],
  },
  {
    id: 5376,
    img: '/images/recharge/lucky03.png',
    title: '雷神降臨包',
    price: 49998,
    content: `一星超級卡X1`,
    coinRates: [
      { amount: 5500000, multiply: 110, rate: 30 },
      { amount: 6000000, multiply: 120, rate: 25 },
      { amount: 6500000, multiply: 130, rate: 20 },
      { amount: 7500000, multiply: 150, rate: 15 },
      { amount: 10000000, multiply: 200, rate: 7.5 },
      { amount: 15000000, multiply: 300, rate: 2.4 },
      { amount: 25000000, multiply: 500, rate: 0.1 },
    ],
  },
]

interface Inputs {
  productID: number
  email: string
  phone: string
  paymentType: ECPayPaymentType
  citizenCarrrierNum: string
  phoneCarrierNum: string
  loveCode: string
  agree: boolean
}

const tabs: Record<string, string> = {
  gift: '限定禮包',
  lucky: '金幣福袋',
}

const defaultValues = {
  productID: 0,
  paymentType: ECPayPaymentType.ATM,
}

function RechargeAtmPage() {
  const [invoiceType, setInvoiceType] = useState(InvoiceType.DONATE)
  const [donateType, setDonateType] = useState('')
  const [carrierType, setCarrierType] = useState(
    ECPayInvoiceType.EC_PAY_INVOICE,
  )
  const [tab, setTab] = useState('lucky')

  const { setResUrl, setResHtml, openPaymentWin } = usePaymentWin()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    control,
  } = useForm<Inputs>({
    defaultValues: defaultValues,
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.id) {
      setValue('productID', +(router.query.id as string))
      // router.replace({ query: {} })
    }
  }, [router])

  const { handler: doCreate, isLoading } = useEcpayOrderCreate()
  const user = useAuthPage()

  useEffect(() => {
    if (user) {
      setValue('email', user?.email!)
      setValue('phone', user?.cellphone?.replace('886-', '')!)
    }
  }, [user])

  useEffect(() => {
    if (router.query.id) return
    schedulePeriodAction(4, 1, () => {
      $('#adPopup').fadeIn()
    })
  }, [router])

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
    if (res?.data?.data) {
      setResUrl(res.data.requestURL)
      setResHtml(res.data.data)
      $('#paymentWin').fadeIn()
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
                      {Object.keys(tabs).map((key) => (
                        <li
                          key={key}
                          className={key === tab ? 'active' : ''}
                          onClick={() => {
                            // if (key === 'gift') {
                            //   handleComingSoon()
                            //   return
                            // }
                            setResHtml('')
                            setResUrl('')
                            setTab(key)
                            setValue('productID', 0)
                          }}
                        >
                          <a href="#">{tabs[key]}</a>
                        </li>
                      ))}
                    </ul>
                    <hr className="float-none" />
                    <h2 className="text-center">Step.1 選擇購買品項</h2>
                    <hr />
                    {tab === 'lucky' ? (
                      <LuckyPkgSelector
                        name="productID"
                        control={control}
                        rules={{ required: '品項不可為空' }}
                        list={luckyPkgs}
                      />
                    ) : (
                      <GiftPkgSelector
                        name="productID"
                        control={control}
                        rules={{ required: '品項不可為空' }}
                        list={giftPkgs.filter((g) => {
                          if (watch('productID')) {
                            return true
                          }
                          return !g.hidden
                        })}
                      />
                    )}

                    {watch('productID') ? (
                      <>
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
                                        setValueAs: (val) => val?.toString(),
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
                                  onChange={(e) =>
                                    setDonateType(e.target.value)
                                  }
                                >
                                  <option value="">捐給愛心動物協會</option>
                                  <option value="other">其他單位</option>
                                </select>
                              </div>
                              <div
                                hidden={donateType !== 'other'}
                                className="form-group col-lg-6 input-group-lg"
                              >
                                <label
                                  htmlFor="number1"
                                  className="control-label"
                                >
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
                                  onChange={(e) =>
                                    setCarrierType(+e.target.value)
                                  }
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
                                <label
                                  htmlFor="number4"
                                  className="control-label "
                                >
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
                                <label
                                  htmlFor="number4"
                                  className="control-label "
                                >
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
                        <h2 className="text-center">
                          Step.4 聯絡資訊(二擇一填寫)
                        </h2>
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
                            onClick={() => {
                              reset(defaultValues)
                              setResHtml('')
                              setResUrl('')
                            }}
                          >
                            取消
                          </button>

                          <button
                            type="button"
                            className="btn btn-default btn-lg btn-50"
                            onClick={onSubmit}
                            disabled={isLoading}
                          >
                            立即購買
                          </button>

                          <hr className="float-none" />
                        </form>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="float-none" />
      </div>
      <PaymentWinPopup onClick={openPaymentWin} />
    </PageLayout>
  )
}

export default RechargeAtmPage
