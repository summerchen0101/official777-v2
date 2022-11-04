import useCdnUrl from '@/hooks/useCdnUrl'
import { useStore } from '@/store/useStore'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

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
      {slides.map((t, i) => (
        <Link href={t.link || '#'} passHref key={i}>
          <a
            target={t.newWin ? '_blank' : '_self'}
            className="block w-full pb-[50%] xl:pb-[580px] bg-center bg-no-repeat bg-160% xl:bg-cover"
            draggable={false}
            style={{
              backgroundImage: `url(${toCdnUrl(
                canRecharge ? t.img : t.bossImg || t.img,
              )})`,
            }}
          ></a>
        </Link>
      ))}
    </Slider>
  )
}

export default HomeSlider
