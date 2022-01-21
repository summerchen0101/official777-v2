import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import RechargeGiftCardPopup from '@/components/recharge/GiftCardPopup'
import RechargeProductPopup from '@/components/recharge/ProductPopup'
import RechargePopup from '@/components/recharge/RechargePopup'
import RechargeTransferPopup from '@/components/recharge/TransferPopup'
import { MCPaymentType } from '@/lib/enums'
import { mcPaymentTypeMap } from '@/lib/map'
import usePopupStore from '@/store/usePopupStore'
import { StringMap } from '@/types'
import { toCdnUrl } from '@/utils'
import React, { useState } from 'react'

// export const paymentTypeImgMap: StringMap = {
//   [MCPaymentType.IN_GAME]: 'mc_giftcard',
//   [MCPaymentType.COST_POINT]: 'mc_transfer',
//   [MCPaymentType.ASIA_PACIFIC_MOBILE]: 'mc_tele',
//   [MCPaymentType.CREDIT_CARD]: 'mc_credit',
//   [MCPaymentType.FREE_POINT]: 'mc_coupon',
// }
export const paymentTypeOrder = [
  { paymentType: MCPaymentType.IN_GAME, img: 'mc_giftcard' },
  { paymentType: MCPaymentType.COST_POINT, img: 'mc_transfer' },
  { paymentType: MCPaymentType.ASIA_PACIFIC_MOBILE, img: 'mc_tele' },
  { paymentType: MCPaymentType.CREDIT_CARD, img: 'mc_credit' },
  { paymentType: MCPaymentType.FREE_POINT, img: 'mc_coupon' },
]

function RechargePage() {
  const [paymentType, setPaymentType] = useState(0)
  const onTransferShow = usePopupStore((s) => s.transfer.onShow)
  const onProductShow = usePopupStore((s) => s.product.onShow)
  const onGiftCardShow = usePopupStore((s) => s.giftCard.onShow)
  const onRechargeShow = usePopupStore((s) => s.recharge.onShow)
  const handlePayTypeSelected = (paymentType: MCPaymentType) => {
    setPaymentType(paymentType)
    onRechargeShow()
  }
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="grid grid-cols-6 gap-4">
            {/* <div
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
            </div> */}
            {paymentTypeOrder.map(({ paymentType, img }) => (
              <div
                key={paymentType}
                className="deposit-btn col-span-6 md:col-span-2"
                onClick={() =>
                  handlePayTypeSelected(paymentType as unknown as MCPaymentType)
                }
              >
                <img
                  src={toCdnUrl(`/recharge/${img}.png`)}
                  alt={mcPaymentTypeMap[paymentType]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <RechargeTransferPopup />
      <RechargeProductPopup />
      <RechargeGiftCardPopup />
      <RechargePopup paymentType={paymentType} />
    </Layout>
  )
}

export default RechargePage
