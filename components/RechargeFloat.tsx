import { showLoginPopup } from '@/utils'

function RechargeFloat() {
  return (
    <div
      className="window-box-store hidden-xs wow fadeInLeft"
      data-wow-delay="0.4s"
      data-wow-duration="1s"
    >
      <div className="store-box">
        <a className="show-layer" onClick={() => showLoginPopup()}>
          <img
            src="images/window_store.png"
            alt=""
            className="img-responsive center-block"
          />
        </a>
      </div>
    </div>
  )
}

export default RechargeFloat
