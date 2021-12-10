import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import RechargeGiftCardPopup from '@/components/recharge/GiftCardPopup'
import RechargeProductPopup from '@/components/recharge/ProductPopup'
import RechargePopup from '@/components/recharge/RechargePopup'
import RechargeTransferPopup from '@/components/recharge/TransferPopup'
import { PayType } from '@/lib/enums'
import { payTypeMap } from '@/lib/map'
import usePopupStore from '@/store/usePopupStore'
import React, { useState } from 'react'

function RechargePage() {
  const [payType, setPayType] = useState(PayType.All)
  const onTransferShow = usePopupStore((s) => s.transfer.onShow)
  const onProductShow = usePopupStore((s) => s.product.onShow)
  const onGiftCardShow = usePopupStore((s) => s.giftCard.onShow)
  const onRechargeShow = usePopupStore((s) => s.recharge.onShow)
  const handlePayTypeSelected = (payType: PayType) => {
    setPayType(payType)
    onRechargeShow()
  }
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="grid grid-cols-6 gap-6">
            <div
              className="deposit-btn col-span-6 md:col-span-3"
              onClick={onTransferShow}
            >
              銀行轉帳
            </div>
            <div
              className="deposit-btn col-span-6 md:col-span-3"
              onClick={onProductShow}
            >
              超值產包
            </div>
            <div
              className="deposit-btn col-span-6 md:col-span-2"
              onClick={onGiftCardShow}
            >
              實體產包
            </div>
            {Object.entries(payTypeMap).map(([code, label]) => (
              <div
                key={code}
                className="deposit-btn col-span-6 md:col-span-2"
                onClick={() =>
                  handlePayTypeSelected(code as unknown as PayType)
                }
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <RechargeTransferPopup />
      <RechargeProductPopup />
      <RechargeGiftCardPopup />
      <RechargePopup payType={payType} />
    </Layout>
  )
}

export default RechargePage
