import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import PkgSerialNumForm from '@/components/PkgSerialNumForm'
import PromoSerialNumForm from '@/components/PromoSerialNumForm'
import useAuthPage from '@/utils/useAuthPage'
import { useEffect } from 'react'

function RechargePkgPage() {
  useAuthPage()

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
            src="/images/recharge/header_recharge.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/recharge/header_phone_recharge.jpg"
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
            src="/images/recharge/title_newnumber.png"
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
                        <a href="#sub-tab-1">產包序號開通</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">活動序號兌換</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <div className="h-4"></div>
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">產包序號開通</h2>
                        <hr />
                        <PkgSerialNumForm />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">活動序號兌換</h2>
                        <hr />
                        <PromoSerialNumForm />
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

export default RechargePkgPage
