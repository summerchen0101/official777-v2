import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroClubPage() {
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
            src="/images/novice/title_club.png"
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
                        <a href="#sub-tab-1">加入俱樂部</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">審批功能</a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">戰績報告介紹</a>
                      </li>
                      <li>
                        <a href="#sub-tab-4">積分名詞介紹</a>
                      </li>
                      <li>
                        <a href="#sub-tab-5">下級管理介紹 </a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">加入俱樂部教學</h2>
                        <hr />
                        <h4>步驟1.遊戲大廳點擊俱樂部</h4>
                        <img
                          src="/images/novice/club/club1_img01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2.選擇想加入的俱樂部，點擊「申請」按鈕</h4>
                        <img
                          src="/images/novice/club/club1_img02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr />
                        <h4>步驟3.填寫推薦人UID，點擊「申請加入」按鈕</h4>
                        <img
                          src="/images/novice/club/club1_img03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟4.等待俱樂部審批通過，即可加入俱樂部</h4>
                        <img
                          src="/images/novice/club/club1_img04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">審批功能</h2>
                        <hr />
                        <h4>步驟1.遊戲大廳點擊俱樂部</h4>
                        <img
                          src="/images/novice/club/club1_img01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.點擊右邊選單「申請審批」(申請審批僅有權限者可進行操作)
                        </h4>
                        <img
                          src="/images/novice/club/club2_img02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr />
                        <h4>步驟3.選擇「加入申請」按鈕即可進行申請審批</h4>
                        <img
                          src="/images/novice/club/club2_img03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟4.選擇「退出申請」按鈕可進行退出申請審批</h4>
                        <img
                          src="/images/novice/club/club2_img04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">戰績報告查看教學</h2>
                        <hr />
                        <h4>步驟1.遊戲大廳點擊俱樂部</h4>
                        <img
                          src="/images/novice/club/club1_img01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2.點擊右邊選單「戰績報告」</h4>
                        <img
                          src="/images/novice/club/club3_img02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr />
                        <h4>步驟3.可見俱樂部分紅</h4>
                        <img
                          src="/images/novice/club/club3_img03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <p>俱樂部分紅</p>
                        <ol>
                          <li>
                            以實際下注額之依據比例計算積分後，再以總積分 X
                            所屬俱樂部職等%比例算換紅利。
                          </li>
                          <li> 分紅如有小數點，將以【無條件捨去】計算之。</li>
                        </ol>
                        <h4>步驟4.可查看週結算、3日內、昨日、今日的積分報告</h4>
                        <img
                          src="/images/novice/club/club3_img04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <p>週結算</p>
                        <ol>
                          <li>上週一至本週一的積分報告</li>
                          <li>分紅如有小數點，將以【無條件捨去】計算之。</li>
                        </ol>
                        <p>3日內</p>
                        <ol>
                          <li>不包含當日，前３日的積分報告</li>
                          <li>分紅如有小數點，將以【無條件捨去】計算之。</li>
                        </ol>
                        <p>昨日</p>
                        <ol>
                          <li>不包含當日，昨日的積分報告</li>
                          <li>分紅如有小數點，將以【無條件捨去】計算之。</li>
                        </ol>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-4" className="sub-tab-content">
                        <h2 className="text-center">積分名詞介紹</h2>
                        <hr />
                        <h4>總積分. 該玩家+玩家所有下級的今日當前總積分加總</h4>
                        <img
                          src="/images/novice/club/club4_img01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>個人積分. 該玩家今日玩遊戲產生的當前總積分加總</h4>
                        <img
                          src="/images/novice/club/club4_img02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-5" className="sub-tab-content">
                        <h2 className="text-center">下級管理介紹</h2>
                        <hr />
                        <ul className="sub-mini-tab">
                          <li>
                            <a href="#sub-mini-tab-1">查看積分</a>
                          </li>
                          <li>
                            <a href="#sub-mini-tab-2">調整職等</a>
                          </li>
                          <li>
                            <a href="#sub-mini-tab-3">請離俱樂部</a>
                          </li>
                        </ul>
                        <hr className="float-none" />
                        <div className="sub_content_all">
                          <div
                            id="sub-mini-tab-1"
                            className="sub-mini-tab-content"
                          >
                            <h5 className="text-center">查看積分</h5>
                            <hr />
                            <h4>步驟1.俱樂部列表，選擇指定玩家的操作按鈕</h4>
                            <img
                              src="/images/novice/club/club5_1_img01.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟2.右邊選單選擇「個人積分」</h4>
                            <img
                              src="/images/novice/club/club5_1_img02.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <hr />
                            <h4>
                              步驟3.可查看14天的積分資料，近7天可點擊放大鏡查看明細
                            </h4>
                            <img
                              src="/images/novice/club/club5_1_img03.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟4.查看單一日期的積分明細</h4>
                            <img
                              src="/images/novice/club/club5_1_img04.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div
                            id="sub-mini-tab-2"
                            className="sub-mini-tab-content"
                          >
                            <h5 className="text-center">調整職等</h5>
                            <hr />
                            <h4>步驟1.俱樂部列表，選擇指定玩家的操作按鈕</h4>
                            <img
                              src="/images/novice/club/club5_1_img01.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟2.右邊選單選擇「調整職等」</h4>
                            <img
                              src="/images/novice/club/club5_2_img02.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <hr />
                            <h4>步驟3.選擇要調整的職等，並點擊確認調整</h4>
                            <img
                              src="/images/novice/club/club5_2_img03.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟4.點擊確定，即調整成功</h4>
                            <img
                              src="/images/novice/club/club5_2_img04.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                          <div
                            id="sub-mini-tab-3"
                            className="sub-mini-tab-content"
                          >
                            <h5 className="text-center">請離俱樂部</h5>
                            <hr />
                            <h4>步驟1.俱樂部列表，選擇指定玩家的操作按鈕</h4>
                            <img
                              src="/images/novice/club/club5_1_img01.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟2.右邊選單選擇「請離俱樂部」</h4>
                            <img
                              src="/images/novice/club/club5_3_img02.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <hr />
                            <h4>步驟3.選擇請離原因後，點選確定請離</h4>
                            <img
                              src="/images/novice/club/club5_3_img03.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                            <h4>步驟4.玩家成功移除俱樂部</h4>
                            <img
                              src="/images/novice/club/club5_3_img04.jpg"
                              alt=""
                              className="img-responsive center-block"
                            />
                          </div>
                        </div>
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

export default IntroClubPage
