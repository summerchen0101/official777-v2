import HomeSlider, { Slide } from '../HomeSlider'

function PageBanner() {
  const homeSlides: Slide[] = Array(8).fill({
    path: '/banner/banner_01.png',
  })
  return (
    <section className="mb-10">
      <HomeSlider slides={homeSlides} dots />
      <div className="bg-gradient-to-b from-black/70 via-purple-700 to-black/70 h-12 flex justify-center items-center -mt-2"></div>
    </section>
  )
}

export default PageBanner
