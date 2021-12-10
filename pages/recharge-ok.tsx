import React, { useState } from 'react'
import { CgCheckO } from 'react-icons/cg'
import { useInterval } from 'usehooks-ts'

export default function RechargeOk() {
  const [count, setCount] = useState(5)

  useInterval(() => {
    if (count === 0) {
      window.opener.location.href = '/recharge-rec'
      self.close()
      // window.close()
    } else {
      setCount((c) => c - 1)
    }
  }, 1000)

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-500 text-center flex flex-col items-center">
        <CgCheckO size="80px" className="text-gold-500" />
        <div className="text-3xl my-4 text-gold-500">儲值成功</div>
        <div className="flex gap-1">
          <div className="text-gray-300">{count}s</div>後自動跳轉到儲值頁
        </div>
        <div className="btn btn-sm mt-8" onClick={() => window.close()}>
          返回
        </div>
      </div>
    </div>
  )
}
