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
              src="/images/headerbanner/pcbanner/header_banner01.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a href="#">
            <img
              src="/images/headerbanner/phonebanner/phonebanner01.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
      </li>
      <li>
        <div className="hidden-xs">
          <a
            href="https://activity.online539.com/event/anniversary1212/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/headerbanner/pcbanner/header_banner02.jpg"
              alt=""
              className="img-responsive center-block"
            />
          </a>
        </div>
        <div className="hidden visible-xs">
          <a
            href="https://activity.online539.com/event/anniversary1212/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/headerbanner/phonebanner/phonebanner02.jpg"
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
