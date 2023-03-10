import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroVipPage() {
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
            src="/images/novice/title_vip.png"
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
                    <h2 className="text-center">VIP層級說明</h2>
                    <img
                      src="/images/novice/vip/vip_img10.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <br />
                    <img
                      src="/images/novice/vip/vip_img11.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <br />
                    <img
                      src="/images/novice/vip/vip_img12.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟1.遊戲大廳中，點擊「商城」</h4>
                    <img
                      src="/images/novice/vip/vip_img01.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟2.可查看當前VIP等級及累計進度</h4>
                    <img
                      src="/images/novice/vip/vip_img02.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟3.點擊我的VIP按鈕</h4>
                    <img
                      src="/images/novice/vip/vip_img03.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟4.可查看當前的VIP特權及下一等級的VIP特權</h4>
                    <img
                      src="/images/novice/vip/vip_img04.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟5.點擊VIP層級按鈕</h4>
                    <img
                      src="/images/novice/vip/vip_img05.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟6.查看完整的VIP特權</h4>
                    <img
                      src="/images/novice/vip/vip_img06.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <h4>步驟7.查看VIP說明</h4>
                    <img
                      src="/images/novice/vip/vip_img07.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <img
                      src="/images/novice/vip/vip_img08.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <img
                      src="/images/novice/vip/vip_img09.jpg"
                      alt=""
                      className="img-responsive center-block"
                    />
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

export default IntroVipPage
