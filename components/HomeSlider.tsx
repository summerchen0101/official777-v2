import React from 'react'
import Slider, { Settings } from 'react-slick'
import cs from 'classnames'
import { toImgPath } from '@/utils'
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
            src={toImgPath(t.path)}
            className={cs(
              'h-[300px] w-full object-cover object-center',
              isHomePage ? 'h-[550px] xl:h-[72vh]' : 'lg:h-[350px]',
            )}
            alt=""
          />
        </div>
      ))}
    </Slider>
  )
}

export default HomeSlider
