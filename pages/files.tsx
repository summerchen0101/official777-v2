import HoverImg from '@/components/HoverImg'
import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function FilesPage() {
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
            src="/images/service/title_files.png"
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
                    <br />
                    <div className="row">
                      <div className="col-lg-4 btn-img-hover">
                        <a
                          href="https://resource-cdn.bigboss101.com/official/download/兆豐遊戲全球科技_領獎單.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <HoverImg
                            src="/images/service/btn_prize.png"
                            activeSrc="/images/service/btn_prize_active.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </a>
                      </div>
                      <div className="col-lg-4 btn-img-hover">
                        <a
                          href="https://resource-cdn.bigboss101.com/official/download/兆豐遊戲全球科技_手機號碼暨玩家名稱修改申請單.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <HoverImg
                            src="/images/service/btn_revise.png"
                            activeSrc="/images/service/btn_revise_active.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </a>
                      </div>
                      <div className="col-lg-4 btn-img-hover">
                        <a
                          href="https://resource-cdn.bigboss101.com/official/download/兆豐遊戲全球科技_帳號證明暨遊戲歷程申請單.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <HoverImg
                            src="/images/service/btn_list.png"
                            activeSrc="/images/service/btn_list_active.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />
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

export default FilesPage
