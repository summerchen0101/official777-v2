import React, { useEffect } from 'react'

const banners = [
  {
    pcImg: '/images/headerbanner/pcbanner/img_banner1.png',
    mbImg: '/images/headerbanner/phonebanner/img_banner1.png',
    link: '#',
  },
  {
    pcImg: '/images/headerbanner/pcbanner/img_banner2.png',
    mbImg: '/images/headerbanner/phonebanner/img_banner2.png',
    link: '#',
  },
]

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
      {banners.map((b, i) => (
        <li key={i}>
          <div className="hidden-xs">
            <a href={b.link}>
              <img
                src={b.pcImg}
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
          <div className="hidden visible-xs">
            <a href={b.link}>
              <img
                src={b.mbImg}
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomeBanners
