import React, { memo, useEffect } from 'react'

function FeatureBanners() {
  useEffect(() => {
    $('.frature-banner').slick({
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
    <section className="frature-box" id="frature-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="images/title_frature.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div
        className="frature-left wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="images/frature_left.png"
          alt=""
          className="img-responsive hidden-xs"
        />
        <img
          src="images/frature_phone_left.png"
          alt=""
          className="img-responsive hidden visible-xs"
        />
      </div>
      <div
        className="frature-right wow bounceInRight"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="images/frature_right.png"
          alt=""
          className="img-responsive pull-right hidden-xs"
        />
        <img
          src="images/frature_phone_right.png"
          alt=""
          className="img-responsive hidden visible-xs"
        />
      </div>
      <div className="frature-center wow fadeInUpBig" data-wow-duration="1s">
        <div className="frature-banner-box wow flipInX" data-wow-duration="1s">
          <ul className="frature-banner slider">
            <li>
              <img
                src="images/frature_banner01_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner02_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner03_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner04_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner05_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner06_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner07_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
            <li>
              <img
                src="images/frature_banner08_800x430.jpg"
                alt=""
                className="img-responsive center-block"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="float-none" />
    </section>
  )
}

export default memo(FeatureBanners)
