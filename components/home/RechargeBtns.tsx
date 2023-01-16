import useMe from '@/services/useMe'
import { showLoginPopup } from '@/utils'
import { useRouter } from 'next/dist/client/router'

function RechargeBtns() {
  const { data: user } = useMe()
  const router = useRouter()
  return (
    <div
      className="btn-box wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
    >
      <div className="btn-evnet">
        <a
          href="#"
          onClick={() =>
            user ? router.push('/recharge-promo') : showLoginPopup()
          }
        >
          <img
            src="/images/btn_event.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/btn_phone_event.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <div className="btn-shop">
        <a
          href="#"
          onClick={() =>
            user ? router.push('/recharge-mc?p=1') : showLoginPopup()
          }
        >
          <img
            src="/images/btn_shop.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/btn_phone_shop.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <div className="btn-mycard">
        <a
          href="#"
          onClick={() =>
            user ? router.push('/recharge-pkg') : showLoginPopup()
          }
        >
          <img
            src="/images/btn_mycard.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/btn_phone_mycard.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <hr className="float-none" />
    </div>
  )
}

export default RechargeBtns
