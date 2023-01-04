import React from 'react'

function HomePage() {
  return (
    <>
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
      <div
        className="window-box hidden-xs wow fadeInRight"
        data-wow-delay="0.4s"
        data-wow-duration="1s"
      >
        <div className="icon-box">
          <img
            src="images/window_icon.png"
            alt=""
            className="img-responsive center-block"
          />
          <a
            href="https://apps.apple.com/tw/app/%E5%A4%A7%E9%A0%AD%E5%AE%B6%E5%A8%9B%E6%A8%82%E5%9F%8E/id1595039719"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/window_apple.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.Rich.MegaRich&hl=zh_TW"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/window_google.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          <a
            href="https://resource-cdn.bigboss101.com/official/game.apk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/window_apk.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          <img
            src="images/window_qr.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
      </div>
      <div
        className="window-box-store hidden-xs wow fadeInLeft"
        data-wow-delay="0.4s"
        data-wow-duration="1s"
      >
        <div className="store-box">
          <a className="show-layer" data-show-layer="hw-layer02">
            <img
              src="images/window_store.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </div>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <div
          className="logo-box wow fadeInDown"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <a href="index.html">
            <img
              src="images/logo.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <ul className="header-banner slider">
          <li>
            <div className="hidden-xs">
              <a href="#">
                <img
                  src="images/headerbanner/pcbanner/header_banner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
            <div className="hidden visible-xs">
              <a href="#">
                <img
                  src="images/headerbanner/phonebanner/phonebanner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="hidden-xs">
              <a href="#">
                <img
                  src="images/headerbanner/pcbanner/header_banner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
            <div className="hidden visible-xs">
              <a href="#">
                <img
                  src="images/headerbanner/phonebanner/phonebanner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="hidden-xs">
              <a href="#">
                <img
                  src="images/headerbanner/pcbanner/header_banner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
            <div className="hidden visible-xs">
              <a href="#">
                <img
                  src="images/headerbanner/phonebanner/phonebanner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="hidden-xs">
              <a href="#">
                <img
                  src="images/headerbanner/pcbanner/header_banner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
            <div className="hidden visible-xs">
              <a href="#">
                <img
                  src="images/headerbanner/phonebanner/phonebanner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="hidden-xs">
              <a href="#">
                <img
                  src="images/headerbanner/pcbanner/header_banner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
            <div className="hidden visible-xs">
              <a href="#">
                <img
                  src="images/headerbanner/phonebanner/phonebanner01.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          </li>
        </ul>
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div
        className="btn-box wow fadeInUp"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <div className="btn-evnet">
          <a href="content/recharge/recharge.html">
            <img
              src="images/btn_event.png"
              alt=""
              className="img-responsive center-block hidden-xs"
            />
            <img
              src="images/btn_phone_event.png"
              alt=""
              className="img-responsive center-block hidden visible-xs"
            />
          </a>
        </div>
        <div className="btn-shop">
          <a href="content/recharge/mc_giftcard.html">
            <img
              src="images/btn_shop.png"
              alt=""
              className="img-responsive center-block hidden-xs"
            />
            <img
              src="images/btn_phone_shop.png"
              alt=""
              className="img-responsive center-block hidden visible-xs"
            />
          </a>
        </div>
        <div className="btn-mycard">
          <a href="content/recharge/giftcard.html">
            <img
              src="images/btn_mycard.png"
              alt=""
              className="img-responsive center-block hidden-xs"
            />
            <img
              src="images/btn_phone_mycard.png"
              alt=""
              className="img-responsive center-block hidden visible-xs"
            />
          </a>
        </div>
        <hr className="float-none" />
      </div>
      <div className="arrow-box arrow-animate hidden-xs">
        <i className="arrow " />
      </div>
      <section className="news" id="news">
        <div className="title-box wow flipInX" data-wow-duration="1s">
          <img
            src="images/title_news.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div className="news-content">
          <div
            className="news-box wow bounceInRight"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <div className="tabbox">
              <div className="tabs tabs-index">
                <ul className="menubar">
                  <li>
                    <a className="menubtn" href="#tab-1">
                      最新
                    </a>
                  </li>
                  <li>
                    <a className="menubtn" href="#tab-2">
                      活動
                    </a>
                  </li>
                  <li>
                    <a className="menubtn" href="#tab-3">
                      客服
                    </a>
                  </li>
                  <li>
                    <a className="menubtn" href="#tab-4">
                      營運
                    </a>
                  </li>
                  <li>
                    <a className="menubtn" href="#tab-5">
                      遊戲
                    </a>
                  </li>
                </ul>
                <hr className="float-none" />
                <hr />
                <div className="frame_content_all">
                  {/*TAB1最新*/}
                  <div id="tab-1" className="tab-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <form role="form" className="form-box">
                      <div className="form-group">
                        <div className="form-btn-left">
                          <button type="submit" className="btn btn-default">
                            上一頁
                          </button>
                        </div>
                        <select className="form-control form-center">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="form-btn-right">
                          <button type="submit" className="btn btn-default">
                            下一頁
                          </button>
                        </div>
                      </div>
                      <hr className="float-none" />
                    </form>
                  </div>
                  {/*TAB2最新*/}
                  <div id="tab-2" className="tab-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【活動】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動活動
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <form role="form" className="form-box">
                      <div className="form-group">
                        <div className="form-btn-left">
                          <button type="submit" className="btn btn-default">
                            上一頁
                          </button>
                        </div>
                        <select className="form-control form-center">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="form-btn-right">
                          <button type="submit" className="btn btn-default">
                            下一頁
                          </button>
                        </div>
                      </div>
                      <hr className="float-none" />
                    </form>
                  </div>
                  {/*TAB3最新*/}
                  <div id="tab-3" className="tab-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【客服】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服客服
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <form role="form" className="form-box">
                      <div className="form-group">
                        <div className="form-btn-left">
                          <button type="submit" className="btn btn-default">
                            上一頁
                          </button>
                        </div>
                        <select className="form-control form-center">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="form-btn-right">
                          <button type="submit" className="btn btn-default">
                            下一頁
                          </button>
                        </div>
                      </div>
                      <hr className="float-none" />
                    </form>
                  </div>
                  {/*TAB4最新*/}
                  <div id="tab-4" className="tab-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【營運】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運營運
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <form role="form" className="form-box">
                      <div className="form-group">
                        <div className="form-btn-left">
                          <button type="submit" className="btn btn-default">
                            上一頁
                          </button>
                        </div>
                        <select className="form-control form-center">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="form-btn-right">
                          <button type="submit" className="btn btn-default">
                            下一頁
                          </button>
                        </div>
                      </div>
                      <hr className="float-none" />
                    </form>
                  </div>
                  {/*TAB5最新*/}
                  <div id="tab-5" className="tab-content">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>【遊戲】</p>
                          </td>
                          <td>
                            <a
                              className="show-layer"
                              data-show-layer="hw-layer01"
                            >
                              遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲遊戲
                            </a>
                          </td>
                          <td>
                            <p>2022/12/31</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <form role="form" className="form-box">
                      <div className="form-group">
                        <div className="form-btn-left">
                          <button type="submit" className="btn btn-default">
                            上一頁
                          </button>
                        </div>
                        <select className="form-control form-center">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="form-btn-right">
                          <button type="submit" className="btn btn-default">
                            下一頁
                          </button>
                        </div>
                      </div>
                      <hr className="float-none" />
                    </form>
                  </div>
                </div>
              </div>
              <hr className="float-none" />
            </div>
          </div>
        </div>
      </section>
      <section className="event-box" id="event-box">
        <div className="title-box wow flipInX" data-wow-duration="1s">
          <img
            src="images/title_event.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div
          className="event-left wow bounceInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img src="images/event_left.png" alt="" className="img-responsive" />
        </div>
        <div
          className="event-right wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/event_right.png"
            alt=""
            className="img-responsive pull-right"
          />
        </div>
        <div
          className="event-center wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="1s"
        >
          <div
            className="event-banner-box wow flipInX"
            data-wow-delay="1s"
            data-wow-duration="1s"
          >
            <ul className="event-banner slider">
              <li>
                <a
                  href="https://activity.online539.com/event/prod/220803/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/eventbanner/event_banner900x500.jpg"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://activity.online539.com/event/prod/220803/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/eventbanner/event_banner900x500.jpg"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://activity.online539.com/event/prod/220803/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/eventbanner/event_banner900x500.jpg"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://activity.online539.com/event/prod/220803/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/eventbanner/event_banner900x500.jpg"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="float-none" />
      </section>
      <section className="game-box" id="game-box">
        <div className="title-box wow flipInX" data-wow-duration="1s">
          <img
            src="images/title_game.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div
          className="game-left wow bounceInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/game_left.png"
            alt=""
            className="img-responsive hidden-xs"
          />
          <img
            src="images/game_phone_left.png"
            alt=""
            className="img-responsive hidden visible-xs"
          />
        </div>
        <div
          className="game-right wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/game_right.png"
            alt=""
            className="img-responsive pull-right hidden-xs"
          />
          <img
            src="images/game_phone_right.png"
            alt=""
            className="img-responsive pull-right hidden visible-xs"
          />
        </div>
        <div
          className="game-center wow bounceIn"
          data-wow-delay="1.5s"
          data-wow-duration="2s"
        >
          <div className="game-menu-box">
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle game-menu"
                data-toggle="dropdown"
              >
                <img
                  src="images/game_menu.png"
                  alt=""
                  className="img-responsive center-block"
                />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a className="slide-01 game-btn">發財麻將</a>
                </li>
                <li>
                  <a className="slide-02 game-btn">3D深海總動員</a>
                </li>
                <li>
                  <a className="slide-03 game-btn">超級777</a>
                </li>
                <li>
                  <a className="slide-04 game-btn">刮刮樂</a>
                </li>
                <li>
                  <a className="slide-05 game-btn">年年有瑜</a>
                </li>
                <li>
                  <a className="slide-06 game-btn">百家樂視訊</a>
                </li>
                <li>
                  <a className="slide-07 game-btn">百人妞妞</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="myCarousel"
            className="carousel slide banner-box-list wow flipInY"
            data-wow-delay="1.5s"
            data-wow-duration="1s"
          >
            {/* 轮播（Carousel）指标 */}
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
              <li data-target="#myCarousel" data-slide-to={3} />
              <li data-target="#myCarousel" data-slide-to={4} />
              <li data-target="#myCarousel" data-slide-to={5} />
              <li data-target="#myCarousel" data-slide-to={6} />
            </ol>
            {/* 轮播（Carousel）项目 */}
            <div className="game-banner-box">
              <div className="carousel-inner game-banner-inner">
                <div className="item active">
                  <img
                    src="images/game01.png"
                    alt="First slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game02.png"
                    alt="Second slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game03.png"
                    alt="Third slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game04.png"
                    alt="First slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game05.png"
                    alt="Second slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game06.png"
                    alt="Third slide"
                    className="center-block img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/game07.png"
                    alt="Second slide"
                    className="center-block img-responsive"
                  />
                </div>
                {/* 轮播（Carousel）导航 */}
              </div>
              <a
                className="left carousel-control"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="glyphicon glyphicon-chevron-left"
                  aria-hidden="true"
                >
                  <img
                    src="images/game_arrow_back.png"
                    alt=""
                    className="img-responsive center-block"
                  />
                </span>
                <span className="sr-only">Back</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                >
                  <img
                    src="images/game_arrow_next.png"
                    alt=""
                    className="img-responsive center-block"
                  />
                </span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="float-none" />
      </section>
      <section className="video-box" id="video-box">
        <div className="title-box wow flipInX" data-wow-duration="1s">
          <img
            src="images/title_video.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div
          className="video-left wow bounceInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img src="images/video_left.png" alt="" className="img-responsive" />
        </div>
        <div
          className="video-right wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/video_right.png"
            alt=""
            className="img-responsive pull-right"
          />
        </div>
        <div className="video-center wow fadeInUpBig" data-wow-duration="1s">
          <a
            className="slot-bar hidden-xs hidden-sm"
            href="#myCarousel2"
            role="button"
            data-slide="next"
          >
            <img src="images/slotbox.png" alt="" />
          </a>
          <div
            id="myCarousel2"
            className="carousel slide video-banner-box wow flipInX"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            {/* 轮播（Carousel）项目 */}
            <div className="carousel-inner video-banner-inner">
              <div className="item active">
                <a href="javascript:;" id="youtube01">
                  <img
                    src="images/video_banner01_700x400.jpg"
                    alt="First slide"
                    className="center-block img-responsive"
                  />
                </a>
              </div>
              <div className="item">
                <a href="javascript:;" id="youtube02">
                  <img
                    src="images/video_banner02_700x400.jpg"
                    alt="Second slide"
                    className="center-block img-responsive"
                  />
                </a>
              </div>
            </div>
            <a
              className="left carousel-control video-arrow-left"
              href="#myCarousel2"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              >
                <img
                  src="images/game_arrow_back.png"
                  alt=""
                  className="img-responsive center-block"
                />
              </span>
              <span className="sr-only">Back</span>
            </a>
            <a
              className="right carousel-control video-arrow-right"
              href="#myCarousel2"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              >
                <img
                  src="images/game_arrow_next.png"
                  alt=""
                  className="img-responsive center-block"
                />
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <a
            href="https://www.youtube.com/channel/UCeCfX4g4MOJnQeYQ2igb_lw"
            target="_blank"
            className="btn-morevideo"
            rel="noreferrer"
          >
            更多影片
          </a>
        </div>
        <hr className="float-none" />
      </section>
      <section className="frature-box" id="frature-box">
        <div className="title-box wow flipInX" data-wow-duration="1s">
          <img
            src="images/title_frature.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div
          className="frature-left wow bounceInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/frature_left.png"
            alt=""
            className="img-responsive hidden-xs"
          />
          <img
            src="images/frature_phone_left.png"
            alt=""
            className="img-responsive hidden visible-xs"
          />
        </div>
        <div
          className="frature-right wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <img
            src="images/frature_right.png"
            alt=""
            className="img-responsive pull-right hidden-xs"
          />
          <img
            src="images/frature_phone_right.png"
            alt=""
            className="img-responsive hidden visible-xs"
          />
        </div>
        <div className="frature-center wow fadeInUpBig" data-wow-duration="1s">
          <div
            className="frature-banner-box wow flipInX"
            data-wow-duration="1s"
          >
            <ul className="frature-banner slider">
              <li>
                <img
                  src="images/frature_banner01_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner02_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner03_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner04_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner05_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner06_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner07_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
              <li>
                <img
                  src="images/frature_banner08_800x430.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </li>
            </ul>
          </div>
        </div>
        <hr className="float-none" />
      </section>
      {/*FOOTER*/}
      <footer className="footerbox" id="footerbox">
        <div className="gold-line" />
        <div className="copyrignt-box">
          <div className="cr-logo">
            <div className="cr-logo-left">
              <img
                src="images/logo_tech.png"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="cr-logo-right">
              <img
                src="images/logo_three.png"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="cr-text">
            <p>
              ※
              遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。請注意遊戲時間，避免沉迷。
              <br />
              ※
              本遊戲提供之機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。
              <br />
              ※
              本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。
              <br />
              <span>
                例行維護時間 星期三 09：00 ~
                12：00　電子信箱：support@online539.com
              </span>
            </p>
          </div>
          <div className="cr-grading">
            <img
              src="images/cr_grading.png"
              alt=""
              className="img-responsive"
            />
          </div>
          <hr className="no-float" />
        </div>
      </footer>
      {/*POPOBOX01*/}
      <div className="hw-overlay" id="hw-layer01">
        <div className="hw-layer-wrap">
          <span className="glyphicon glyphicon-remove hwLayer-close" />
          <div className="hw-content">
            <h9>2022-09-12</h9>
            <hr />
            <h1>麻將拼牌型拉霸衝倍率得獎名單(10/13更新)</h1>
            <hr />
            <img src="images/game/GameInfo_2001_1.png" alt="" />
            <img src="images/game/GameInfo_2001_2.png" alt="" />
            <img src="images/game/GameInfo_2001_3.png" alt="" />
            <img src="images/game/GameInfo_2001_4.png" alt="" />
            <img src="images/game/GameInfo_2001_5.png" alt="" />
            <h2>恭喜以下頭家得獎！</h2>
            <h3>《挑戰麻將至尊》</h3>
            <p>
              9/12
              <br />
              <span>萬利街重情者惠敏 - 四暗刻 - 氣炸鍋卡</span>
              <br />
              關渡路惡潰凱傑 - 大四喜(門清自摸) - Playstation 5卡 <br />
              9/15
              <br />
              <span>招財貓 - 五暗刻 - 黃金麻將卡</span>
              <br />
              寶贏銀行～頭家 - 大三元 - 50,000金幣
              <br />
              阿娟 - 小三元 - 1星超級卡
              <br />
              9/19
              <br />
              輸西郎 - 大三元 - 50,000金幣
              <br />
              輸西郎 - 大三元 - 50,000金幣
              <br />
              9/22
              <br />
              <span>社子街劫毀者家齊 - 字一色 - 150,000金幣</span>
              <br />
              虎尾囝仔 - 大三元(門清自摸) - AirPods卡
              <br />
              9/26
              <br />
              滅霸 - 地胡 - Macbook Air卡
              <br />
              9/29
              <br />
              輸乎死 - 大三元 - 50,000金幣
              <br />
              師大路有禮者曉婷 - 七搶一 - Switch卡
              <br />
              贏到你喊停 - 八仙過海 - iPhone 14卡
              <br />
              小小孩 - 小三元 - 1星超級卡
              <br />
              10/3
              <br />
              漢口街魅影馨文 - 天胡 - iPhone 14 Pro Max卡
              <br />
              添好運 - 字一色 - 150,000金幣
              <br />
              師大路有禮者曉婷 - 五暗刻 - 黃金麻將卡 阿娟 - 小三元 - 1星超級卡
              <br />
              小小孩 - 大三元 - 50,000金幣
              <br />
              10/6
              <br />
              我書讀得少不會輸 - 大四喜(門清自摸) - Playstation 5卡
              <br />
              關渡路惡潰凱傑 - 字一色(門清自摸) - 黃金條塊(10g)卡
              <br />
              《拉霸倍率王》
              <br />
              9/12
              <br />
              環河南炎火雅琳 - 鋼鐵超人 / 2,643倍 - 黃金條塊(10g)卡 <br />
              精液你會不會來 - 舞姬貂蟬 / 1,532倍 - AirPods卡
              <br />
              9/19
              <br />
              我書讀得少不會輸 - 恭喜發財 / 1,627倍 - AirPods卡
              <br />
              9/22
              <br />
              會咬主人的旺旺 - 神燈精靈 / 3,256倍 - iPhone 14 Pro Max卡
              <br />
              9/29
              <br />
              心靈導師 - 年年有瑜 / 1,214倍 - 5星獎勵卡
              <br />
              小丁做事小叮噹 - 超級777 / 1,109倍 - 5星獎勵卡
              <br />
              心靈導師 - 年年有瑜 / 1009倍 - 5星獎勵卡
              <br />
              大帥正宗 - 開心動物園 / 1462倍 - 5星威力卡
              <br />
              Elsa - 年年有瑜 / 1030倍 - 5星獎勵卡
              <br />
              空空仔 - 嘻哈時代 / 1010倍 - 5星獎勵卡
              <br />
              民興烏鴉 - 超級777 / 1034倍 - 5星獎勵卡
              <br />
              玉井陳二郎 - 超級777 / 1060倍 - 5星獎勵卡
              <br />
              今晚打老虎G - 巨龍家族 / 1171倍 - 5星獎勵卡
              <br />
              我躺著你來搖 - 超級777 / 1311倍 - 5星威力卡
              <br />
              處理一下 - 埃及豔后 / 1228倍 - 5星獎勵卡
              <br />
              第九軍團冷鋒 - 神燈精靈 / 1088倍 - 5星獎勵卡
              <br />
              第九軍團冷鋒 - 神燈精靈 / 1082倍 - 5星獎勵卡
              <br />
              任哥在這 - 舞姬貂蟬 / 1205倍 - 5星獎勵卡
              <br />
              佳里小陀螺 - 海盜傳奇 / 1018倍 - 5星獎勵卡
              <br />
              中發白 - 開心動物園 / 1147倍 - 5星獎勵卡
              <br />
              心靈導師 - 年年有瑜 / 1130倍 - 5星獎勵卡
              <br />
              心靈導師 - 年年有瑜 / 1065倍 - 5星獎勵卡
              <br />
              第九軍團冷鋒 - 舞姬貂蟬 / 1068倍 - 5星獎勵卡
              <br />
              第九軍團冷鋒 - 西部牛仔 / 1121倍 - 5星獎勵卡
              <br />
              少年吔安啦 - 呆盟鳥 / 1053倍 - 5星獎勵卡
              <br />
              老子有錢 - 超級777 / 1038倍 - 5星獎勵卡
              <br />
              金沙小正 - 超級777 / 1181倍 - 5星獎勵卡
              <br />
              第九軍團冷鋒 - 鋼鐵超人 / 1033倍 - 5星獎勵卡
              <br />
              冰冰蹦蹦 - 舞姬貂蟬 / 1103倍 - 5星獎勵卡
              <br />
              Wie - 超級777 / 1048倍 - 5星獎勵卡
              <br />
              10/3
              <br />
              信豪 - 海盜傳奇 / 1274倍 - 5星威力卡
              <br />
              10/6
              <br />
              添好運 - 西部牛仔 / 1259倍 - 5星威力卡
              <br />
              打爆哦耶 - 沙灘派對 / 1428倍 - 5星威力卡
              <br />
              24z - 海盜傳奇 / 1349倍 - 5星威力卡
              <br />
              wie - 開心動物園 / 1260倍 - 5星威力卡
              <br />
              佳里小陀螺 - 開心動物園 / 1867倍 - Switch卡
              <br />
              10/11
              <br />
              深夜買醉 - 昆蟲樂園 / 3268倍 - iPhone 14 Pro Max卡 <br />
              深夜買醉 - 昆蟲樂園 / 3456倍 - iPhone 14 Pro Max卡 <br />
              美夢成真中大獎 - 超級777 / 2216倍 - Playstation 5卡
              <br />
              中發白 - 開心動物園 / 1867倍 - Switch卡
              <br />
              24z - 海盜傳奇 / 2375倍 - Playstation 5卡
              <br />
              超人6857 - 超級777 / 1474倍 - 5星威力卡
              <br />
              ※領獎注意 <br />
              詳細說明請參閱【活動頁】注意事項 <br />
              大頭家娛樂城營運團隊 敬上
            </p>
            <ul>
              <li>
                如有任何因手機、平板、電腦、網路、電話等之軟硬體技術問題或個人線路不穩、
                未依遊戲設定完整操作、伺服器維護導致斷線、連接失敗等不可歸責於本公司之事由，
                而使系統誤送活動訊息或得獎通知，或使參賽玩家所寄出或登錄之資料有延遲、
                遺失、錯誤、無法辨識或毀損之情況，
                進而影響活動參與，本公司均不負責，活動照常舉行，不另做補償。
              </li>
              <li>
                參賽玩家若於活動獎項贈出前違反任何服務條款或遊戲規章經官方認定屬實，
                將失去參與活動/領獎之資格。
                開獎時若抽出上述違規玩家獎券號碼，則視為無效券號碼，
                獎項保留續抽；如得獎後始違規者，其抽中之獎項一律取消，不得異議。
              </li>
              <li>
                根據中華民國稅法規定，本活動獎項須納入得獎玩家年度所得報繳所得稅。
                若獎項所得總額超過新台幣貳萬元，應由本公司依法辦理扣繳10%所得稅；
                中獎玩家如非屬非我國境內之居住人，則應由本公司依法辦理扣繳20%所得稅。
                上述應辦理扣繳之得獎玩家須繳交身分證明文件正反面影本予本公司；
                若不願意配合者，則視為自動棄權，喪失領獎資格。
              </li>
              <li>
                玩家若獲得活動獎項，本公司只提供該活動獎項；獎項不包含額外產生之費用(如:稅金等項目)。
              </li>
              <li>
                申請領獎之玩家未滿20歲者，需附上申請人及法定代理人的新式身分證正反面影本，
                以進行驗證。若您尚未申辦身份證，請用戶口名簿影本取代身份證。
              </li>
            </ul>
            <ol>
              <li>
                iPhone 14 Pro Max道具卡，最晚請於2023/02/15(三)
                23:59前主動聯繫客服進行身分驗證後領獎，
                如未於該指定期間完成上述事項則視同放棄。
              </li>
              <li>
                若於活動期間2022/12/05(四) ~ 2023/01/31(二)獲得2張以上的 iPhone
                14 Pro
                Max道具卡，最晚請於2023/02/15(三)前主動聯繫客服進行身分驗證，將會有專人與您聯繫後續客製化老虎機機台事宜。
              </li>
              <li>
                若獲得客製化老虎機機台獎勵，可參與該機台的玩法企劃、主題設計、機台命名等相關遊戲籌備事宜，且機台上架後可於機台入口圖掛名遊戲暱稱，還可享有首月該機台的金幣收益30%。
              </li>
              <li>
                「百支 iPhone 百家樂」活動為保障兌獎公平，僅參照「台灣彩券-今彩
                539」開獎結果，無合作協定。
              </li>
              <li>本平台所有活動皆未與 Apple 合作，僅採購其商品做為活動獎勵</li>
              <li>
                本公司有權檢視各參賽玩家之活動參與行為及得獎情形是否涉嫌違反遊戲規章或公平原則，
                例：人為操作、蓄意偽造、使用不實或虛偽身份、多開（重）帳號、短時間異常多筆參與行為、
                透過任何電腦程式參與活動、詐欺、任何違反本遊戲服務條款或遊戲規章之情事者，
                或以任何其他破壞公平性之不正當的方式參與活動。
                參賽玩家因上述情形所獲得之活動資格及獎項，本公司得一概取消之。
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/*POPOBOX02*/}
      <div className="hw-overlay2" id="hw-layer02">
        <div className="hw-layer-wrap2">
          <span className="glyphicon glyphicon-remove hwLayer-close2" />
          <div className="hw-layer-wrap2-header">
            <h1 className="text-center">登入</h1>
          </div>
          <div className="hw-content2">
            <button type="button" className="btn btn-default pop-btn-lg">
              <img src="images/icon_loginApple.png" alt="" />
              Apple ID登入
            </button>
            <button type="button" className="btn btn-default pop-btn-lg">
              <img src="images/icon_loginLine.png" alt="" />
              Line登入
            </button>
            <form className="form-horizontal" role="form">
              <div className="input-group pop-btn-lg2">
                <div className="input-group-btn2">
                  <select className="form-control2">
                    <option value={1}>1(美國)</option>
                    <option value={60}>60(馬來西亞)</option>
                    <option value={852}>852(香港)</option>
                    <option value={886} selected="">
                      886(台灣)
                    </option>
                  </select>
                </div>
                {/* /btn-group */}
                <input type="text" className="input-group-btn3" />
                <hr className="float-none" />
              </div>
              {/* /input-group */}
              <div className="pop-form-group">
                <label htmlFor="verify" className="col-lg-12 control-label">
                  簡訊驗證碼
                </label>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control input-lg form-verify"
                    id="verify"
                    placeholder="請輸簡訊驗證碼"
                  />
                  <button
                    type="button"
                    className="btn btn-default btn-lg btn-verify"
                  >
                    發送驗證碼
                  </button>
                  <hr className="float-none" />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-default pop-btn-login btn-lg"
              >
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*Slick*/}
      {/* wow.js v1.1.2 */}
      {/*NewsTabs*/}
      {/*youtubpopuo*/}
    </>
  )
}

export default HomePage
