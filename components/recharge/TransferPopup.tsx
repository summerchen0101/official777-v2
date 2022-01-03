import Popup from '@/components/Popup'
import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  ItemType,
  PaymentGateway,
  PayType,
} from '@/lib/enums'
import { ecpayInvoiceMap, ecpayPaymentTypeMap, invoiceTypeMap } from '@/lib/map'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import useEcpayOrderCreate from '@/services/useEcpayOrderCreate'
import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import TableSelector from '../TableSelector'
import { StringMap } from '@/types'

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

export default function RechargeTransferPopup() {
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
    payType: PayType.ECPayATM,
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
    <Popup onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">銀行轉帳</div>
      <div className="max-w-[800px] mt-10 mx-auto space-y-8">
        <Controller
          control={control}
          name="productID"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TableSelector list={list} value={value} onChange={onChange} />
          )}
        />
        <div className="box">
          <div className="box-title">請選擇付款類型</div>
          <div className="box-content flex gap-3">
            {Object.entries(ecpayPaymentTypeMap).map(([code, label]) => (
              <label key={code}>
                <input
                  type="radio"
                  onChange={() => setPaymentType(+code)}
                  checked={+code === paymentType}
                />
                <span className="ml-1">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="box-title">發票資訊</div>
          <div className="box-content grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="">
              <div className="mb-1">發票類型</div>
              <select
                className="w-full rounded"
                value={invoiceType}
                onChange={(e) => setInvoiceType(e.target.value as InvoiceType)}
              >
                {Object.entries(invoiceTypeMap).map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            {invoiceType === InvoiceType.DONATE ? (
              <>
                <div className="">
                  <div className="mb-1">捐贈發票</div>
                  <select
                    className="w-full rounded"
                    value={donateType}
                    onChange={(e) => setDonateType(e.target.value)}
                  >
                    <option value="">捐給愛心動物協會</option>
                    <option value="other">其他單位</option>
                  </select>
                </div>
                <div hidden={donateType !== 'other'} className="">
                  <div className="mb-1">捐贈碼</div>
                  <input
                    type="text"
                    key="loveCode"
                    className="w-full rounded"
                    {...register('loveCode', {
                      required:
                        invoiceType === InvoiceType.DONATE &&
                        donateType === 'other' &&
                        '不可為空',
                    })}
                  />
                  {errors.loveCode && (
                    <div className="text-sm text-red-500">
                      {errors.loveCode.message}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <div className="mb-1">電子載具</div>
                  <select
                    className="w-full rounded"
                    value={carrierType}
                    onChange={(e) => setCarrierType(+e.target.value)}
                  >
                    {Object.entries(ecpayInvoiceMap).map(([code, label]) => (
                      <option key={code} value={code}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  hidden={carrierType !== ECPayInvoiceType.PHONE_CARRIER}
                  className=""
                >
                  <div className="mb-1">手機載具 (ex: /xxxx)</div>
                  <input
                    type="text"
                    key="phoneCarrierNum"
                    className="w-full rounded"
                    {...register('phoneCarrierNum', {
                      required:
                        carrierType === ECPayInvoiceType.PHONE_CARRIER &&
                        '不可為空',
                    })}
                  />
                  {errors.phoneCarrierNum && (
                    <div className="text-sm text-red-500">
                      {errors.phoneCarrierNum.message}
                    </div>
                  )}
                </div>
                <div
                  hidden={
                    carrierType !== ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE
                  }
                  className=""
                >
                  <div className="mb-1">憑證載具</div>
                  <input
                    type="text"
                    key="citizenCarrrierNum"
                    className="w-full rounded"
                    {...register('citizenCarrrierNum', {
                      required:
                        carrierType ===
                          ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE &&
                        '不可為空',
                    })}
                  />
                  {errors.citizenCarrrierNum && (
                    <div className="text-sm text-red-500">
                      {errors.citizenCarrrierNum.message}
                    </div>
                  )}
                </div>
                <label className="col-span-2 mt-2">
                  <input
                    type="checkbox"
                    className="rounded-sm text-gold-800 w-4 h-4 mr-1"
                    {...register('agree', {
                      required:
                        invoiceType === InvoiceType.CLOUD && '請勾選同意',
                    })}
                  />
                  <span className="ml-1 text-sm font-medium">
                    我同意辦理退貨時，由三聯陽泰科技有限公司代為處理發票及銷貨退回證明單，以加速退貨退款作業
                  </span>
                  {errors.agree && (
                    <div className="text-sm text-red-500">
                      {errors.agree.message}
                    </div>
                  )}
                </label>
              </>
            )}
          </div>
        </div>
        <div className="box">
          <div className="box-title">
            手機號碼或Email，請至少填一項
            <label className="float-right">
              <input
                type="checkbox"
                className="rounded-sm text-gold-800 w-4 h-4 mr-1"
                onChange={handleUseUser}
              />
              使用會員資料
            </label>
          </div>
          <div className="box-content grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="">
              <div className="mb-1">Email</div>
              <input
                type="text"
                placeholder="請填寫Email"
                className="w-full rounded"
                {...register('email', {
                  required: !watch('phone'),
                })}
              />
            </div>
            <div className="">
              <div className="mb-1">手機號碼</div>
              <input
                type="text"
                placeholder="請填寫手機號碼"
                className="w-full rounded"
                {...register('phone', { required: !watch('email') })}
              />
            </div>
            {(errors.email || errors.phone) && (
              <div className="text-sm text-red-500">
                手機號碼或Email，請至少填一項
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <button className="btn w-40">取消</button>
          <button className="btn active w-40" onClick={onSubmit}>
            立即購買
          </button>
        </div>
      </div>
    </Popup>
  )
}
