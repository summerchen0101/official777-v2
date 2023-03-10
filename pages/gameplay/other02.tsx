import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'

function IntroGamePlayGamblePage() {
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
            src="/images/novice/title_gameplay.png"
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
                    <h1 className="text-center">3D深海總動員</h1>
                    <hr />
                    <div className="mini-title-box">
                      <img
                        src="/images/novice/title_gameplay_09.png"
                        alt=""
                        className="img-responsive center-block"
                      />
                    </div>
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_3.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_4.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <div className="mini-title-box">
                      <img
                        src="/images/novice/title_gameplay_10.png"
                        alt=""
                        className="img-responsive center-block"
                      />
                    </div>
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_1.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_2.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <div className="mini-title-box">
                      <img
                        src="/images/novice/title_gameplay_11.png"
                        alt=""
                        className="img-responsive center-block"
                      />
                    </div>
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_5.png"
                      alt=""
                      className="img-responsive center-block"
                    />
                    <img
                      src="/images/novice/gameplay/other02/GameInfo_2001_6.png"
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

export default IntroGamePlayGamblePage
