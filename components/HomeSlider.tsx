import React from 'react'
import Slider, { Settings } from 'react-slick'
import cs from 'classnames'
import { toCdnUrl } from '@/utils'
export interface HomeSlide {
  path: string
}
interface Props {
  slides: HomeSlide[]
  dots?: boolean
  isHomePage?: boolean
}

function HomeSlider({ slides, dots, isHomePage }: Props) {
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
        <div key={i}>
          <img
            src={toCdnUrl(t.path)}
            className={cs(
              'h-[30%] w-full object-cover object-center',
              isHomePage ? 'max-h-[550px]' : 'lg:h-[350px]',
            )}
            alt=""
          />
        </div>
      ))}
    </Slider>
  )
}

export default HomeSlider
