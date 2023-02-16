import { useStore } from '@/store/useStore'
import { showLoginPopup } from '@/utils'

function RechargeFloat() {
  const { canRecharge } = useStore((s) => s.clientEnv)
  // const router = useRouter()
  // const clearUser = useUserStore((s) => s.clearUser)
  // const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  // const { data: user } = useMe()

  // const handleClickRecharge = () => {
  //   if (!canRecharge) return
  //   if (user) {
  //     router.push('/recharge')
  //   } else {
  //     router.replace({ query: { to: '/recharge' } })
  //     showLoginPopup()
  //   }
  // }
  return (
    <div
      className="window-box-store hidden-xs wow fadeInLeft"
      data-wow-delay="0.4s"
      data-wow-duration="1s"
    >
      <div className="store-box">
        <a className="show-layer" onClick={() => showLoginPopup()}>
          <img
            src="/images/window_store.png"
            alt=""
            className="img-responsive center-block"
          />
        </a>
      </div>
    </div>
  )
}

export default RechargeFloat
