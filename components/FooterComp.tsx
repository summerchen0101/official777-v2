import React from 'react'

function FooterComp() {
  return (
    <footer className="footerbox" id="footerbox">
      <div className="gold-line" />
      <div className="footer-menu">
        <ul>
          <li className="text-center">
            <a href="content/service/service_terms.html">服務條款</a>
          </li>
          <li className="text-center">
            <a href="content/service/service_rules.html">遊戲管理規章</a>
          </li>
          <li className="text-center">
            <a href="content/service/service_privacy.html">隱私權政策</a>
          </li>
          <li className="text-center">
            <a href="content/service/service_equipment.html">需求配備</a>
          </li>
        </ul>
        <hr className="float-none" />
      </div>
      <div className="copyrignt-box">
        <div className="cr-logo">
          <div className="cr-logo-left">
            <img
              src="/images/logo_tech.png"
              alt=""
              className="img-responsive center-block"
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
          <img src="/images/cr_grading.png" alt="" className="img-responsive" />
        </div>
        <hr className="no-float" />
      </div>
    </footer>
  )
}

export default FooterComp
