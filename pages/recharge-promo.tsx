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
            src="/images/recharge/title_recharge_event.png"
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
                    <h2 className="text-center">請輸入兌換序號</h2>
                    <hr />
                    <form className="form-horizontal" role="form">
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon group-fb-get">
                          <span className="glyphicon glyphicon-gift" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="輸入時請留意，序號前不可有空白鍵"
                        />
                      </div>
                      <br />
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                      >
                        確認兌換
                      </button>
                      <hr className="float-none" />
                    </form>
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
