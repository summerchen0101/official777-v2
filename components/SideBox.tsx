import useCdnUrl from '@/hooks/useCdnUrl'
import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import LoadingCover from './LoadingCover'

function SideBox() {
  const toCdnUrl = useCdnUrl()
  const router = useRouter()
  const clearUser = useUserStore((s) => s.clearUser)
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
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
  const handleClickLogin = () => {
    router.replace({ query: { to: router.asPath } })
    onToggle()
  }

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/home')
  }
  return (
    <div hidden={isLoading}>
      <div className="gold-box rounded-xl w-36 ml-2 hidden lg:flex flex-col gap-2 px-2 pt-0 pb-6 fixed top-0 left-0 mt-[110px] shadow-md z-30">
        {canRecharge ? (
          <div
            className="flex flex-col gap-2 cursor-pointer mb-2"
            onClick={handleClickRecharge}
          >
            <img src={toCdnUrl('/recharge_pig.png')} alt="" />
            <img
              src={toCdnUrl('/recharge_title.png')}
              className="self-center cursor-pointer w-24"
              alt=""
            />
          </div>
        ) : (
          <div hidden={canRecharge} className="flex flex-col gap-2 mb-2">
            <img src={toCdnUrl('/norecharge.png')} alt="" />
          </div>
        )}

        {user ? (
          <>
            <img
              hidden={!user.avatarID}
              className="rounded-full w-20 mx-auto bg-gold-600"
              src={toCdnUrl(`/avatar/${user.avatarID}.png`)}
              alt=""
            />
            <div className="label-box">{user.nickname}</div>
            <div className="label-box">
              <img
                src={toCdnUrl('/coin.png')}
                alt=""
                className="absolute left-0 top-0 ml-1 mt-0.5 h-6"
              />
              {toCurrency(user.coin)}
            </div>
            <div className="label-box">
              <img
                src={toCdnUrl('/point.png')}
                alt=""
                className="absolute left-0 top-0 ml-1 mt-0.5 h-6"
              />
              {toCurrency(user.paymentPoint)}
            </div>
            <div className="flex items-center">
              <div className=" text-white font-mono flex-1 text-center text-sm">
                VIP: LV{user.vipLevel}
              </div>
            </div>

            <div
              className="self-center h-8 w-full bg-contain bg-center bg-no-repeat bg-logout-btn hover:bg-logout-btn-active absolute -bottom-3 cursor-pointer"
              onClick={handleLogout}
            />
          </>
        ) : (
          <div
            className="self-center h-8 w-full bg-contain bg-center bg-no-repeat bg-login-btn hover:bg-login-btn-active absolute -bottom-3 cursor-pointer"
            onClick={handleClickLogin}
          />
        )}
      </div>
    </div>
  )
}

export default SideBox
