import React from 'react'
import Link from 'next/link'

function RechargeBtns() {
  return (
    <div
      className="btn-box wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="2s"
    >
      <div className="btn-evnet">
        <Link href="/recharge-promo" passHref>
          <a>
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
        </Link>
      </div>
      <div className="btn-shop">
        <Link href="/recharge-mc?p=1" passHref>
          <a>
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
        </Link>
      </div>
      <div className="btn-mycard">
        <Link href="/recharge-pkg" passHref>
          <a>
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
        </Link>
      </div>
      <hr className="float-none" />
    </div>
  )
}

export default RechargeBtns
