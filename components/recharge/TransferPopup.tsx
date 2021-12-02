import Popup from '@/components/Popup'
import usePopupStore from '@/store/usePopupStore'
import React from 'react'

export default function RechargeTransferPopup() {
  const isShow = usePopupStore((s) => s.transfer.isShow)
  const onHide = usePopupStore((s) => s.transfer.onHide)
  return (
    <Popup onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">銀行轉帳</div>
      <div className="max-w-[800px] mt-10 mx-auto space-y-8">
        <table className="w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th></th>
              <th>金額</th>
              <th>金幣數量</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td>
                  <input type="radio" name="recharge" />
                </td>
                <td>$2,000</td>
                <td>1,200</td>
              </tr>
            ))}
          </tbody>
        </table>
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
          <button className="btn active w-40">立即購買</button>
        </div>
      </div>
    </Popup>
  )
}
