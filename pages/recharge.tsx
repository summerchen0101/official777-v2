import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import RechargeGiftCardPopup from '@/components/recharge/GiftCardPopup'
import RechargeProductPopup from '@/components/recharge/ProductPopup'
import RechargeTransferPopup from '@/components/recharge/TransferPopup'
import usePopupStore from '@/store/usePopupStore'
import React from 'react'

function RechargePage() {
  const onTransferShow = usePopupStore((s) => s.transfer.onShow)
  const onProductShow = usePopupStore((s) => s.product.onShow)
  const onGiftCardShow = usePopupStore((s) => s.giftCard.onShow)
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="grid grid-cols-6 gap-4">
            <div className="deposit-btn col-span-3" onClick={onTransferShow}>
              銀行轉帳
            </div>
            <div className="deposit-btn col-span-3" onClick={onProductShow}>
              超值產包
            </div>
            <div className="deposit-btn col-span-2" onClick={onGiftCardShow}>
              實體產包
            </div>
            <div className="deposit-btn col-span-2">電信支付</div>
            <div className="deposit-btn col-span-2">信用卡支付</div>
            <div className="deposit-btn col-span-3">MyCard免費抵扣</div>
            <div className="deposit-btn col-span-3">MyCard線上轉點</div>
          </div>
        </div>
      </section>
      <RechargeTransferPopup />
      <RechargeProductPopup />
      <RechargeGiftCardPopup />
    </Layout>
  )
}

export default RechargePage
