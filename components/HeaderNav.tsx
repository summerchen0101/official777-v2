import useCdnUrl from '@/hooks/useCdnUrl'
import bootsNavBar from '@/public/js/bootsnav'
import useMe from '@/services/useMe'
import { handleComingSoon, toCurrency } from '@/utils'
import useAuthRoute from '@/utils/useAuthRoute'
import { showLoginPopup } from '@/utils'
import Link from 'next/link'
import { useEffect } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/dist/client/router'
import { useStore } from '@/store/useStore'

type Props = {
  pure?: boolean
}
function HeaderNav({ pure }: Props) {
  const { canRecharge } = useStore((s) => s.clientEnv)
  const { data: user } = useMe()
  const toCdnUrl = useCdnUrl()
  const toAuthRoute = useAuthRoute()

  const router = useRouter()

  const clearUser = useUserStore((s) => s.clearUser)

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/home')
  }

  useEffect(() => {
    bootsNavBar()
  }, [])
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
        {!user ? (
          <div className="nav-btn hidden visible-xs">
            <a className="show-layer" onClick={() => showLoginPopup()}>
              <img
                src="/images/window_store_phone.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
        ) : null}
      </div>
      <div className="collapse navbar-collapse" id="navbar-menu">
        <ul
          className="nav navbar-nav flex items-center justify-center"
          data-in="fadeInDown"
          data-out="fadeOutUp"
        >
          {!pure ? (
            <>
              <li className="nav-li-icon hidden-xs">
                <Link href="/home" passHref>
                  <a>
                    <img
                      src="/images/menu_home.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                  </a>
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-li-text hidden visible-xs">
                    <div className="logut-avatar">
                      <img
                        src={toCdnUrl(`/avatar/${user?.avatarID}.png`)}
                        alt=""
                        className="img-circle img-responsive center-block"
                      />
                    </div>
                  </li>
                  <li className="nav-li-text dropdown hidden visible-xs">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <div className="logout-id">
                        <p>{user?.nickname}</p>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="logout-gold">
                          <div className="logout-gold-icon">
                            <img
                              src="/images/login/icon_coin.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="logout-gold-text">
                            <p>{toCurrency(user?.coin)}</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                      </li>
                      <li>
                        <div className="logout-mony">
                          <div className="logout-mony-icon">
                            <img
                              src="/images/login/icon_point.png"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div className="logout-mony-text">
                            <p>{toCurrency(user?.paymentPoint)}</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                      </li>
                      <li>
                        <div className="logout-vip">
                          <p>VIP: LV{user?.vipLevel}</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-li-text hidden visible-xs">
                    <a href="#" onClick={() => handleLogout()}>
                      <span className="glyphicon glyphicon-log-out"> </span>
                      登出帳號
                    </a>
                  </li>
                </>
              ) : null}
              <li className="nav-li-text hidden visible-xs">
                <a href="#" onClick={() => router.push('/app-redirect')}>
                  <span className="glyphicon glyphicon-cloud-download"> </span>
                  立即下載
                </a>
              </li>
              <li className="nav-li-text dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  最新消息
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/news" passHref>
                      <a>公告</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/punishment" passHref>
                      <a>懲罰名單</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-li-text dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  新手引導
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/intro-gameui" passHref>
                      <a>遊戲介面操作</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-gameplay" passHref>
                      <a>遊戲玩法介紹</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-object" passHref>
                      <a>道具使用說明</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-gift" passHref>
                      <a>紅包收發說明</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-club" passHref>
                      <a>俱樂部功能介紹</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-vip" passHref>
                      <a>VIP層級介紹</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/intro-card" passHref>
                      <a>卡牌收集說明</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {canRecharge ? (
                <li className="nav-li-text dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    儲值/序號
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="#"
                        onClick={() => toAuthRoute('/recharge-fun?p=1')}
                      >
                        銀行轉帳
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => toAuthRoute('/recharge-fun?p=3')}
                      >
                        信用卡
                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        MyCard支付
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="#"
                            onClick={() => toAuthRoute('/recharge-mc?p=1')}
                          >
                            序號儲值
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => toAuthRoute('/recharge-mc?p=2')}
                          >
                            線上轉點
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => toAuthRoute('/recharge-tele')}
                          >
                            電信支付
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="#"
                            onClick={() => toAuthRoute('/recharge-mc?p=3')}
                          >
                            信用卡支付
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="#"
                            onClick={() => toAuthRoute('/recharge-mc?p=4')}
                          >
                            免費抵扣
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={() => toAuthRoute('/recharge-num')}>
                        序號兌換
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => toAuthRoute('/recharge-gift')}>
                        超值禮包
                      </a>
                    </li>
                  </ul>
                </li>
              ) : null}
            </>
          ) : null}

          <li className="nav-li-text dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              會員專區
            </a>
            <ul className="dropdown-menu">
              {canRecharge ? (
                <li>
                  <a href="#" onClick={() => toAuthRoute('/recharge-record')}>
                    儲值紀錄
                  </a>
                </li>
              ) : null}

              <li>
                <a href="#" onClick={() => toAuthRoute('/change-pw')}>
                  修改密碼
                </a>
              </li>
              <li>
                <a href="#" onClick={() => toAuthRoute('/delete-acc')}>
                  刪除帳號
                </a>
              </li>
            </ul>
          </li>
          {!pure ? (
            <>
              <li className="nav-li-text dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  排行榜
                </a>
                <ul className="dropdown-menu">
                  {/* <li>
                <Link href="/gold-ranks" passHref>
                  <a>富豪榜</a>
                </Link>
              </li> */}
                  <li>
                    <Link href="/slot-ranks" passHref>
                      <a>榮譽榜</a>
                    </Link>
                  </li>
                  {/* <li>
                <Link href="/ranks/gold" passHref>
                  <a>競賽榜</a>
                </Link>
              </li> */}
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
                    <Link href="/faq" passHref>
                      <a>常見問題</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={() => toAuthRoute('/contact')}>
                      聯繫客服
                    </a>
                  </li>
                  <li>
                    <Link href="/files" passHref>
                      <a>表單下載</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="px-12">
                <div className="blue-btn">登入</div>
              </li>
              <li className="nav-li-icon">
                <a
                  href="https://www.facebook.com/Online539"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/menu_facebook.png"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
              <li className="nav-li-icon">
                <a
                  href="https://lin.ee/bkrZ0cD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/menu_line.png"
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
                    src="/images/menu_tiktok.png"
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
                    src="/images/menu_instagram.png"
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
                    src="/images/menu_youtube.png"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div className="gold-line" />
    </nav>
  )
}

export default HeaderNav
