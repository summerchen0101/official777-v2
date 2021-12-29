import Popup from '@/components/Popup'
import { ItemType, MCPaymentType, PaymentGateway, PayType } from '@/lib/enums'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import useOrderCreate from '@/services/useOrderCreate'
import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import TableSelector from '../TableSelector'

interface Inputs {
  productID: number
}

export default function RechargeTransferPopup() {
  const router = useRouter()
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
    control,
  } = useForm<Inputs>()

  const { handler: doCreate, isLoading } = useOrderCreate()
  const { data } = useMe()

  const onSubmit = handleSubmit(async (d) => {
    const product = list?.find((t) => t.ItemId === d.productID)
    if (confirm(`透過銀行轉帳消費 $${product?.Price}元是否確認?`)) {
      const res = await doCreate({
        productID: d.productID,
        gatewayCode: PaymentGateway.ECPay,
        userID: data?.id!,
        paymentType: MCPaymentType.COST_POINT,
      })
      if (res?.data.requestURL) {
        router.replace({
          pathname: '/',
          query: { to: res?.data.requestURL, msg: '跳轉中請稍候' },
        })
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
            <label>
              <input type="radio" name="atmType" />
              <span className="ml-1">實體ATM及網銀</span>
            </label>
            <label>
              <input type="radio" name="atmType" />
              <span className="ml-1">晶片讀卡機轉帳</span>
            </label>
          </div>
        </div>
        <div className="box">
          <div className="box-title">發票資訊</div>
          <div className="box-content grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="">
              <div className="mb-1">發票類型</div>
              <select className="w-full rounded">
                <option value="">捐贈發票</option>
              </select>
            </div>
            <div className="">
              <div className="mb-1">捐贈發票</div>
              <select className="w-full rounded">
                <option value="">捐給「財團法人向上福利基金會」</option>
              </select>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-title">手機號碼或Email，請至少填一項</div>
          <div className="box-content grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="">
              <div className="mb-1">Email</div>
              <input
                type="text"
                placeholder="請填寫Email"
                className="w-full rounded"
              />
            </div>
            <div className="">
              <div className="mb-1">手機號碼</div>
              <input
                type="text"
                placeholder="請填寫手機號碼"
                className="w-full rounded"
              />
            </div>
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
