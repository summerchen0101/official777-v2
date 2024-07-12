import React, { memo, useEffect } from 'react'
import cs from 'classnames'

const gameList = [
  { name: '雷神之鎚', img: 'img_hotgame_slot1.jpg' },
  { name: '魔龍傳奇', img: 'img_hotgame_slot2.jpg' },
  { name: '多福多發', img: 'img_hotgame_slot3.jpg' },
  { name: '招財貓', img: 'img_hotgame_slot4.jpg' },
  { name: '鍾馗', img: 'img_hotgame_slot7.jpg' },
  { name: '少林熊貓', img: 'img_hotgame_slot9.jpg' },
  { name: '喜從天降', img: 'img_hotgame_slot10.jpg' },
]

function GameBanners() {
  useEffect(() => {
    $('#myCarousel').carousel({
      interval: 3000,
    })
  }, [])
  return (
    <section className="game-box mx-auto" id="game-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="/images/title_game.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div
        className="game-center wow bounceIn mx-auto mb-24"
        data-wow-delay="1.5s"
        data-wow-duration="2s"
      >
        <div
          id="myCarousel"
          className="carousel slide banner-box-list wow flipInY"
          data-wow-delay="1.5s"
          data-wow-duration="1s"
        >
          {/* 轮播（Carousel）指标 */}
          <ol className="carousel-indicators">
            {gameList.map((t, i) => (
              <li
                key={t.img}
                data-target="#myCarousel"
                data-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </ol>
          {/* 轮播（Carousel）项目 */}
          <div className="">
            <div className="carousel-inner game-banner-inner rounded-2xl shadow-2xl">
              {gameList.map((t, i) => (
                <div key={t.img} className={cs('item', { active: i === 0 })}>
                  <img
                    src={`/images/hotgame/${t.img}`}
                    alt={t.name}
                    className="center-block img-responsive"
                  />
                </div>
              ))}

              {/* 轮播（Carousel）导航 */}
            </div>
            <a
              className="left carousel-control"
              href="#myCarousel"
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
              className="right carousel-control"
              href="#myCarousel"
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
        </div>
      </div>
      <hr className="float-none" />
    </section>
  )
}

export default memo(GameBanners)
