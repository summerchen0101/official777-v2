import AppDownloadFloat from '@/components/AppDownloadFloat'
import HeaderNav from '@/components/HeaderNav'
import EventBanners from '@/components/home/EventBanners'
import FeatureBanners from '@/components/home/FeatureBanners'
import GameBanners from '@/components/home/GameBanners'
import HomeBanners from '@/components/home/HomeBanners'
import NewsBox from '@/components/home/NewsBox'
import RechargeBtns from '@/components/home/RechargeBtns'
import VideoBanners from '@/components/home/VideoBanners'
import LogoBox from '@/components/LogoBox'
import RechargeFloat from '@/components/RechargeFloat'
import React, { useEffect } from 'react'

function HomePage() {
  return (
    <>
      <HeaderNav />
      <AppDownloadFloat />
      <RechargeFloat />
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <HomeBanners />
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <RechargeBtns />
      <div className="arrow-box arrow-animate hidden-xs">
        <i className="arrow " />
      </div>
      <NewsBox />
      <EventBanners />
      <GameBanners />
      <VideoBanners />
      <FeatureBanners />
      {/*FOOTER*/}
      <footer className="footerbox" id="footerbox">
        <div className="gold-line" />
        <div className="copyrignt-box">
          <div className="cr-logo">
            <div className="cr-logo-left">
              <img
                src="images/logo_tech.png"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="cr-logo-right">
              <img
                src="images/logo_three.png"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="cr-text">
            <p>
              ※
              遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。請注意遊戲時間，避免沉迷。
              <br />
              ※
              本遊戲提供之機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。
              <br />
              ※
              本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。
              <br />
              <span>
                例行維護時間 星期三 09：00 ~
                12：00　電子信箱：support@online539.com
              </span>
            </p>
          </div>
          <div className="cr-grading">
            <img
              src="images/cr_grading.png"
              alt=""
              className="img-responsive"
            />
          </div>
          <hr className="no-float" />
        </div>
      </footer>
      {/*POPOBOX02*/}
      <div className="hw-overlay2" id="hw-layer02">
        <div className="hw-layer-wrap2">
          <span className="glyphicon glyphicon-remove hwLayer-close2" />
          <div className="hw-layer-wrap2-header">
            <h1 className="text-center">登入</h1>
          </div>
          <div className="hw-content2">
            <button type="button" className="btn btn-default pop-btn-lg">
              <img src="images/icon_loginApple.png" alt="" />
              Apple ID登入
            </button>
            <button type="button" className="btn btn-default pop-btn-lg">
              <img src="images/icon_loginLine.png" alt="" />
              Line登入
            </button>
            <form className="form-horizontal" role="form">
              <div className="input-group pop-btn-lg2">
                <div className="input-group-btn2">
                  <select className="form-control2">
                    <option value={1}>1(美國)</option>
                    <option value={60}>60(馬來西亞)</option>
                    <option value={852}>852(香港)</option>
                    <option value={886} selected>
                      886(台灣)
                    </option>
                  </select>
                </div>
                {/* /btn-group */}
                <input type="text" className="input-group-btn3" />
                <hr className="float-none" />
              </div>
              {/* /input-group */}
              <div className="pop-form-group">
                <label htmlFor="verify" className="col-lg-12 control-label">
                  簡訊驗證碼
                </label>
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control input-lg form-verify"
                    id="verify"
                    placeholder="請輸簡訊驗證碼"
                  />
                  <button
                    type="button"
                    className="btn btn-default btn-lg btn-verify"
                  >
                    發送驗證碼
                  </button>
                  <hr className="float-none" />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-default pop-btn-login btn-lg"
              >
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
