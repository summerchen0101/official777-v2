import React, { memo, useEffect } from 'react'
import cs from 'classnames'

const gameList = [
  { name: '發財麻將', img: 'game01.png' },
  { name: '3D深海總動員', img: 'game02.png' },
  { name: '超級777', img: 'game03.png' },
  { name: '刮刮樂', img: 'game04.png' },
  { name: '年年有瑜', img: 'game05.png' },
  { name: '百家樂視訊', img: 'game06.png' },
  { name: '百人妞妞', img: 'game07.png' },
]

function GameBanners() {
  useEffect(() => {
    $('#myCarousel').carousel({
      interval: 3000,
    })
  }, [])
  return (
    <section className="game-box" id="game-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="/images/title_game.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div
        className="game-left wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="/images/game_left.png"
          alt=""
          className="img-responsive hidden-xs"
        />
        <img
          src="/images/game_phone_left.png"
          alt=""
          className="img-responsive hidden visible-xs"
        />
      </div>
      <div
        className="game-right wow bounceInRight"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="/images/game_right.png"
          alt=""
          className="img-responsive pull-right hidden-xs"
        />
        <img
          src="/images/game_phone_right.png"
          alt=""
          className="img-responsive pull-right hidden visible-xs"
        />
      </div>
      <div
        className="game-center wow bounceIn"
        data-wow-delay="1.5s"
        data-wow-duration="2s"
      >
        <div className="game-menu-box">
          <div className="btn-group">
            <button
              type="button"
              className="btn dropdown-toggle game-menu"
              data-toggle="dropdown"
            >
              <img
                src="/images/game_menu.png"
                alt=""
                className="img-responsive center-block"
              />
            </button>
            <ul className="dropdown-menu" role="menu">
              {gameList.map((t, i) => (
                <li key={t.img}>
                  <a
                    className="game-btn"
                    onClick={() => {
                      $('#myCarousel').carousel(i)
                    }}
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          <div className="game-banner-box">
            <div className="carousel-inner game-banner-inner">
              {gameList.map((t, i) => (
                <div key={t.img} className={cs('item', { active: i === 0 })}>
                  <img
                    src={`/images/${t.img}`}
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
