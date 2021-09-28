import { useStore } from '@/store/useStore'
import { useRouter } from 'next/dist/client/router'
import { FaUserCircle } from 'react-icons/fa'
function RechargeFloat() {
  const router = useRouter()
  const toggle = useStore((s) => s.toggleRechargeFloat)
  const isShow = useStore((s) => s.isShowRechargeFloat)
  return isShow ? (
    <div className="gold-box rounded-xl w-48 ml-2 hidden lg:flex flex-col px-4 pt-0 pb-10 fixed top-0 left-0 mt-[150px] space-y-3 shadow-md z-30">
      {/* <div
        className="gold-box rounded-full cursor-pointer absolute top-0 right-0 -mt-3 -mr-3"
        onClick={toggle}
      >
        <BiX className="text-white text-2xl" />
      </div> */}
      <img
        src="/recharge_pig.png"
        alt=""
        onClick={() => router.push('/recharge')}
        className="lg:hidden xl:block"
      />
      <img
        src="/recharge_title.png"
        className="h-8 self-center lg:hidden xl:block"
        alt=""
        onClick={() => router.push('/recharge')}
      />
      <FaUserCircle className="w-20 h-20 mx-auto text-gold-400 lg:hidden xl:block" />
      <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 pr-2">
        <img src="/icon_female.png" alt="" className="absolute" />
        <div className="text-lg text-gold-900 font-medium text-right leading-9">
          我是夏天
        </div>
      </div>
      <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 pr-2">
        <img src="/icon_goldMoney.png" alt="" className="absolute -mt-1" />
        <div className="text-lg text-gold-900 font-medium text-right leading-9">
          100,000
        </div>
      </div>
      <div className="flex items-center">
        <img src="/img_vip3.png" className="w-14" alt="" />
        <div className="text-xl text-white font-mono flex-1 text-center">
          VIP:Lv3
        </div>
      </div>

      <div className="self-center h-12 w-full bg-contain bg-center bg-no-repeat bg-login-btn hover:bg-login-btn-active absolute -bottom-6 cursor-pointer" />
    </div>
  ) : (
    <div
      className="hidden xl:block fixed top-0 left-0 mt-[200px] gold-box text-white rounded-r px-1 py-2 text-lg cursor-pointer"
      onClick={toggle}
    >
      <span className="vlr">登 入 資 訊</span>
    </div>
  )
}

export default RechargeFloat
