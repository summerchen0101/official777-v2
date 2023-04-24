import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroCardPage() {
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
            src="/images/novice/header_phone_novice.jpg"
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
            src="/images/novice/title_card.png"
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
                        <a href="#sub-tab-1">收集方式</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">卡牌冊 </a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">集滿兌換</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">收集方式</h2>
                        <hr />
                        <h4>步驟1.遊戲大廳中，點擊「商城」</h4>
                        <img
                          src="/images/novice/card/card_img1_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2.參與商城十連抽</h4>
                        <img
                          src="/images/novice/card/card_img1_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟3.獲得卡牌</h4>
                        <img
                          src="/images/novice/card/card_img1_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">卡牌冊</h2>
                        <hr />
                        <h4>步驟1.遊戲大廳選擇卡牌</h4>
                        <img
                          src="/images/novice/card/card_img2_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2.可查看所有卡牌冊、當前收集概況及集滿後可兌換金幣金額
                        </h4>
                        <img
                          src="/images/novice/card/card_img2_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟3.點擊個別卡冊可查看個別卡牌及其收集數量，卡牌右下角數量為該張卡牌當前收集數量
                        </h4>
                        <img
                          src="/images/novice/card/card_img2_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <img
                          src="/images/novice/card/card_img2_04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">集滿兌換</h2>
                        <hr />
                        <h4>步驟1.集滿整冊13張後，卡冊下方將出現領取按鈕</h4>
                        <img
                          src="/images/novice/card/card_img3_01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟2.點擊領取按鈕</h4>
                        <img
                          src="/images/novice/card/card_img3_02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>步驟3.選擇要兌換的卡牌組數量</h4>
                        <img
                          src="/images/novice/card/card_img3_03.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟4.確認兌換後，顯示兌換成功提示，兌換獲得的金幣將自動歸入金幣餘額中
                        </h4>
                        <img
                          src="/images/novice/card/card_img3_04.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
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

export default IntroCardPage
