import React from 'react'

function HeaderNav() {
  return (
    <nav
      className="navbar navbar-default navbar-mobile bootsnav navbar-fixed-top wow fadeInDown"
      data-wow-delay="0.5s"
    >
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <i className="fa fa-bars" />
        </button>
        <div className="nav-btn hidden visible-xs">
          <a href="#">
            <img
              src="images/window_store_phone.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbar-menu">
        <ul
          className="nav navbar-nav"
          data-in="fadeInDown"
          data-out="fadeOutUp"
        >
          <li className="nav-li-icon">
            <a href="#">
              <img
                src="images/menu_home.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
          <li className="nav-li-text dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              最新消息
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/news/news.html">公告</a>
              </li>
              <li>
                <a href="content/news/punishment.html">懲罰名單</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-text dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              新手引導
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/novice/novice_gameui.html">遊戲介面操作</a>
              </li>
              <li>
                <a href="content/novice/novice_gameplay.html">遊戲玩法介紹</a>
              </li>
              <li>
                <a href="content/novice/novice_obj.html">道具使用說明</a>
              </li>
              <li>
                <a href="content/novice/novice_gift.html">紅包收發說明</a>
              </li>
              <li>
                <a href="content/novice/novice_club.html">俱樂部功能介紹</a>
              </li>
              <li>
                <a href="content/novice/novice_vip.html">VIP層級介紹</a>
              </li>
              <li>
                <a href="content/novice/novice_card.html">卡牌收集說明</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-text dropdown">
            <a
              href="content/recharge/mc_giftcard.html"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              儲值/序號
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/recharge/recharge.html">活動序號兌換</a>
              </li>
              <li className="dropdown">
                <a
                  href="content/recharge/mc_giftcard.html"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  MyCard支付
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="content/recharge/mc_giftcard.html">序號儲值</a>
                  </li>
                  <li>
                    <a href="content/recharge/mc_transfer.html">線上轉點</a>
                  </li>
                  <li>
                    <a href="content/recharge/mc_tele.html">電信支付</a>
                  </li>
                  <li>
                    <a href="content/recharge/mc_credit.html">信用卡支付</a>
                  </li>
                  <li>
                    <a href="content/recharge/mc_coupon.html">免費抵扣</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="content/recharge/giftcard.html">智冠實體產包</a>
              </li>
              <li>
                <a href="content/recharge/ecpay_atm.html">綠界銀行轉帳</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-text dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              會員專區
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/member/member_recharge.html">儲值紀錄</a>
              </li>
              <li>
                <a href="content/member/member_user.html">修改密碼</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-text dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              排行榜
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/ranking/ranking_rank.html">富豪榜</a>
              </li>
              <li>
                <a href="content/ranking/ranking_honor.html">榮譽榜</a>
              </li>
              <li>
                <a href="content/ranking/ranking_vs.html">競賽榜</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-text dropdown">
            <a
              href="#content-box06"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              客服中心
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="content/service/service_faq.html">常見問題</a>
              </li>
              <li>
                <a href="content/service/service_contact.html">聯繫客服</a>
              </li>
              <li>
                <a href="content/service/service_files.html">表單下載</a>
              </li>
            </ul>
          </li>
          <li className="nav-li-icon">
            <a
              href="https://www.facebook.com/Online539"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/menu_facebook.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
          <li className="nav-li-icon">
            <a href="https://lin.ee/bkrZ0cD" target="_blank" rel="noreferrer">
              <img
                src="images/menu_line.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
          <li className="nav-li-icon">
            <a
              href="https://www.tiktok.com/@online_539"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/menu_tiktok.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
          <li className="nav-li-icon">
            <a
              href="https://www.instagram.com/online__539"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/menu_instagram.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
          <li className="nav-li-icon">
            <a
              href="https://www.youtube.com/channel/UCeCfX4g4MOJnQeYQ2igb_lw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/menu_youtube.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="gold-line" />
    </nav>
  )
}

export default HeaderNav
