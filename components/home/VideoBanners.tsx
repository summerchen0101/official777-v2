import React, { memo } from 'react'

function VideoBanners() {
  return (
    <section className="video-box" id="video-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="images/title_video.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div
        className="video-left wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img src="images/video_left.png" alt="" className="img-responsive" />
      </div>
      <div
        className="video-right wow bounceInRight"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="images/video_right.png"
          alt=""
          className="img-responsive pull-right"
        />
      </div>
      <div className="video-center wow fadeInUpBig" data-wow-duration="1s">
        <a
          className="slot-bar hidden-xs hidden-sm"
          href="#myCarousel2"
          role="button"
          data-slide="next"
        >
          <img src="images/slotbox.png" alt="" />
        </a>
        <div
          id="myCarousel2"
          className="carousel slide video-banner-box wow flipInX"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          {/* 轮播（Carousel）项目 */}
          <div className="carousel-inner video-banner-inner">
            <div className="item active">
              <a href="javascript:;" id="youtube01">
                <img
                  src="images/video_banner01_700x400.jpg"
                  alt="First slide"
                  className="center-block img-responsive"
                />
              </a>
            </div>
            <div className="item">
              <a href="javascript:;" id="youtube02">
                <img
                  src="images/video_banner02_700x400.jpg"
                  alt="Second slide"
                  className="center-block img-responsive"
                />
              </a>
            </div>
          </div>
          <a
            className="left carousel-control video-arrow-left"
            href="#myCarousel2"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            >
              <img
                src="images/game_arrow_back.png"
                alt=""
                className="img-responsive center-block"
              />
            </span>
            <span className="sr-only">Back</span>
          </a>
          <a
            className="right carousel-control video-arrow-right"
            href="#myCarousel2"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            >
              <img
                src="images/game_arrow_next.png"
                alt=""
                className="img-responsive center-block"
              />
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <a
          href="https://www.youtube.com/channel/UCeCfX4g4MOJnQeYQ2igb_lw"
          target="_blank"
          className="btn-morevideo"
          rel="noreferrer"
        >
          更多影片
        </a>
      </div>
      <hr className="float-none" />
    </section>
  )
}

export default memo(VideoBanners)
