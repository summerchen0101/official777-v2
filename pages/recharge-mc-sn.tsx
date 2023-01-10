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
        <div className="content-btn-box">
          <div className="btn-content-mycard">
            <a href="mc_giftcard.html">
              <img
                src="/images/recharge/mc_giftcard.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <div className="btn-content-mycard">
            <a href="mc_transfer.html">
              <img
                src="/images/recharge/mc_transfer.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <div className="btn-content-mycard">
            <a href="mc_tele.html">
              <img
                src="/images/recharge/mc_tele.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <div className="btn-content-mycard">
            <a href="mc_credit.html">
              <img
                src="/images/recharge/mc_credit.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <div className="btn-content-mycard">
            <a href="mc_coupon.html">
              <img
                src="/images/recharge/mc_coupon.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <hr className="float-none" />
        </div>

        <div className="content-title-box">
          <img
            src="/images/recharge/title_mc_giftcard.png"
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
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>品項</th>
                            <th>金額</th>
                            <th>頭家點</th>
                            <th>金幣</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios1"
                                defaultValue="option1"
                                defaultChecked
                              />
                            </td>
                            <td>$30</td>
                            <td>30</td>
                            <td>3,000(0%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios2"
                                defaultValue="option2"
                              />
                            </td>
                            <td>$50</td>
                            <td>50</td>
                            <td>5,000(0%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios3"
                                defaultValue="option3"
                              />
                            </td>
                            <td>$90</td>
                            <td>90</td>
                            <td>9,000(0%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios4"
                                defaultValue="option4"
                              />
                            </td>
                            <td>$150</td>
                            <td>150</td>
                            <td>15,000(0%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios5"
                                defaultValue="option5"
                              />
                            </td>
                            <td>$300</td>
                            <td>303</td>
                            <td>30,300(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios6"
                                defaultValue="option6"
                              />
                            </td>
                            <td>$350</td>
                            <td>354</td>
                            <td>35,400(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios7"
                                defaultValue="option7"
                              />
                            </td>
                            <td>$400</td>
                            <td>404</td>
                            <td>40,400(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios8"
                                defaultValue="option8"
                              />
                            </td>
                            <td>$450</td>
                            <td>455</td>
                            <td>45,500(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios9"
                                defaultValue="option9"
                              />
                            </td>
                            <td>$500</td>
                            <td>505</td>
                            <td>50,500(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios10"
                                defaultValue="option10"
                              />
                            </td>
                            <td>$750</td>
                            <td>758</td>
                            <td>75,800(1%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios11"
                                defaultValue="option11"
                              />
                            </td>
                            <td>$1,000</td>
                            <td>1020</td>
                            <td>102,000(2%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios12"
                                defaultValue="option12"
                              />
                            </td>
                            <td>$1,150</td>
                            <td>1,173</td>
                            <td>117,300(2%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios13"
                                defaultValue="option13"
                              />
                            </td>
                            <td>$1,490</td>
                            <td>1,520</td>
                            <td>152,000(2%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios14"
                                defaultValue="option14"
                              />
                            </td>
                            <td>$2,000</td>
                            <td>2,060</td>
                            <td>206,000(3%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios15"
                                defaultValue="option15"
                              />
                            </td>
                            <td>$2,500</td>
                            <td>2,575</td>
                            <td>257,500(3%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios16"
                                defaultValue="option16"
                              />
                            </td>
                            <td>$3,000</td>
                            <td>3,090</td>
                            <td>309,000(3%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios17"
                                defaultValue="option17"
                              />
                            </td>
                            <td>$5,000</td>
                            <td>5,250</td>
                            <td>525,000(5%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios18"
                                defaultValue="option18"
                              />
                            </td>
                            <td>$10,000</td>
                            <td>10,600</td>
                            <td>1,060,000(6%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios19"
                                defaultValue="option19"
                              />
                            </td>
                            <td>$170</td>
                            <td>170</td>
                            <td>17,000(0%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios20"
                                defaultValue="option20"
                              />
                            </td>
                            <td>$3,290</td>
                            <td>3,422</td>
                            <td>342,200(4%)</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios21"
                                defaultValue="option21"
                              />
                            </td>
                            <td>$1,690</td>
                            <td>1,725</td>
                            <td>172,500(2%)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-center">
                      <span className="glyphicon glyphicon-exclamation-sign" />
                      請注意！系統處理時間約5分鐘 ~
                      1小時才能完成遊戲入點，請耐心等候。
                    </p>
                    <br />
                    <form className="form-horizontal" role="form">
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
                        立即購買
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
