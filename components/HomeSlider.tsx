import React from 'react'
import Slider, { Settings } from 'react-slick'

export interface Slide {
  path: string
}
interface Props {
  slides: Slide[]
  dots?: boolean
}

function HomeSlider({ slides, dots }: Props) {
  var settings: Settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => <div className="dot"></div>,
    dotsClass: 'slick-dots slick-thumb space-x-4',
  }
  return (
    <Slider {...settings}>
      {slides.map((t, i) => (
        <div key={i} className="px-2">
          <img
            src={t.path}
            className="h-[300px] lg:h-[500px] w-full object-cover object-center"
            alt=""
          />
        </div>
      ))}
    </Slider>
  )
}

export default HomeSlider
