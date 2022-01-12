import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency, toImgPath } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { FaUserCircle } from 'react-icons/fa'

function SideBox() {
  const router = useRouter()
  const clearUser = useUserStore((s) => s.clearUser)
  const canRecharge = useStore((s) => s.canRecharge)
  const onToggle = usePopupStore((s) => s.login.onToggle)

  const { data: user, isLoading } = useMe()

  const handleClickRecharge = () => {
    if (!canRecharge) return
    if (user) {
      router.push('/recharge')
    } else {
      router.replace({ query: { to: '/recharge' } })
      onToggle()
    }
  }

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/home')
  }
  return (
    <div className="gold-box rounded-3xl w-48 ml-2 hidden lg:flex flex-col gap-2 px-3 pt-0 pb-10 fixed top-0 left-0 mt-[180px] shadow-md z-30">
      {canRecharge ? (
        <div
          className="flex flex-col gap-2 cursor-pointer mb-2"
          onClick={handleClickRecharge}
        >
          <img src={toImgPath('/recharge_pig.png')} alt="" />
          <img
            src={toImgPath('/recharge_title.png')}
            className="h-8 self-center cursor-pointer"
            alt=""
          />
        </div>
      ) : (
        <div hidden={canRecharge} className="flex flex-col gap-2 mb-2">
          <img src={toImgPath('/norecharge.png')} alt="" />
        </div>
      )}

      {user ? (
        <>
          <FaUserCircle className="w-20 h-20 mx-auto text-gold-400 lg:hidden xl:block" />
          <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 p-2 text-gold-900 font-medium h-9 flex items-center justify-center">
            {user.nickname}
          </div>
          <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 p-2 text-gold-900 font-medium h-9 flex items-center justify-center">
            ${toCurrency(user.coin)}
          </div>
          <div className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-lg purple-2 border-2 border-white p-2 text-purple-900 font-medium h-9 flex items-center justify-center">
            ${toCurrency(user.paymentPoint)}
          </div>
          {/* <div className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 rounded-lg border-2 border-gold-100 pr-2">
            <img
              src={toImgPath('/icon_goldMoney.png')}
              alt=""
              className="absolute -mt-1"
            />
            <div className="text-gold-900 font-medium text-right leading-9">
              {toCurrency(user.coin)}
            </div>
          </div> */}
          <div className="flex items-center">
            <div className=" text-white font-mono flex-1 text-center">
              VIP: LV{user.vipLevel}
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

export default SideBox
