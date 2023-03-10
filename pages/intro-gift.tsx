import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroGiftPage() {
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
            src="/images/novice/title_gift.png"
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
                        <a href="#sub-tab-1">發紅包</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">收紅包 </a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">紅包紀錄</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">發紅包</h2>
                        <hr />
                        <h4>步驟1. 遊戲大廳中，點擊右上方「紅包」按鈕</h4>
                        <img
                          src="/images/novice/gift/gift1_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2. 設置紅包發送位置、金額、人數、紅包</h4>
                        <img
                          src="/images/novice/gift/gift1_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.紅包類型</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              共3種紅包類型，分別為「開運紅包」、「口令紅包」、「圖片紅包」，可選擇要發送的紅包類型。
                              <br />
                              開運紅包：直接將紅包進行發送，僅需等待發送對象接收，不須再次經過審核。
                              <br />
                              口令紅包：搶/收紅包的玩家需針對發送者的指定提問回答答案，經發送者審核答案後才可獲得紅包。
                              <br />
                              圖片紅包：搶/收紅包的玩家需針對發送者的指定提問上傳圖片，經發送者審核圖片後才可獲得紅包。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">2.發送位置</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              共6種發送位置可選擇，分別為「一般玩家」、「世界頻道」、「好友」、「群組」、「俱樂部」、「聯盟」。
                              <br />
                              一般玩家：僅發送給一位非好友玩家，且僅可發送紅包，不可進行聊天對話。
                              <br />
                              世界頻道：發送至世界頻道，所有世界頻道內的玩家皆可搶收該紅包。
                              <br />
                              好友：僅發送給一位已是好友狀態的玩家。
                              <br />
                              群組：發送至群組頻道，所有群組內的玩家皆可搶收該紅包。
                              <br />
                              俱樂部：發送至自己所加入的俱樂部頻道，所有俱樂部內的玩家皆可搶收該紅包。
                              <br />
                              聯盟：發送至自己所屬的聯盟頻道，所有聯盟內的玩家皆可搶收該紅包。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">3.發送對象</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              若發送位置選擇「一般玩家」、「好友」、「群組」、「聯盟」其一，就需要進一步選擇發送對象。
                              <br />
                              一般玩家：透過玩家UID或玩家暱稱，查找要發送的遊戲內玩家，並進行選擇。
                              <br />
                              好友：透過玩家UID或玩家暱稱，查找要發送的遊戲內好友，並進行選擇。
                              <br />
                              群組：於自己所在的各個群組中，選擇要發送的群組。
                              <br />
                              聯盟：於自己所在的各個聯盟中，選擇要發送的聯盟。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">4.總發送金額</dt>
                          <dd className="sub-menu-dd">
                            <p>輸入該次紅包要發送的總金額。</p>
                          </dd>
                          <dt className="sub-menu-dt">5.發送提示</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              顯示發紅包後的金幣不可低於多少金額，以及點擊ｉ按鈕可查看被凍結的金幣明細。（儲值後7天內不可將儲值的金幣透過紅包發出）
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">6.總發送人數</dt>
                          <dd className="sub-menu-dd">
                            <p>設置該筆紅包可搶收的總人數。</p>
                          </dd>
                          <dt className="sub-menu-dt">7.紅包訊息</dt>
                          <dd className="sub-menu-dd">
                            <p>設置發送紅包時，搶收者看到的訊息內容。</p>
                          </dd>
                          <dt className="sub-menu-dt">8.紅包紀錄</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              點擊可查看個人紅包的發送即接收紀錄，若有發送口令紅包或圖片紅包，也可於此處進行紅包審核。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">9.發送</dt>
                          <dd className="sub-menu-dd">
                            <p>設置完成後，即可點擊該按鈕將紅包發出。</p>
                          </dd>
                        </dl>
                        <hr />
                        <h4>步驟3. 提示訊息顯示發送成功</h4>
                        <img
                          src="/images/novice/gift/gift1_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">收紅包</h2>
                        <hr />
                        <h4>步驟1. 於聊天頻道中，點擊紅包消息</h4>
                        <img
                          src="/images/novice/gift/gift2_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.1
                          若為開運紅包，點擊紅包消息後即顯示搶/收成功或手速太慢
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <img
                          src="/images/novice/gift/gift2_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <img
                          src="/images/novice/gift/gift2_04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.2.1 若為口令紅包，點擊紅包消息後需輸入任務答案
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_05.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.2.2
                          輸入任務答案送出後，顯示已送出提示，等待發送者審核
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_06.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.2.3
                          任務答案通過發送者審核後，可於聊天中查看紅包搶收結果，且系統同步發送推播訊息
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_07.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.3.1 若為口令紅包，點擊紅包消息後需上傳任務圖片
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_08.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.3.2
                          上傳任務圖片送出後，顯示已送出提示，等待發送者審核
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_09.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.3.3
                          任務答案通過發送者審核後，可於聊天中查看紅包搶收結果，且系統將同步發送推播訊息
                        </h4>
                        <img
                          src="/images/novice/gift/gift2_10.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">紅包紀錄</h2>
                        <hr />
                        <h4>步驟1. 於遊戲大廳中點擊紅包，開啟紅包設置彈窗</h4>
                        <img
                          src="/images/novice/gift/gift1_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2. 點擊左下角紅包紀錄，開啟紀錄彈窗</h4>
                        <img
                          src="/images/novice/gift/gift3_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟3. 查看紅包發送紀錄</h4>
                        <img
                          src="/images/novice/gift/gift3_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.發送頻道</dt>
                          <dd className="sub-menu-dd">
                            <p>紀錄該筆紅包的發送位置。</p>
                          </dd>
                          <dt className="sub-menu-dt">2.配額</dt>
                          <dd className="sub-menu-dd">
                            <p>紀錄該筆紅包的發送總金額。</p>
                          </dd>
                          <dt className="sub-menu-dt">3.人數</dt>
                          <dd className="sub-menu-dd">
                            <p>紀錄該筆紅包可提供給幾位玩家搶收。</p>
                          </dd>
                          <dt className="sub-menu-dt">4.發送時間</dt>
                          <dd className="sub-menu-dd">
                            <p>紀錄該筆紅包發出的時間。</p>
                          </dd>
                          <dt className="sub-menu-dt">5.查看詳情</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              點擊可查看搶收該筆紅包的玩家詳細資訊，包括領取人、領取金額、領取時間；若該筆紅包需經過審核，也可於詳情中進行審核。
                            </p>
                          </dd>
                          <img
                            src="/images/novice/gift/gift3_04.jpg"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <dt className="sub-menu-dt">5.1尚未領取人數</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              紀錄該筆紅包還可搶收的名額（發送人數－已領人數）
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">5.2任務訊息</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              若該筆紅包為口令紅包或圖片紅包，則該欄顯示紅包發送時所設置的任務條件內容。
                            </p>
                          </dd>
                          <dt className="sub-menu-dt">5.3配額</dt>
                          <dd className="sub-menu-dd">
                            <p>搶收該筆紅包的玩家所獲得的紅包金額。</p>
                          </dd>
                          <dt className="sub-menu-dt">5.4領取時間</dt>
                          <dd className="sub-menu-dd">
                            <p>玩家搶收該筆紅包的時間。</p>
                          </dd>
                          <dt className="sub-menu-dt">5.5審核狀況</dt>
                          <dd className="sub-menu-dd">
                            <p>
                              紀錄該筆搶收紀錄的審核情況，未審核前將顯示玩家回答的答案，待發送者審核後即顯示審核狀態，通過則玩家成功獲得紅包；無論何種紅包，若是持續無領取，將顯示「未通過」並４８小時後退回；「口令紅包」手動審核未通過時，將於當下系統作業完成立即退回。
                            </p>
                          </dd>
                        </dl>
                        <hr />
                        <h4>紅包收受紀錄</h4>
                        <img
                          src="/images/novice/gift/gift3_05.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                        <dl className="sub-menu-dl">
                          <dt className="sub-menu-dt">1.發送者</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示該筆紅包的發送玩家暱稱</p>
                          </dd>
                          <dt className="sub-menu-dt">2.收受頻道</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示該筆紅包是於哪個頻道搶收的</p>
                          </dd>
                          <dt className="sub-menu-dt">3.發送時間</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示該筆紅包的發送時間。</p>
                          </dd>
                          <dt className="sub-menu-dt">4.配額</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示該筆紅包搶收獲得的金幣金額。</p>
                          </dd>
                          <dt className="sub-menu-dt">5.收受時間</dt>
                          <dd className="sub-menu-dd">
                            <p>顯示成功獲得該筆紅包金額的時間。</p>
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

export default IntroGiftPage
