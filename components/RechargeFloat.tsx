import { BiDollar, BiUser, BiUserCircle } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'
function RechargeFloat() {
  return (
    <div className="gold-box rounded-xl w-48 ml-2 flex flex-col px-3 pt-0 pb-10 fixed top-0 left-0 mt-[160px] space-y-3 shadow-md">
      <img src="/recharge_pig.png" alt="" />
      <img src="/recharge_title.png" className="h-8 self-center" alt="" />
      <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
        <FaUser className="text-xl text-gold-500" />
        <div className="text-lg text-gold-900 font-medium">我是夏天</div>
      </div>
      <div className="flex justify-between bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 items-center px-2 py-1">
        <HiCurrencyDollar className="text-3xl text-gold-500 -ml-1" />
        <div className="text-lg text-gold-900 font-medium">100,000</div>
      </div>
      <div className="text-xl text-white text-center font-mono">VIP: Lv3</div>
      <div className="self-center h-12 w-full bg-contain bg-center bg-no-repeat bg-login-btn hover:bg-login-btn-light absolute -bottom-6 cursor-pointer" />
    </div>
  )
}

export default RechargeFloat
