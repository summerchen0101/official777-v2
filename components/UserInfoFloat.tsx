import useCdnUrl from '@/hooks/useCdnUrl'
import useMe from '@/services/useMe'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { memo } from 'react'

function UserInfoFloat() {
  const { data: user } = useMe()
  const router = useRouter()
  const clearUser = useUserStore((s) => s.clearUser)
  const toCdnUrl = useCdnUrl()

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/home')
  }
  return (
    <div
      className="window-box-logout hidden-xs wow fadeInLeft"
      data-wow-delay="0.4s"
      data-wow-duration="1s"
    >
      <div className="logout-box">
        <div className="logut-avatar">
          <img
            src={toCdnUrl(`/avatar/${user?.avatarID}.png`)}
            alt=""
            className="img-circle img-responsive center-block"
          />
        </div>
        <div className="logout-id">
          <p>{user?.nickname}</p>
        </div>
        <div className="logout-gold">
          <div className="logout-icon w-1/6">
            <img
              src="/images/login/icon_coin.png"
              alt=""
              className="img-responsive center-block"
            />
          </div>
          <div className="logout-gold-text">
            <p>{toCurrency(user?.coin)}</p>
          </div>
          <hr className="float-none" />
        </div>
        <div className="logout-mony">
          <div className="logout-icon w-1/6">
            <img
              src="/images/login/icon_point.png"
              alt=""
              className="img-responsive center-block"
            />
          </div>
          <div className="logout-mony-text">
            <p>{toCurrency(user?.paymentPoint)}</p>
          </div>
          <hr className="float-none" />
        </div>
        <div className="logout-vip">
          <div className="logout-icon w-1/5">
            <img
              src="/images/login/icon_vip.png"
              alt=""
              className="img-responsive center-block"
            />
          </div>
          <div className="logout-mony-text">
            <p>VIP: LV{user?.vipLevel}</p>
          </div>
          <hr className="float-none" />
        </div>
        <a href="#" onClick={handleLogout}>
          <img
            src="/images/window_logout.png"
            alt=""
            className="img-circle img-responsive center-block"
          />
        </a>
      </div>
    </div>
  )
}

export default memo(UserInfoFloat)
