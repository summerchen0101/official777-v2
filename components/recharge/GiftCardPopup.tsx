import Popup from '@/components/Popup'
import usePopupStore from '@/store/usePopupStore'
import React from 'react'

export default function RechargeGiftCardPopup() {
  const isShow = usePopupStore((s) => s.giftCard.isShow)
  const onHide = usePopupStore((s) => s.giftCard.onHide)
  return (
    <Popup onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">序號開通</div>
      <div className="max-w-[600px] mt-10 mx-auto">
        <div className="flex flex-col gap-6">
          <div className="">
            <div className="mb-1">序號</div>
            <input
              type="text"
              placeholder="請輸入序號"
              className="w-full rounded h-12"
            />
          </div>
          <div className="">
            <div className="mb-1">密碼</div>
            <input
              type="text"
              placeholder="請輸入密碼"
              className="w-full rounded h-12"
            />
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <button className="btn w-40">取消</button>
          <button className="btn active w-40">立即購買</button>
        </div>
      </div>
    </Popup>
  )
}
