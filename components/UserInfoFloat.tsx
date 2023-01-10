import { memo } from 'react'

function UserInfoFloat() {
  return (
    <div
      className="window-box-logout hidden-xs wow fadeInLeft"
      data-wow-delay="0.4s"
      data-wow-duration="1s"
    >
      <div className="logout-box">
        <div className="logut-avatar">
          <img
            src="images/login/401.png"
            alt=""
            className="img-circle img-responsive center-block"
          />
        </div>
        <div className="logout-id">
          <p>南京西清白芳如</p>
        </div>
        <div className="logout-gold">
          <div className="logout-gold-icon">
            <img
              src="images/login/icon_coin.png"
              alt=""
              className="img-responsive center-block"
            />
          </div>
          <div className="logout-gold-text">
            <p>123</p>
          </div>
          <hr className="float-none" />
        </div>
        <div className="logout-mony">
          <div className="logout-mony-icon">
            <img
              src="images/login/icon_point.png"
              alt=""
              className="img-responsive center-block"
            />
          </div>
          <div className="logout-mony-text">
            <p>999,999,999,999</p>
          </div>
          <hr className="float-none" />
        </div>
        <div className="logout-vip">
          <p>VIP: LV999</p>
        </div>
        <a href="#">
          <img
            src="images/window_logout.png"
            alt=""
            className="img-circle img-responsive center-block"
          />
        </a>
      </div>
    </div>
  )
}

export default memo(UserInfoFloat)
