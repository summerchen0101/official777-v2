import Popup from '@/components/Popup'
import { ItemType, PayType } from '@/lib/enums'
import { payTypeMap } from '@/lib/map'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import useOrderCreate from '@/services/useOrderCreate'
import usePopupStore from '@/store/usePopupStore'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import LoadingCover from '../LoadingCover'
import TableSelector from '../TableSelector'

interface Inputs {
  productID: number
  gatewayCode: number
  userID: number
}

type Props = {
  payType: PayType
}

export default function RechargePopup({ payType }: Props) {
  const isShow = usePopupStore((s) => s.recharge.isShow)
  const onHide = usePopupStore((s) => s.recharge.onHide)
  const [redirectUrl, setRedirectUrl] = useState('')

  useEffect(() => {
    if (redirectUrl) {
      window.open(redirectUrl, 'payment', 'width=500;height=500')
      setRedirectUrl('')
      onHide()
    }
  }, [redirectUrl])

  const { list } = useGoodsList({
    page: 1,
    perPage: 30,
    itemType: ItemType.All,
    payType,
  })
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>()

  const { data } = useMe()
  const { handler: doCreate, isLoading } = useOrderCreate()

  const onSubmit = handleSubmit(async (d) => {
    const res = await doCreate({
      productID: d.productID,
      gatewayCode: 3,
      userID: data?.id!,
    })
    if (res?.data.requestURL) {
      setRedirectUrl(res?.data.requestURL)
    }
  })
  return (
    <Popup onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">{payTypeMap[payType]}</div>
      <LoadingCover isLoading={isLoading}>
        <div className="max-w-[800px] mt-10 mx-auto">
          <Controller
            control={control}
            name="productID"
            render={({ field: { onChange, value } }) => (
              <TableSelector list={list} onChange={onChange} value={value} />
            )}
            rules={{ required: '請選擇商品' }}
          />
          {errors.productID && (
            <div className="text-red-500">{errors.productID.message}</div>
          )}
          <div className="mt-12 flex justify-center gap-6">
            <button className="btn w-40">取消</button>
            <button className="btn active w-40" onClick={onSubmit}>
              立即購買
            </button>
          </div>
        </div>
      </LoadingCover>
    </Popup>
  )
}
