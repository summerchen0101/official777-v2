import Popup from '@/components/Popup'
import usePopupStore from '@/store/usePopupStore'
import React from 'react'

export default function RechargeTelePopup() {
  const isShow = usePopupStore((s) => s.telephone.isShow)
  const onHide = usePopupStore((s) => s.telephone.onHide)
  return (
    <Popup onClose={onHide} isShow={isShow}>
      <div className="text-3xl text-center">電信支付</div>
      <div className="max-w-[800px] mt-10 mx-auto">
        <div className="space-y-8">
          <div className="box">
            <div className="box-title">請選擇電信業者</div>
            <div className="box-content grid grid-cols-4 gap-4">
              <div className="orange-btn">亞太電信</div>
              <div className="orange-btn">台灣大哥大</div>
              <div className="orange-btn">中華小額付款</div>
              <div className="orange-btn">台灣之星</div>
              <div className="orange-btn">遠傳</div>
              <div className="orange-btn">中華Hinet</div>
              <div className="orange-btn">中華市話支付</div>
            </div>
          </div>
          <table className="w-full rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th colSpan={3}>請選擇要購買的項目</th>
              </tr>
            </thead>
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
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <button className="btn w-40">取消</button>
          <button className="btn active w-40">立即購買</button>
        </div>
      </div>
    </Popup>
  )
}
