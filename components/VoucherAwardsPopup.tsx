import usePopupStore from '@/store/usePopupStore'
import useBodyLock from '@/hooks/useBodyLock'
import React, { useState } from 'react'
import cs from 'classnames'
import { VoucherType } from '@/lib/enums'
import useVoucherAwards from '@/services/useVoucherAwards'
import LoadingCover from './LoadingCover'
import { voucherTypeMap } from '@/lib/map'
import { CgClose } from 'react-icons/cg'

type Props = {
  eventId?: number
  voucher?: VoucherType
}

function VoucherAwardsPopup({ eventId, voucher }: Props) {
  const { isShow, onHide } = usePopupStore((s) => s.voucherAwards)
  useBodyLock(isShow)
  const { list, isLoading } = useVoucherAwards({
    eventId,
    ticketId: voucher,
    page: 1,
    perpage: 100,
  })
  return (
    <div
      className={cs(
        'fixed top-0 left-0 h-full w-full flex items-center justify-center z-30 transition-all',
        isShow ? 'visible opacity-100 ' : 'invisible opacity-0 -translate-y-10',
      )}
      onClick={onHide}
    >
      <div
        className="bg-purple-900 border-gold-500 border-2 h-full lg:h-auto lg:min-h-[500px] w-full lg:w-[350px] rounded-lg p-3 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center text-2xl font-mono text-gold-400 py-2">
          獲得的{voucherTypeMap[voucher!]}獎券
        </div>
        <div className="lg:hidden absolute top-0 right-0 p-4" onClick={onHide}>
          <CgClose size="20px" className="text-gold-500" />
        </div>
        <div className="mt-3 max-h-[500px] overflow-y-auto flex-1 flex flex-col items-center gap-2">
          {list?.map((sn) => (
            <div
              key={sn}
              className="text-center text-gray-300 text-lg bg-black/20 px-10"
            >
              {sn}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VoucherAwardsPopup
