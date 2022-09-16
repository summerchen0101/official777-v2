import useCdnUrl from '@/hooks/useCdnUrl'
import { homeSlides } from '@/pages/home'
import HomeSlider, { HomeSlide } from '../HomeSlider'

function PageBanner() {
  const toCdnUrl = useCdnUrl()
  return (
    <section className="mb-16 mt-16 sm:mt-20">
      <img src={'/banner/banner_02.jpg'} alt="" />
      <a
        className="block w-full pb-[50%] xl:pb-[400px] bg-center bg-no-repeatxl:bg-auto bg-160% xl:bg-100%"
        style={{
          backgroundImage: `url(${toCdnUrl('/banner/banner_02.jpg')})`,
        }}
      />
    </section>
  )
}

export default PageBanner
