import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
export interface Slide {
  path: string
  name: string
}
interface Props {
  slides: Slide[]
  slidesToShow: number
  onClick?: (slide: Slide) => void
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
      src="/slider_nav_next.png"
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
      src="/slider_nav_next.png"
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
          <img src={t.path} className="frame cursor-pointer" alt="" />
        </div>
      ))}
    </Slider>
  )
}

export default SectionSlider
