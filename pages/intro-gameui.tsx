import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroGameUIPage() {
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
            src="/images/novice/header_novice.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/novice/header_phone_service.jpg"
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
            src="/images/novice/title_gameui.png"
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
                        <a href="#sub-tab-1">遊戲大廳</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">老虎機台選擇</a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">商城</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">遊戲大廳</h2>
                        <hr />
                        <img
                          src="/images/novice/gameui/gameui_img1.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.個人資訊</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              個人遊戲帳號UID、暱稱、玩家等級、金幣總數、預扣金、所屬俱樂部、籌碼總數、活耀度、收送禮物…等資訊；可編輯個人資料，如：暱稱、性別、自我介紹、更換頭像，並可更換角色。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">2.商城</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              『頭家點』儲值後可兌換為金幣進行遊戲；查看VIP福利及升等條件；『角色單抽』可隨機抽中顯示角色；『商城十連抽』可隨機獲得道具碎片、卡牌或籌碼；『超值禮包』在遊戲中獲得MEGA
                              WIN或SUPER MEGA WIN將顯示可購買的禮包項目。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">3.上方功能區</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              【紅包】功能為可發送不同類型紅包與其他玩家交流，並可查看收發紀錄，發送紅包時必須輸入『二次密碼』，此密碼可在『保險箱』功能中設定；
                              <br />
                              【聊天】功能為各種不同頻道可與其他玩家談話，即世界頻道、系統訊息、俱樂部頻道、群組頻道、個人玩家私訊；
                              <br />
                              【道具】功能為獲得的道具或道具碎片以進行合成或使用，如『獎勵卡』、『威力卡』、『超級卡』將依據不同星等將隨機進入一款老虎機之免費遊戲；
                              <br />
                              【設定】功能為遊戲中基本設定、綁定遊戲帳號UID、聯繫客服、登出...等。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">4.遊戲類別</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              依據遊戲類型不同而做分類以便於查找，如『最近』為近期有進行過的遊戲機台(如有移除重裝將會重置)。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">5.JP大獎</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              押注任一款老虎機遊戲即可累積JP獎池，可由『查看』近期獲獎名單及【i】中了解JP彩金規則說明。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">6.遊戲入口</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              各遊戲入口，點擊將進行下載該遊戲資料檔，完成後即可進入遊戲。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">7.賭場</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              經營式風格，可使用『籌碼』進行升級各區域，升級越高、收益越高，每
                              12 小時可領取一次各區域的紅利總和，每日最高累積 2
                              次。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">8.下方功能區</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              【公告】功能為查看當前最新消息；
                              【社交】功能為好友管理，包含好友列表、邀請或被邀請、黑名單...等；
                              <br />
                              【卡牌】功能為獲得不同卡牌而集滿成冊時可兌換金幣；
                              <br />
                              【排行榜】功能為『富豪榜』當前最高金幣數者排序、『榮譽榜』當前最高單把倍率者排序、『競賽榜』活動條件符合者排序；
                              <br />
                              【俱樂部】功能為可選擇心儀的俱樂部加入後，押注各種遊戲可獲得不同比例的積分，每日將依據積分所對應比例以獲得紅利金幣，發放至保險箱中；
                              <br />
                              【角色】功能為遊戲大廳可看到顯示的角色及頭像，可透過『商城』中的『角色單抽』抽中隨機角色，或參加官方活動，或好友贈與都可獲得；
                              <br />
                              【活動】功能為可查看檔期特別活動之所有資訊；
                              <br />
                              【錦標賽】功能敬請期待；
                              <br />
                              【保險箱】功能為可設定『二次密碼』後『提領』或『存入』金幣，修改或忘記『二次密碼』都可在此以簡訊驗證碼方式重新設定。
                            </p>
                          </dd>
                        </dl>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">老虎機台選擇</h2>
                        <hr />
                        <img
                          src="/images/novice/gameui/gameui_img2.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.遊戲名稱</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示進入的『遊戲名稱』</p>
                          </dd>
                          <dt className="sub-menu-dt">2.機台特色</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              顯示遊戲的特色，並可篩選顯示『全』全部機台、或『空』當前空機台；『快速遊玩』為系統隨機進入此遊戲中一台空機台。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">3.離開遊戲</dt>
                          <dd className="sub-menu-dd">
                            <p>點擊『返回鍵』即可離開當下遊戲</p>
                          </dd>
                          <dt className="sub-menu-dt">4.機台資訊</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              每個機台都有『台號』，顯示頭像代表已有玩家正進行遊戲或保留機台；顯示『＋』代表為空機台，可左右滑動選擇機台，點入查看『機台資訊』並可點擊『登入機台』開始遊戲；『保留機台』為離開遊戲時，可選擇是否保留當前機台的使用權，依據VIP等級不同，可保留時間不同。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">5.機率表</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              達 VIP2
                              等級(含)以上可查看，『機台清單』中可參考每個機台的各項數據；『i』為介面說明可查看完整遊戲入口介面的詳細說明。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">6.遊戲廳</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              『試玩廳』為提供 100,000
                              金幣做為體驗遊戲之用，任何輸贏分在離開遊戲後將完全重置，不計入原有金幣數；『新手廳』押注額為
                              20 ；『一般廳』押注額為 100～900
                              ；『貴賓廳』押注額為
                              1,000～9,000；『頭家廳』押注額為 10,000～200,000
                              。
                            </p>
                          </dd>
                        </dl>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">商城</h2>
                        <hr />
                        <img
                          src="/images/novice/gameui/gameui_img3.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.VIP狀態</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              顯示當前 VIP 等級及進階至下一階 VIP
                              等級時所需『儲值點數』或『累積押注』，詳情可點擊『我的VIP』查閱。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">2.商城品項</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              『頭家點』為本遊戲儲值的點數；
                              <br />
                              『角色單抽』為使用金幣進行一次抽取隨機角色；
                              <br />
                              『商城十連抽』為使用金幣進行一次抽取隨機『道具碎片』、『卡牌』、『籌碼』...等共
                              10 個物品；
                              <br />
                              『超值禮包』為遊戲中獲得MEGA WIN或SUPER MEGA
                              WIN將顯示可購買的禮包項目。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">3.儲值品項</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              『頭家點』為依據安裝版本
                              (iOS/Google/APK)不同將顯示對應儲值金額及對應『頭家點』
                              <br />
                              特別提醒：儲值前敬請先成功設定支付方式並確認支付額度充足，及切勿連續重複點擊儲值項目，避免儲值失敗。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">4.兌換金幣</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              『頭家點』為兌換成『金幣』即在遊戲內使用，可輸入當下要兌換的點數，比值為頭家點：金幣＝１：１００；為了防止惡意洗幣之情況，兌換後的金幣在７日內不可發送紅包轉送他人。
                            </p>
                          </dd>
                        </dl>
                        <hr className="float-none" />
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

export default IntroGameUIPage
