import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toImgPath, toCurrency } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { FaUserCircle } from 'react-icons/fa'

function RechargeFloat() {
  const router = useRouter()
  const clearUser = useUserStore((s) => s.clearUser)
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const { data: user, isLoading } = useMe()
  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/home')
  }
  return (
    <div className="gold-box rounded-xl w-48 ml-2 hidden lg:flex flex-col px-4 pt-0 pb-10 fixed top-0 left-0 mt-[150px] space-y-3 shadow-md z-30">
      <img
        src={toImgPath('/recharge_pig.png')}
        alt=""
        onClick={() => router.push('/recharge')}
      />
      <img
        src={toImgPath('/recharge_title.png')}
        className="h-8 self-center cursor-pointer"
        alt=""
        onClick={() => router.push('/recharge')}
      />
      {user ? (
        <>
          <FaUserCircle className="w-20 h-20 mx-auto text-gold-400 lg:hidden xl:block" />
          <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 pr-2">
            <img
              src={toImgPath('/icon_female.png')}
              alt=""
              className="absolute"
            />
            <div className="text-lg text-gold-900 font-medium text-right leading-9">
              {user.nickname}
            </div>
          </div>
          <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 pr-2">
            <img
              src={toImgPath('/icon_goldMoney.png')}
              alt=""
              className="absolute -mt-1"
            />
            <div className="text-lg text-gold-900 font-medium text-right leading-9">
              {toCurrency(user.coin, 0)}
            </div>
          </div>
          <div className="flex items-center">
            <img src={toImgPath('/img_vip3.png')} className="w-14" alt="" />
            <div className="text-xl text-white font-mono flex-1 text-center">
              VIP:Lv{user.vipLevel}
            </div>
          </div>

          <div
            className="self-center h-12 w-full bg-contain bg-center bg-no-repeat bg-logout-btn hover:bg-logout-btn-active absolute -bottom-6 cursor-pointer"
            onClick={handleLogout}
          />
        </>
      ) : (
        <div
          className="self-center h-12 w-full bg-contain bg-center bg-no-repeat bg-login-btn hover:bg-login-btn-active absolute -bottom-6 cursor-pointer"
          onClick={onToggle}
        />
      )}
    </div>
  )
}

export default RechargeFloat
