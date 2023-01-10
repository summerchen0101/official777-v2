import React from 'react'

function RechargeBtns() {
  return (
    <div
      className="btn-box wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
    >
      <div className="btn-evnet">
        <a href="content/recharge/recharge.html">
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
        <a href="content/recharge/mc_giftcard.html">
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
        <a href="content/recharge/giftcard.html">
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
