import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'
import Link from 'next/link'

function FaqPage() {
  useEffect(() => {
    var _showTab = 0
    $('.sub-tab li').eq(_showTab).addClass('active')
    $('.sub-tab-content').hide().eq(_showTab).show()
    $('.sub-tab li')
      .click(function () {
        var $this = $(this),
          _clickTab = $this.find('a').attr('href')
        $this.addClass('active').siblings('.active').removeClass('active')
        $(_clickTab).stop(false, true).fadeIn().siblings().hide()
        return false
      })
      .find('a')
      .focus(function () {
        this.blur()
      })
    //
    $('.sub-menu-dt').on('click', this, function () {
      if ($(this).hasClass('open')) {
        $(this).toggleClass('sub-menu-dt2')
        $(this).next().slideToggle(200)
        $(this).removeClass('open')
      } else {
        $(this).toggleClass('sub-menu-dt2')
        $(this).next().slideToggle(200)
        $(this).addClass('open')
      }
    })
    $('.sub-menu-dd').addClass('dt-hide')
    $('.sub-menu-dd').on('click', this, function () {
      $(this).prev().removeClass('open')
      $(this).slideToggle(200)
      $(this).prev().toggleClass('sub-menu-dt2')
    })
  }, [])

  return (
    <PageLayout>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <div className="content-box">
          <img
            src="/images/service/header_service.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/service/header_phone_service.jpg"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </div>
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div className="content">
        <div className="content-title-box">
          <img
            src="/images/service/title_faq.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div className="tab-content-box">
          <div className="ranking-box">
            <div className="ranking-box-gold">
              <div className="ranking-box-goldline">
                <div className="ranking-box-black">
                  <div className="content-box">
                    <ul className="sub-tab">
                      <li>
                        <a href="#sub-tab-1">帳號相關</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">儲值相關</a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">重大聲明</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <div className="h-6"></div>
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">帳號相關</h2>
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">Q：如何登入遊戲？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              在登入畫面可選擇【手機帳號】、【LINE】、(
                              iOS設備【Apple ID】)進行連動後進入遊戲。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">Q：如何綁定遊戲帳號？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              在遊戲大廳右上方【設定】中，可選擇【綁定會員帳號(手機號碼)】、【LINE】、(
                              iOS設備【Apple ID】)進行連動綁定。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：忘記登入密碼該怎麼辦
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              在登入畫面中選擇【手機帳號】後，點擊【忘記密碼】輸入原綁定的手機號碼【確認】時，將會以簡訊驗證碼方式重設登入密碼。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">Q：如何設定二次密碼？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              首次在遊戲大廳右下方【保險箱】中點擊左下方【修改密碼】即可設置二次密碼，需輸入兩次相同的
                              8 位數字為密碼。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：忘記二次密碼該怎麼辦
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              在遊戲大廳右下方【保險箱】中選擇【提領】或【存入】後點擊【確定】，即可選擇【忘記密碼】將會以簡訊驗證碼方式重設二次密碼。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：訪客帳號遺失該怎麼辦？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              由於訪客帳號不屬於正式帳號且未完成手機綁定，故將無法找回。為了遊戲帳號所有權益與保存相關電磁資訊，強烈建議完成遊戲帳號綁定程序。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：收不到簡訊驗證碼怎麼辦？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              請在 5
                              分鐘後再次嘗試操作發送簡訊驗證碼，並同時確認下述情況：
                            </p>
                            <ul>
                              <li>確認手機當下網路狀態是否正常穩定；</li>
                              <li>
                                詢問所屬電信公司是否設定拒收「商業簡訊(企業簡訊)」的服務；
                              </li>
                              <li>手機簡訊的容量是否已滿；</li>
                              <li>
                                當下過多使用者操作此功能，以致線路繁忙無法及時收到。
                              </li>
                            </ul>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：如遇聲稱官方人員索取登入密碼時怎麼辦？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              官方客服決不會向任何玩家索取遊戲登入密碼，敬請提高警覺，以防帳號遭不法人士盜竊。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：疑似帳號被盜該怎麼辦？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>敬請立即重設登入密碼，並請進行下述程序：</p>
                            <ul>
                              <li>反映官方客服；</li>
                              <li>
                                官方客服將進行身分驗證，通過後執行適當對應程序；
                              </li>
                              <li>
                                向所屬地之警政單位報案備存後索取【案件證明單(舊稱：報案三聯單)】，並回傳官方客服；
                              </li>
                              <li>
                                本娛樂城將配合警政單位來函調查，以利盡速為您協助。
                              </li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">儲值相關</h2>
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">Q：如何儲值？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              可透過遊戲大廳上方【商城】進行儲值，依據您的手機裝置版本不同，可使用不同的支付方式完成儲值：
                            </p>
                            <ol>
                              <li>iOS＞Apple Pay</li>
                              <li>Google＞Google Pay</li>
                              <li>APK＞MyCard 或 綠界支付轉帳</li>
                            </ol>
                            <p>儲值前請先完成支付設定。</p>
                          </dd>
                          <dt className="sub-menu-dt">Q：儲值入帳簡易知識</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              各種支付平台皆有各自管理及運作模式，而儲值過程中可能因網路延滯／支付或付款平台繁忙...等情況而延遲獲得商品；一般情況下，請於完成交易後耐心等候數分鐘，再重新開啟遊戲並正確登入所購買商品的遊戲帳號即可；如有支付設定或帳單收據金額疑問時，敬請聯繫所屬銀行或電信業者協助確認。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">Q：怎麼查詢儲值紀錄？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              可於官方網站完成登入後，於上方功能列【會員專區】中【儲值紀錄】查看。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">Q：儲值未入帳怎麼辦？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              可備妥儲值交易明細截圖並將以下資料提供官方客服協助確認：
                            </p>
                            <ol>
                              <li>遊戲帳號UID：</li>
                              <li>遊戲暱稱：</li>
                              <li>手機號碼(綁定遊戲帳號之電話號碼)：</li>
                              <li>儲值交易紀錄日期／時間：</li>
                              <li>
                                儲值交易方式(Google／MyCard／綠界轉帳 / iOS)：
                              </li>
                              <li>儲值商品名稱：</li>
                              <li>交易筆數：</li>
                              <li>交易金額(若有兩筆以上請分開填寫金額)：</li>
                              <li>
                                清楚完整儲值交易紀錄截圖：(須可清楚辨識【每一項】資料)
                              </li>
                            </ol>
                          </dd>
                          <dt className="sub-menu-dt">Q：如何升等VIP？</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              完成官方儲值並達各VIP層級之條件，即可升等對應VIP等級，並享有該層級之福利，如：青銅會員(VIP1)須儲值
                              新台幣 $60 元(即獲得頭家點 60 = 儲值點數 60 )。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：VIP專屬福利有哪些？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              VIP層級及福利皆可在遊戲大廳上方【商城】＞【我的VIP】＞【VIP層級】中進行查閱。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">
                            Q：頭家點如何兌換金幣？
                          </dt>
                          <dd className="sub-menu-dd">
                            <p>
                              儲值完成後將會獲得【頭家點】，須在遊戲大廳上方【商城】內右下【頭家點】兌換成【金幣】，頭家點兌金幣為
                              1：100 (頭家點：金幣)，兌換金幣後即可進行遊戲。
                            </p>
                          </dd>
                        </dl>
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">重大聲明</h2>
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">官方重要聲明</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              《大頭家》娛樂城為合法上架之免費使用的遊戲程式，遊戲情節涉及棋牌益智及娛樂，並非現金交易賭博性質的
                              App，而遊戲內具有提供購買虛擬遊戲幣(金幣)、物品(道具)…等付費服務，故遊戲本身並無提供任何兌換、提領、匯兌或轉換為新台幣之作業及服務。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">官方唯一認證儲值</dt>
                          <dd className="sub-menu-dd">
                            <ul>
                              <li>
                                本娛樂城為官方正式儲值方式是透過本遊戲內「商城」或是《大頭家》娛樂城官方網站完成進行儲值遊戲點數（頭家點）。
                              </li>
                              <li>
                                遊戲點數或金幣一經儲值完成後，任何非官方交易均為違規行為，相關資訊皆可在
                                <Link href="/terms" passHref>
                                  <a>「服務條款」</a>
                                </Link>
                                與
                                <Link href="/rules" passHref>
                                  <a>「遊戲管理規章」</a>
                                </Link>
                                中參閱了解。
                              </li>
                            </ul>
                          </dd>
                          <dt className="sub-menu-dt">妥善保管遊戲帳號資料</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              所有個人遊戲帳號相關資料皆屬個人資訊，強烈建議自行善盡妥善保管之責，如帳密切勿提供他人…等。
                            </p>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="float-none" />
      </div>
    </PageLayout>
  )
}

export default FaqPage
