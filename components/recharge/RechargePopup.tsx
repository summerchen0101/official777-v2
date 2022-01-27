import Popup from '@/components/Popup'
import { ItemType, MCPaymentType, PaymentGateway } from '@/lib/enums'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import useOrderCreate from '@/services/useOrderCreate'
import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaExclamationCircle } from 'react-icons/fa'
import LoadingCover from '../LoadingCover'
import TableSelector from '../TableSelector'
import cs from 'classnames'
import {
  mcPaymentTypeMap,
  mcPaymentWithTeleMap,
  telePaymentMap,
} from '@/lib/map'

interface Inputs {
  productID: number
  gatewayCode: number
  userID: number
}

type Props = {
  paymentType: MCPaymentType
}

export default function RechargePopup({ paymentType }: Props) {
  const isShow = usePopupStore((s) => s.recharge.isShow)
  const onHide = usePopupStore((s) => s.recharge.onHide)
  // const [redirectUrl, setRedirectUrl] = useState('')
  const [telePaymentType, setTelePaymentType] = useState(paymentType)
  useEffect(() => {
    setTelePaymentType(paymentType)
  }, [paymentType])
  const { list, isLoading: isListLoading } = useGoodsList({
    page: 1,
    perPage: 30,
    itemType: ItemType.All,
    paymentType: telePaymentType,
    paymentGateway: PaymentGateway.MyCard,
    isShow,
  })
  const router = useRouter()
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<Inputs>()

  useEffect(() => {
    if (list?.length) {
      setValue('productID', list?.[0].ItemId)
    }
  }, [list])

  const { data } = useMe()
  const { handler: doCreate, isLoading } = useOrderCreate()

  const onSubmit = handleSubmit(async (d) => {
    const product = list?.find((t) => t.ItemId === d.productID)
    if (
      confirm(
        `透過「${mcPaymentWithTeleMap[telePaymentType]}」消費 $${product?.Price}元是否確認?`,
      )
    ) {
      const res = await doCreate({
        productID: d.productID,
        gatewayCode: PaymentGateway.MyCard,
        userID: data?.id!,
        paymentType,
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
    <Popup className="px-4" onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">
        {mcPaymentTypeMap[telePaymentType] || '電信支付'}
      </div>
      <LoadingCover isLoading={isLoading}>
        <div className="max-w-[800px] mt-10 mx-auto">
          <Controller
            control={control}
            name="productID"
            render={({ field: { onChange, value } }) => (
              <TableSelector
                isLoading={!isLoading && isListLoading}
                list={list}
                onChange={onChange}
                value={value}
              />
            )}
            rules={{ required: '請選擇商品' }}
          />
          {errors.productID && (
            <div className="text-red-500">{errors.productID.message}</div>
          )}

          <div hidden={!telePaymentMap[telePaymentType]} className="box mt-4">
            <div className="box-title">請選擇電信</div>
            <div className="box-content grid grid-cols-2 sm:grid-cols-5 gap-4">
              {Object.entries(telePaymentMap).map(([code, label]) => (
                <div
                  key={code}
                  className={cs('btn', { active: +code === telePaymentType })}
                  onClick={() => setTelePaymentType(+code as MCPaymentType)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="text-yellow-300 mt-3 flex gap-2 items-center justify-center">
            <FaExclamationCircle />
            請注意！系統處理時間約5分鐘 ~ 1小時才能完成遊戲入點，請耐心等候。
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <button className="btn w-40" onClick={onHide}>
              取消
            </button>
            <button className="btn active w-40" onClick={onSubmit}>
              立即購買
            </button>
          </div>
        </div>
      </LoadingCover>
    </Popup>
  )
}
