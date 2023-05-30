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
              src="/images/headerbanner/pcbanner/回饋大贈送_1920x700.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/回饋大贈送_828x1150.png"
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
              src="/images/headerbanner/pcbanner/封面_1920x700.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/封面_828x1150.jpg"
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

      <li>
        <div className="hidden-xs">
          <a href="#">
            <img
              src="/images/headerbanner/pcbanner/header_banner01.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/phonebanner01.png"
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
