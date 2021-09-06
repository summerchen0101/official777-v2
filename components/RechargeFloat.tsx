import React from 'react'
import { BiDollar, BiUser } from 'react-icons/bi'

function RechargeFloat() {
  return (
    <div className="bg-gray-200 w-44 flex flex-col p-3 fixed top-0 left-0 mt-[120px] space-y-3 shadow-md">
      <img src="https://fakeimg.pl/200?text=Image" alt="" />
      <button className="btn block">立即儲值</button>
      <div className="flex space-x-2 text-gray-500">
        <BiUser />
        <span className="text-sm">Summer(夏天)</span>
      </div>
      <div className="flex space-x-2 text-gray-500">
        <BiDollar />
        <span className="text-sm">12,000,000</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img src="https://fakeimg.pl/80x50" alt="" />
        <div className="text-sm text-gray-500">目前VIP等級： 5</div>
      </div>
      <button className="btn block primary">登入</button>
    </div>
  )
}

export default RechargeFloat
