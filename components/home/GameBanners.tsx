import React, { memo } from 'react'

function GameBanners() {
  return (
    <section className="game-box" id="game-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="images/title_game.png"
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
          src="images/game_left.png"
          alt=""
          className="img-responsive hidden-xs"
        />
        <img
          src="images/game_phone_left.png"
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
          src="images/game_right.png"
          alt=""
          className="img-responsive pull-right hidden-xs"
        />
        <img
          src="images/game_phone_right.png"
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
                src="images/game_menu.png"
                alt=""
                className="img-responsive center-block"
              />
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a className="slide-01 game-btn">發財麻將</a>
              </li>
              <li>
                <a className="slide-02 game-btn">3D深海總動員</a>
              </li>
              <li>
                <a className="slide-03 game-btn">超級777</a>
              </li>
              <li>
                <a className="slide-04 game-btn">刮刮樂</a>
              </li>
              <li>
                <a className="slide-05 game-btn">年年有瑜</a>
              </li>
              <li>
                <a className="slide-06 game-btn">百家樂視訊</a>
              </li>
              <li>
                <a className="slide-07 game-btn">百人妞妞</a>
              </li>
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
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
            <li data-target="#myCarousel" data-slide-to={4} />
            <li data-target="#myCarousel" data-slide-to={5} />
            <li data-target="#myCarousel" data-slide-to={6} />
          </ol>
          {/* 轮播（Carousel）项目 */}
          <div className="game-banner-box">
            <div className="carousel-inner game-banner-inner">
              <div className="item active">
                <img
                  src="images/game01.png"
                  alt="First slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game02.png"
                  alt="Second slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game03.png"
                  alt="Third slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game04.png"
                  alt="First slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game05.png"
                  alt="Second slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game06.png"
                  alt="Third slide"
                  className="center-block img-responsive"
                />
              </div>
              <div className="item">
                <img
                  src="images/game07.png"
                  alt="Second slide"
                  className="center-block img-responsive"
                />
              </div>
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
                  src="images/game_arrow_back.png"
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
                  src="images/game_arrow_next.png"
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
