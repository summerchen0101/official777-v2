import useAuthRoute from '@/utils/useAuthRoute'

function RechargeBtns() {
  const toAuthRoute = useAuthRoute()

  return (
    <div
      className="btn-box wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
    >
      <div className="btn-mycard">
        <a href="#" onClick={() => toAuthRoute('/recharge-mc?p=1')}>
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
      <div className="btn-evnet">
        <a href="#" onClick={() => toAuthRoute('/recharge-num')}>
          <img
            src="/images/btn_park.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/btn_phone_park.png"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </a>
      </div>
      <div className="btn-shop">
        <a href="#" onClick={() => toAuthRoute('/recharge-gift')}>
          <img
            src="/images/btn_gift.png"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/btn_phone_gift.png"
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
