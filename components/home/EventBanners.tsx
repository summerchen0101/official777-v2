import React, { memo, useEffect } from 'react'

const sliders = [
  {
    imgSrc: '/images/eventbanner/每日活動0516.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0517.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0518.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0519.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0520.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0521.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0522.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0523.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0524.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0525.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0526.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0527.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0528.jpg',
    link: 'https://www.facebook.com/Online539',
  },
  {
    imgSrc: '/images/eventbanner/每日活動0529.jpg',
    link: 'https://www.facebook.com/Online539',
  },
]

function EventBanners() {
  useEffect(() => {
    $?.('.event-banner')?.slick({
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
    <section className="event-box" id="event-box">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="/images/title_event.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      {/* <div
        className="event-left wow bounceInLeft"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img src="/images/event_left.png" alt="" className="img-responsive" />
      </div>
      <div
        className="event-right wow bounceInRight"
        data-wow-delay="0.2s"
        data-wow-duration="2s"
      >
        <img
          src="/images/event_right.png"
          alt=""
          className="img-responsive pull-right"
        />
      </div> */}
      <div
        className="event-center wow fadeInUp"
        data-wow-delay="0.4s"
        data-wow-duration="1s"
      >
        <div
          className="event-banner-box wow flipInX"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <ul className="event-banner slider ">
            {sliders.map((t) => (
              <li key={t.imgSrc} className="rounded-3xl overflow-hidden">
                <a href={t.link} target="_blank" rel="noreferrer">
                  <img
                    src={t.imgSrc}
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="float-none" />
    </section>
  )
}

export default memo(EventBanners)
