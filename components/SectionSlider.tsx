import { toImgPath } from '@/utils'
import React from 'react'
import Slider, { Settings } from 'react-slick'
export interface GameSlide {
  gameID: number
}
interface Props {
  slides: GameSlide[]
  slidesToShow: number
  onClick?: (slide: GameSlide) => void
}

function SamplePrevArrow(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const { className, style, onClick } = props
  return (
    <img
      src={toImgPath('/slider_nav_next.png')}
      alt=""
      className="w-8 h-full object-contain absolute left-0 top-0 z-10 -ml-8 cursor-pointer rotate-180"
      onClick={onClick}
    />
  )
}

function SampleNextArrow(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const { className, style, onClick } = props
  return (
    <img
      src={toImgPath('/slider_nav_next.png')}
      alt=""
      className="w-8 h-full object-contain absolute right-0 top-0 z-10 -mr-8 cursor-pointer"
      onClick={onClick}
    />
  )
}

function SectionSlider({ slides, slidesToShow, onClick }: Props) {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Slider {...settings} className="-mx-2">
      {slides.map((t, i) => (
        <div key={i} className="px-2" onClick={() => onClick && onClick(t)}>
          <img
            src={toImgPath(`/game/banner/480x320/${t.gameID}.jpg`)}
            className="frame cursor-pointer mx-auto"
            alt=""
          />
        </div>
      ))}
    </Slider>
  )
}

export default SectionSlider
