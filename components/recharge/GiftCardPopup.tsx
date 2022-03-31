import Popup from '@/components/Popup'
import useSerialExchange from '@/services/useSerialExchange'
import useSWSerialExchange from '@/services/useSWSerialExchange'
import usePopupStore from '@/store/usePopupStore'
import { StringMap } from '@/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
type Inputs = {
  serialNum: string
  password: string
}

enum SerialType {
  Basic = 1,
  SW = 2,
}

const serilaTypeMap: StringMap = {
  [SerialType.Basic]: '序號輸入',
  [SerialType.SW]: '智冠產包',
}
export default function RechargeGiftCardPopup() {
  const isShow = usePopupStore((s) => s.giftCard.isShow)
  const onHide = usePopupStore((s) => s.giftCard.onHide)
  const [type, setType] = useState(SerialType.SW)
  const { handler: doSWExchange, isLoading: isSWLoading } =
    useSWSerialExchange()
  const { handler: doExchange, isLoading } = useSerialExchange()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()

  const onReset = () => reset({ serialNum: '', password: '' })

  const onSubmit = handleSubmit(async (d) => {
    try {
      if (type === SerialType.SW) {
        const res = await doSWExchange({
          serialNum: d.serialNum.trim(),
          password: d.password.trim(),
        })
        if (res?.ok) {
          alert('智冠序號兌換成功')
        } else {
          alert('兌換失敗')
        }
      } else {
        const res = await doExchange({
          serialNum: d.serialNum.trim(),
        })
        if (res?.ok) {
          alert('序號兌換成功')
        } else {
          alert('兌換失敗')
        }
      }

      onReset()
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <Popup className="px-4" onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">序號開通</div>
      <div className="max-w-[600px] mt-10 mx-auto">
        <div className="flex flex-col gap-6">
          <div className="">
            <div className="mb-1">類型</div>
            <select
              placeholder="請選擇產包類型"
              className="w-full rounded h-12 text-black"
              value={type}
              onChange={(e) => setType(+e.target.value)}
            >
              {Object.entries(serilaTypeMap).map(([code, label]) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <div className="mb-1">序號</div>
            <input
              type="text"
              placeholder="請輸入序號"
              className="w-full rounded h-12 text-black"
              {...register('serialNum', { required: '不可為空' })}
            />
            {errors.serialNum && (
              <div className="text-sm text-red-500">
                {errors.serialNum.message}
              </div>
            )}
          </div>
          {type === SerialType.SW && (
            <div className="">
              <div className="mb-1">密碼</div>
              <input
                type="text"
                placeholder="請輸入密碼"
                className="w-full rounded h-12 text-black"
                {...register('password', { required: '不可為空' })}
              />
              {errors.password && (
                <div className="text-sm text-red-500">
                  {errors.password.message}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <button className="btn w-40" onClick={onReset}>
            取消
          </button>
          <button className="btn active w-40" onClick={onSubmit}>
            立即購買
          </button>
        </div>
      </div>
    </Popup>
  )
}
