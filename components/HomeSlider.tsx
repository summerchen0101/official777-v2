import React from 'react'
import Slider, { Settings } from 'react-slick'
import cs from 'classnames'
import useCdnUrl from '@/hooks/useCdnUrl'
import { useStore } from '@/store/useStore'
import Link from 'next/link'

export interface HomeSlide {
  img: string
  bossImg?: string
  link?: string
  newWin?: boolean
}
interface Props {
  slides: HomeSlide[]
  dots?: boolean
  isHomePage?: boolean
}

function HomeSlider({ slides, dots, isHomePage }: Props) {
  const toCdnUrl = useCdnUrl()
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
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
      {slides.map((t, i) => {
        const imgComp = (
          <img
            src={toCdnUrl(canRecharge ? t.img : t.bossImg || t.img)}
            className={cs(
              'h-[200px] md:h-auto object-cover object-center mx-auto max-h-[500px]',
            )}
            alt=""
          />
        )
        if (t.link) {
          return (
            <Link href={t.link} passHref key={i}>
              <a target={t.newWin ? '_blank' : '_self'}>{imgComp}</a>
            </Link>
          )
        }
        return imgComp
      })}
    </Slider>
  )
}

export default HomeSlider
