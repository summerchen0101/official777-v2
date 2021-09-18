import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick'
export interface Slide {
  path: string
}
interface Props {
  slides: Slide[]
}

function SamplePrevArrow(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const { className, style, onClick } = props
  return (
    <div
      className="bg-slider-nav-next w-8 h-12 bg-contain bg-center absolute left-0 top-0 z-10 mt-12 -ml-10 rotate-180 cursor-pointer"
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
    <div
      className="bg-slider-nav-next w-8 h-12 bg-contain bg-center absolute right-0 top-0 z-10 mt-12 -mr-10 cursor-pointer"
      onClick={onClick}
    />
  )
}

function SectionSlider({ slides }: Props) {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Slider {...settings} className="-mx-2">
      {slides.map((t, i) => (
        <div key={i} className="px-2">
          <img src={t.path} alt="" />
        </div>
      ))}
    </Slider>
  )
}

export default SectionSlider
