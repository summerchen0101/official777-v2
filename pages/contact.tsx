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
                    <form role="form">
                      <div className="form-group col-lg-12 input-group-lg">
                        <label htmlFor="title" className="control-label">
                          問題主旨
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tielt"
                          placeholder="請輸入問題主旨，限60字"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="name">問類別題</label>
                        <select className="form-control input-lg">
                          <option>請選擇您要反映的案件類型</option>
                          <option>帳號</option>
                          <option>儲值</option>
                          <option>遊戲</option>
                          <option>活動</option>
                          <option>意見</option>
                          <option>檢舉</option>
                          <option>其他</option>
                        </select>
                      </div>
                      <div className="form-group col-lg-12 input-group-lg">
                        <label htmlFor="phone" className="control-label ">
                          手機號碼
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="請填寫您遊戲帳號所綁定之手機號碼"
                        />
                      </div>
                      <div className="form-group col-lg-12 input-group-lg">
                        <label htmlFor="email" className="control-label ">
                          電子信箱
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="請務必填寫正確，以利後續服務"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file" className="control-label ">
                          上傳檔案
                        </label>
                        <label className="sr-only" htmlFor="inputfile">
                          選擇檔案
                        </label>
                        <input
                          type="file"
                          id="inputfile"
                          className="btn  btn-default btn-lg btn-block"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <label htmlFor="name">請說明您想諮詢的問題</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={''}
                        />
                      </div>
                      <div className="button-center-box text-center">
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-center"
                          // onClick="self.location.href='service_contact_ok.html'"
                        >
                          確認送出
                        </button>
                      </div>
                    </form>
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

export default FilesPage
