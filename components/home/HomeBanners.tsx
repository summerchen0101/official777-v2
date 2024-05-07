import React, { useEffect } from 'react'

function HomeBanners() {
  useEffect(() => {
    $('.header-banner').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    })
  }, [])
  return (
    <ul className="header-banner slider">
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/洛基傳奇_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/洛基傳奇_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/西遊記_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/西遊記_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/防詐騙宣導_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/防詐騙宣導_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/儲值01_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/儲值01_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/儲值02_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/儲值02_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/儲值03_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/儲值03_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/儲值04_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/儲值04_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/綠界_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/綠界_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/周年_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/周年_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/MAIN_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/MAIN_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/FB_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/FB_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/新年2_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/新年2_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/俱樂部素材_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/俱樂部素材_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/德州撲克_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/德州撲克_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>

      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/雷神之錘_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/雷神之錘_828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/九尾狐BANNER-1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/九尾狐-828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/魔龍傳奇BANNER-1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/魔龍傳奇-828x1150.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
    </ul>
  )
}

export default HomeBanners
