import React, { memo, useEffect, useState } from 'react'
import cs from 'classnames'

function VideoBanners() {
  const videoList = [
    {
      key: 'HVH_rGa_vC4',
      thumbnail: '形象片.jpg',
      name: '形象',
    },
    {
      key: 'Z2bHQoFElxo',
      thumbnail: '魔龍20.jpg',
      name: '魔龍',
    },
    {
      key: '5sOi_gm_j5U',
      thumbnail: '7pk.jpg',
      name: '7PK',
    },
    {
      key: 'RryoJOYZpdc',
      thumbnail: '九尾狐.jpg',
      name: '九尾狐',
    },
    {
      key: 'WqVpeBZCl74',
      thumbnail: '小瑪莉.jpg',
      name: '小瑪莉',
    },
  ]

  const [current, setCurrent] = useState(videoList[0].key)

  function openMovie(isYID) {
    var nW = $(window).width()
    var nH = $(window).height()
    $.fancybox.open({
      width: nW,
      height: nH,
      href: 'https://www.youtube.com/embed/' + isYID + '?autoplay=1',
      type: 'iframe',
    })
  }
  return (
    <section className="video-box" id="video-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="/images/title_video.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div
        className="video-left wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img src="/images/video_left.png" alt="" className="img-responsive" />
      </div>
      <div
        className="video-right wow bounceInRight"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="/images/video_right.png"
          alt=""
          className="img-responsive pull-right"
        />
      </div>
      <div className="video-center wow fadeInUpBig" data-wow-duration="1s">
        <div
          id="myCarousel2"
          className="carousel slide video-banner-box wow flipInX"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          {/* 轮播（Carousel）项目 */}
          <div className="carousel-inner video-banner-inner">
            {videoList.map((t) => (
              <div
                key={t.key}
                className={cs('item', { active: current === t.key })}
                onClick={(e) => {
                  openMovie(t.key)
                }}
              >
                <a href="#">
                  {/* {t.name} */}
                  <img
                    src={`/images/video_thumb/${t.thumbnail}`}
                    alt={t.name}
                    className="center-block img-responsive"
                    onClick={(e) => e.preventDefault()}
                  />
                </a>
              </div>
            ))}
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
                src="/images/game_arrow_back.png"
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
                src="/images/game_arrow_next.png"
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
          className="btn-morevideo mx-auto"
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
