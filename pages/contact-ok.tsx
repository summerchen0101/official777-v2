import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'

function ContactOkPage() {
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
            src="/images/service/title_contact.png"
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
                    <h2 className="text-center">感謝您的回報</h2>
                    <hr />
                    <p>
                      尊貴的頭家：
                      <br />
                      感謝您的來信，七七七娛樂城客服團隊將於三天內回覆您的來信，敬請耐心等候，謝謝您的支持與理解；或可加入官方LINE帳號@online539，我們將盡快提供協助。
                    </p>
                    <hr className="float-none" />
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

export default ContactOkPage
