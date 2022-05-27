import useLoginFirst from '@/hooks/useLoginFirst'
import { useStore } from '@/store/useStore'
import Link from 'next/link'
import React, { memo } from 'react'
import { BiDollar, BiDownload, BiHome } from 'react-icons/bi'
import { CgFacebook } from 'react-icons/cg'

function MobileFooter() {
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  const handleRechargeClicked = useLoginFirst('/recharge')
  return (
    <div className="sm:hidden fixed bottom-0 left-0 bg-black/80 text-gray-300 w-full h-16 z-20 flex justify-around items-center">
      <Link passHref href="/mb/home">
        <a className="flex flex-col items-center gap-1">
          <BiHome className="text-2xl" />
          <span className="text-xs">回首頁</span>
        </a>
      </Link>
      <Link passHref href="/app-redirect">
        <a className="flex flex-col items-center gap-1">
          <BiDownload className="text-2xl" />
          <span className="text-xs">APP下載</span>
        </a>
      </Link>
      <Link passHref href="https://www.facebook.com/Online539">
        <a target="_blank" className="flex flex-col items-center gap-1">
          <CgFacebook className="text-2xl" />
          <span className="text-xs">粉絲專頁</span>
        </a>
      </Link>
      {canRecharge && (
        <div
          className="flex flex-col items-center gap-1"
          onClick={handleRechargeClicked}
        >
          <BiDollar className="text-2xl" />
          <span className="text-xs">立即儲值</span>
        </div>
      )}
    </div>
  )
}

export default memo(MobileFooter)
