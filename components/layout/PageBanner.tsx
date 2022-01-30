import { homeSlides } from '@/pages/home'
import HomeSlider, { HomeSlide } from '../HomeSlider'

function PageBanner() {
  return (
    <section className="mb-16 mt-20">
      <HomeSlider slides={homeSlides} dots />
      <div className="bg-gradient-to-b from-black/70 via-purple-700 to-black/70 h-10 flex justify-center items-center -mt-2"></div>
    </section>
  )
}

export default PageBanner
