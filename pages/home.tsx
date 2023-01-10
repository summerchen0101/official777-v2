import EventBanners from '@/components/home/EventBanners'
import FeatureBanners from '@/components/home/FeatureBanners'
import GameBanners from '@/components/home/GameBanners'
import HomeBanners from '@/components/home/HomeBanners'
import NewsBox from '@/components/home/NewsBox'
import RechargeBtns from '@/components/home/RechargeBtns'
import VideoBanners from '@/components/home/VideoBanners'
import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'

function HomePage() {
  return (
    <PageLayout>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <HomeBanners />
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <RechargeBtns />
      <div className="arrow-box arrow-animate hidden-xs">
        <i className="arrow " />
      </div>
      <NewsBox />
      <EventBanners />
      <GameBanners />
      <VideoBanners />
      <FeatureBanners />
    </PageLayout>
  )
}

export default HomePage
