import useAuthRoute from '@/utils/useAuthRoute'
import HoverImg from '../HoverImg'

function RechargeBtns() {
  const toAuthRoute = useAuthRoute()

  return (
    <div
      className="btn-box wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
    >
      <div className="btn-bank">
        <a href="#" onClick={() => toAuthRoute('/recharge-fun')}>
          <HoverImg
            src="images/btn_bank.png"
            activeSrc="images/btn_bank_active.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <HoverImg
            src="images/btn_phone_bank.png"
            activeSrc="images/btn_phone_bank_active.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>

      <div className="btn-mycard">
        <a href="#" onClick={() => toAuthRoute('/recharge-mc?p=1')}>
          <HoverImg
            src="/images/btn_mycard.png"
            activeSrc="images/btn_mycard_active.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <HoverImg
            src="/images/btn_phone_mycard.png"
            activeSrc="images/btn_phone_mycard_active.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <div className="btn-shop">
        <a href="#" onClick={() => toAuthRoute('/recharge-num')}>
          <HoverImg
            src="/images/btn_park.png"
            activeSrc="images/btn_park_active.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <HoverImg
            src="/images/btn_phone_park.png"
            activeSrc="images/btn_phone_park_active.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <div className="btn-gift">
        {/* <a href="#" onClick={handleComingSoon}> */}
        <a href="#" onClick={() => toAuthRoute('/recharge-gift')}>
          <HoverImg
            src="/images/btn_gift.png"
            activeSrc="images/btn_gift_active.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <HoverImg
            src="/images/btn_phone_gift.png"
            activeSrc="images/btn_phone_gift_active.png"
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
