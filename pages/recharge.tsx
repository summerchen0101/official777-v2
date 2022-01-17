import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import RechargeGiftCardPopup from '@/components/recharge/GiftCardPopup'
import RechargeProductPopup from '@/components/recharge/ProductPopup'
import RechargePopup from '@/components/recharge/RechargePopup'
import RechargeTransferPopup from '@/components/recharge/TransferPopup'
import { PayType } from '@/lib/enums'
import { payTypeMap } from '@/lib/map'
import usePopupStore from '@/store/usePopupStore'
import { StringMap } from '@/types'
import { toCdnUrl } from '@/utils'
import React, { useState } from 'react'

export const payTypeImgMap: StringMap = {
  // [PayType.All]: '全部',
  [PayType.MCGiftCard]: 'mc_giftcard',
  [PayType.MCTransfer]: 'mc_transfer',
  [PayType.MCTelephone]: 'mc_tele',
  [PayType.MCCreditCard]: 'mc_credit',
  [PayType.MCCoupon]: 'mc_coupon',
  // [PayType.ECPayATM]: '綠界ATM',
}

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
          <div className="grid grid-cols-6 gap-4">
            <div
              className="deposit-btn col-span-6 md:col-span-3"
              onClick={onTransferShow}
            >
              <img
                src={toCdnUrl('/recharge/ecpay_atm.png')}
                alt="銀行轉帳-綠界"
              />
            </div>
            <div
              className="deposit-btn col-span-6 md:col-span-3"
              onClick={onProductShow}
            >
              <img
                src={toCdnUrl('/recharge/ecpay_pkg.png')}
                alt="超值產包-綠界"
              />
            </div>
            <div
              className="deposit-btn col-span-6 md:col-span-2"
              onClick={onGiftCardShow}
            >
              <img src={toCdnUrl('/recharge/giftcard.png')} alt="序號輸入" />
            </div>
            {Object.entries(payTypeMap).map(([code, label]) => (
              <div
                key={code}
                className="deposit-btn col-span-6 md:col-span-2"
                onClick={() =>
                  handlePayTypeSelected(code as unknown as PayType)
                }
              >
                <img
                  src={toCdnUrl(`/recharge/${payTypeImgMap[code]}.png`)}
                  alt={label}
                />
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
